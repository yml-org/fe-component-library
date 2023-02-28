import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { TailwindElement } from '../shared/tailwind.element';
import Style from './scroll.component.scss?inline';
import { preload } from '../utils/preload';
import { updateText } from '../utils/updateText';
import { setupCanvas } from '../utils/setupCanvas';
import { debounce } from '../utils/debounce';
import {
  defaultDataSlots,
  defaultDesktopImages,
  defaultMobileImages,
} from '../constants/scroll.variant';
import { dataSlots } from '../types/scroll.component';

@customElement('scroll-component')
export class ScrollComponent extends TailwindElement(Style) {
  @property()
  dataSlot: Array<dataSlots> = defaultDataSlots;

  @property()
  desktopImages: object = defaultDesktopImages;

  @property()
  mobileImages: object = defaultMobileImages;

  protected firstUpdated() {
    const container = document.body
      .getElementsByTagName('scroll-component')[0]
      .shadowRoot.querySelector('.scrub-scroll') as HTMLElement;
    const elements = container.querySelectorAll('.scroll-reveal');
    const canvas = container.querySelector('canvas') as HTMLCanvasElement;
    const context = canvas.getContext('2d');

    let images: HTMLImageElement[] = [];
    let lastDrawnFrame = -1;

    const drawFrame = (frameIndex: number) => {
      if (lastDrawnFrame === frameIndex || !images[frameIndex]?.complete)
        return;

      context?.drawImage(images[frameIndex], 0, 0);
      lastDrawnFrame = frameIndex;
    };

    const handleScroll = () => {
      const maxScrollTop = container.scrollHeight - window.innerHeight;
      const scrollFraction = document.documentElement.scrollTop / maxScrollTop;
      let frameIndex = Math.min(
        images.length - 1,
        Math.ceil(scrollFraction * images.length)
      );

      if (scrollFraction > 1) {
        elements.forEach((el) => el.classList.remove('active'));
        canvas.classList.add('scroll-finished');
        frameIndex = images.length - 1;
        return;
      }
      canvas.classList.remove('scroll-finished');

      requestAnimationFrame(() => {
        elements.forEach((el) => updateText(el, frameIndex));
        drawFrame(frameIndex);
      });
    };

    const handleResize = async () => {
      let renderForced = false;
      images = await preload(this.desktopImages, this.mobileImages);
      await setupCanvas(canvas);

      const forceReRender = () => {
        renderForced = true;
        lastDrawnFrame = -1;
        handleScroll();
      };

      images[2].onload = forceReRender;
      if (images[2].complete && !renderForced) {
        forceReRender();
      }
    };

    const init = async () => {
      setupCanvas(canvas);
      images = await preload(this.desktopImages, this.mobileImages);
      images[2].onload = handleScroll;
    };

    history.scrollRestoration = 'manual';
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    window.addEventListener('load', handleScroll, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', debounce(handleResize), {
      passive: true,
    });

    init();
  }
  render() {
    return html`
      <div>
        <section class="scrub-scroll " aria-hidden="true">
          <canvas></canvas>
          ${this.dataSlot.map((item) => {
            return html` <div
              part=${item.slotName}
              class="scroll-reveal text"
              data-start=${item.dataStart}
              data-end=${item.dataEnd}
            >
              <slot name=${item.slotName}></slot>
            </div>`;
          })}
        </section>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'scroll-component': ScrollComponent;
  }
}
