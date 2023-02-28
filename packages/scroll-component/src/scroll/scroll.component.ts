import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { TailwindElement } from '../shared/tailwind.element';
import Style from './scroll.component.scss?inline';
import { preload } from '../utils/preload';
import { updateText } from '../utils/updateText';
import { setupCanvas } from '../utils/setupCanvas';
import { debounce } from '../utils/debounce';

@customElement('scroll-component')
export class ScrollComponent extends TailwindElement(Style) {
  @property()
  textSlot = [
    {
      textStart: 2,
      textEnd: 20,
      slotName: 'text1',
    },
    {
      textStart: 22,
      textEnd: 40,
      slotName: 'text2',
    },
    {
      textStart: 41,
      textEnd: 50,
      slotName: 'text3',
    },
    {
      textStart: 50,
      textEnd: 70,
      slotName: 'text4',
    },
    {
      textStart: 70,
      textEnd: 80,
      slotName: 'text5',
    },
  ];

  @property()
  desktopImages = {
    'yonder-0001': '../assets/yonder/images/desktop/png/yonder-0001.png',
    'yonder-0002': '../assets/yonder/images/desktop/png/yonder-0002.png',
    'yonder-0003': '../assets/yonder/images/desktop/png/yonder-0003.png',
    'yonder-0004': '../assets/yonder/images/desktop/png/yonder-0004.png',
    'yonder-0005': '../assets/yonder/images/desktop/png/yonder-0005.png',
    'yonder-0006': '../assets/yonder/images/desktop/png/yonder-0006.png',
    'yonder-0007': '../assets/yonder/images/desktop/png/yonder-0007.png',
    'yonder-0008': '../assets/yonder/images/desktop/png/yonder-0008.png',
    'yonder-0009': '../assets/yonder/images/desktop/png/yonder-0009.png',
    'yonder-0010': '../assets/yonder/images/desktop/png/yonder-0010.png',
    'yonder-0011': '../assets/yonder/images/desktop/png/yonder-0011.png',
    'yonder-0012': '../assets/yonder/images/desktop/png/yonder-0012.png',
    'yonder-0013': '../assets/yonder/images/desktop/png/yonder-0013.png',
    'yonder-0014': '../assets/yonder/images/desktop/png/yonder-0014.png',
    'yonder-0015': '../assets/yonder/images/desktop/png/yonder-0015.png',
    'yonder-0016': '../assets/yonder/images/desktop/png/yonder-0016.png',
    'yonder-0017': '../assets/yonder/images/desktop/png/yonder-0017.png',
    'yonder-0018': '../assets/yonder/images/desktop/png/yonder-0018.png',
    'yonder-0019': '../assets/yonder/images/desktop/png/yonder-0019.png',
    'yonder-0020': '../assets/yonder/images/desktop/png/yonder-0020.png',
    'yonder-0021': '../assets/yonder/images/desktop/png/yonder-0021.png',
    'yonder-0022': '../assets/yonder/images/desktop/png/yonder-0022.png',
    'yonder-0023': '../assets/yonder/images/desktop/png/yonder-0023.png',
    'yonder-0024': '../assets/yonder/images/desktop/png/yonder-0024.png',
    'yonder-0025': '../assets/yonder/images/desktop/png/yonder-0025.png',
    'yonder-0026': '../assets/yonder/images/desktop/png/yonder-0026.png',
    'yonder-0027': '../assets/yonder/images/desktop/png/yonder-0027.png',
    'yonder-0028': '../assets/yonder/images/desktop/png/yonder-0028.png',
    'yonder-0029': '../assets/yonder/images/desktop/png/yonder-0029.png',
    'yonder-0030': '../assets/yonder/images/desktop/png/yonder-0030.png',
    'yonder-0031': '../assets/yonder/images/desktop/png/yonder-0031.png',
    'yonder-0032': '../assets/yonder/images/desktop/png/yonder-0032.png',
    'yonder-0033': '../assets/yonder/images/desktop/png/yonder-0033.png',
    'yonder-0034': '../assets/yonder/images/desktop/png/yonder-0034.png',
    'yonder-0035': '../assets/yonder/images/desktop/png/yonder-0035.png',
    'yonder-0036': '../assets/yonder/images/desktop/png/yonder-0036.png',
    'yonder-0037': '../assets/yonder/images/desktop/png/yonder-0037.png',
    'yonder-0038': '../assets/yonder/images/desktop/png/yonder-0038.png',
    'yonder-0039': '../assets/yonder/images/desktop/png/yonder-0039.png',
    'yonder-0040': '../assets/yonder/images/desktop/png/yonder-0040.png',
    'yonder-0041': '../assets/yonder/images/desktop/png/yonder-0041.png',
    'yonder-0042': '../assets/yonder/images/desktop/png/yonder-0042.png',
    'yonder-0043': '../assets/yonder/images/desktop/png/yonder-0043.png',
    'yonder-0044': '../assets/yonder/images/desktop/png/yonder-0044.png',
    'yonder-0045': '../assets/yonder/images/desktop/png/yonder-0045.png',
    'yonder-0046': '../assets/yonder/images/desktop/png/yonder-0046.png',
    'yonder-0047': '../assets/yonder/images/desktop/png/yonder-0047.png',
    'yonder-0048': '../assets/yonder/images/desktop/png/yonder-0048.png',
    'yonder-0049': '../assets/yonder/images/desktop/png/yonder-0049.png',
    'yonder-0050': '../assets/yonder/images/desktop/png/yonder-0050.png',
    'yonder-0051': '../assets/yonder/images/desktop/png/yonder-0051.png',
    'yonder-0052': '../assets/yonder/images/desktop/png/yonder-0052.png',
    'yonder-0053': '../assets/yonder/images/desktop/png/yonder-0053.png',
    'yonder-0054': '../assets/yonder/images/desktop/png/yonder-0054.png',
    'yonder-0055': '../assets/yonder/images/desktop/png/yonder-0055.png',
    'yonder-0056': '../assets/yonder/images/desktop/png/yonder-0056.png',
    'yonder-0057': '../assets/yonder/images/desktop/png/yonder-0057.png',
    'yonder-0058': '../assets/yonder/images/desktop/png/yonder-0058.png',
    'yonder-0059': '../assets/yonder/images/desktop/png/yonder-0059.png',
    'yonder-0060': '../assets/yonder/images/desktop/png/yonder-0060.png',
    'yonder-0061': '../assets/yonder/images/desktop/png/yonder-0061.png',
    'yonder-0062': '../assets/yonder/images/desktop/png/yonder-0062.png',
    'yonder-0063': '../assets/yonder/images/desktop/png/yonder-0063.png',
    'yonder-0064': '../assets/yonder/images/desktop/png/yonder-0064.png',
    'yonder-0065': '../assets/yonder/images/desktop/png/yonder-0065.png',
    'yonder-0066': '../assets/yonder/images/desktop/png/yonder-0066.png',
    'yonder-0067': '../assets/yonder/images/desktop/png/yonder-0067.png',
    'yonder-0068': '../assets/yonder/images/desktop/png/yonder-0068.png',
    'yonder-0069': '../assets/yonder/images/desktop/png/yonder-0069.png',
    'yonder-0070': '../assets/yonder/images/desktop/png/yonder-0070.png',
    'yonder-0071': '../assets/yonder/images/desktop/png/yonder-0071.png',
    'yonder-0072': '../assets/yonder/images/desktop/png/yonder-0072.png',
    'yonder-0073': '../assets/yonder/images/desktop/png/yonder-0073.png',
    'yonder-0074': '../assets/yonder/images/desktop/png/yonder-0074.png',
  };

  @property()
  mobileImages = {
    'yonder-0002': '../assets/yonder/images/mobile/png/yonder-0002.png',
    'yonder-0003': '../assets/yonder/images/mobile/png/yonder-0003.png',
    'yonder-0001': '../assets/yonder/images/mobile/png/yonder-0001.png',
    'yonder-0004': '../assets/yonder/images/mobile/png/yonder-0004.png',
    'yonder-0005': '../assets/yonder/images/mobile/png/yonder-0005.png',
    'yonder-0006': '../assets/yonder/images/mobile/png/yonder-0006.png',
    'yonder-0007': '../assets/yonder/images/mobile/png/yonder-0007.png',
    'yonder-0008': '../assets/yonder/images/mobile/png/yonder-0008.png',
    'yonder-0009': '../assets/yonder/images/mobile/png/yonder-0009.png',
    'yonder-0010': '../assets/yonder/images/mobile/png/yonder-0010.png',
    'yonder-0011': '../assets/yonder/images/mobile/png/yonder-0011.png',
    'yonder-0012': '../assets/yonder/images/mobile/png/yonder-0012.png',
    'yonder-0013': '../assets/yonder/images/mobile/png/yonder-0013.png',
    'yonder-0014': '../assets/yonder/images/mobile/png/yonder-0014.png',
    'yonder-0015': '../assets/yonder/images/mobile/png/yonder-0015.png',
    'yonder-0016': '../assets/yonder/images/mobile/png/yonder-0016.png',
    'yonder-0017': '../assets/yonder/images/mobile/png/yonder-0017.png',
    'yonder-0018': '../assets/yonder/images/mobile/png/yonder-0018.png',
    'yonder-0019': '../assets/yonder/images/mobile/png/yonder-0019.png',
    'yonder-0020': '../assets/yonder/images/mobile/png/yonder-0020.png',
    'yonder-0021': '../assets/yonder/images/mobile/png/yonder-0021.png',
    'yonder-0022': '../assets/yonder/images/mobile/png/yonder-0022.png',
    'yonder-0023': '../assets/yonder/images/mobile/png/yonder-0023.png',
    'yonder-0024': '../assets/yonder/images/mobile/png/yonder-0024.png',
    'yonder-0025': '../assets/yonder/images/mobile/png/yonder-0025.png',
    'yonder-0026': '../assets/yonder/images/mobile/png/yonder-0026.png',
    'yonder-0027': '../assets/yonder/images/mobile/png/yonder-0027.png',
    'yonder-0028': '../assets/yonder/images/mobile/png/yonder-0028.png',
    'yonder-0029': '../assets/yonder/images/mobile/png/yonder-0029.png',
    'yonder-0030': '../assets/yonder/images/mobile/png/yonder-0030.png',
    'yonder-0031': '../assets/yonder/images/mobile/png/yonder-0031.png',
    'yonder-0032': '../assets/yonder/images/mobile/png/yonder-0032.png',
    'yonder-0033': '../assets/yonder/images/mobile/png/yonder-0033.png',
    'yonder-0034': '../assets/yonder/images/mobile/png/yonder-0034.png',
    'yonder-0035': '../assets/yonder/images/mobile/png/yonder-0035.png',
    'yonder-0036': '../assets/yonder/images/mobile/png/yonder-0036.png',
    'yonder-0037': '../assets/yonder/images/mobile/png/yonder-0037.png',
    'yonder-0038': '../assets/yonder/images/mobile/png/yonder-0038.png',
    'yonder-0039': '../assets/yonder/images/mobile/png/yonder-0039.png',
    'yonder-0040': '../assets/yonder/images/mobile/png/yonder-0040.png',
    'yonder-0041': '../assets/yonder/images/mobile/png/yonder-0041.png',
    'yonder-0042': '../assets/yonder/images/mobile/png/yonder-0042.png',
    'yonder-0043': '../assets/yonder/images/mobile/png/yonder-0043.png',
    'yonder-0044': '../assets/yonder/images/mobile/png/yonder-0044.png',
    'yonder-0045': '../assets/yonder/images/mobile/png/yonder-0045.png',
    'yonder-0046': '../assets/yonder/images/mobile/png/yonder-0046.png',
    'yonder-0047': '../assets/yonder/images/mobile/png/yonder-0047.png',
    'yonder-0048': '../assets/yonder/images/mobile/png/yonder-0048.png',
    'yonder-0049': '../assets/yonder/images/mobile/png/yonder-0049.png',
    'yonder-0050': '../assets/yonder/images/mobile/png/yonder-0050.png',
    'yonder-0051': '../assets/yonder/images/mobile/png/yonder-0051.png',
    'yonder-0052': '../assets/yonder/images/mobile/png/yonder-0052.png',
    'yonder-0053': '../assets/yonder/images/mobile/png/yonder-0053.png',
    'yonder-0054': '../assets/yonder/images/mobile/png/yonder-0054.png',
    'yonder-0055': '../assets/yonder/images/mobile/png/yonder-0055.png',
    'yonder-0056': '../assets/yonder/images/mobile/png/yonder-0056.png',
    'yonder-0057': '../assets/yonder/images/mobile/png/yonder-0057.png',
    'yonder-0058': '../assets/yonder/images/mobile/png/yonder-0058.png',
    'yonder-0059': '../assets/yonder/images/mobile/png/yonder-0059.png',
    'yonder-0060': '../assets/yonder/images/mobile/png/yonder-0060.png',
    'yonder-0061': '../assets/yonder/images/mobile/png/yonder-0061.png',
    'yonder-0062': '../assets/yonder/images/mobile/png/yonder-0062.png',
    'yonder-0063': '../assets/yonder/images/mobile/png/yonder-0063.png',
    'yonder-0064': '../assets/yonder/images/mobile/png/yonder-0064.png',
    'yonder-0065': '../assets/yonder/images/mobile/png/yonder-0065.png',
    'yonder-0066': '../assets/yonder/images/mobile/png/yonder-0066.png',
    'yonder-0067': '../assets/yonder/images/mobile/png/yonder-0067.png',
    'yonder-0068': '../assets/yonder/images/mobile/png/yonder-0068.png',
    'yonder-0069': '../assets/yonder/images/mobile/png/yonder-0069.png',
    'yonder-0070': '../assets/yonder/images/mobile/png/yonder-0070.png',
    'yonder-0071': '../assets/yonder/images/mobile/png/yonder-0071.png',
    'yonder-0072': '../assets/yonder/images/mobile/png/yonder-0072.png',
    'yonder-0073': '../assets/yonder/images/mobile/png/yonder-0073.png',
    'yonder-0074': '../assets/yonder/images/mobile/png/yonder-0074.png',
  };

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
          ${this.textSlot.map((item) => {
            return html` <div
              part=${item.slotName}
              class="scroll-reveal text"
              data-start=${item.textStart}
              data-end=${item.textEnd}
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
