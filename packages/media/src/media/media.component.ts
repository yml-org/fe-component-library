import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { TailwindElement } from '../shared/tailwind.element';
import { msg, str } from '@lit/localize';

@customElement('media-component')
export class MediaComponent extends TailwindElement(null) {
  @property()
  mediaTitle?: string = 'Title';

  @property()
  imageSlotName?: string;

  @property()
  staticContentSlotName?: string;

  @property()
  iconSlotName?: string;

  @property()
  mediaPartAttribute?: string = 'webcl-media';

  @property()
  textPartAttribute?: string = 'media-text-container';

  @property()
  titlePartAttribute?: string = 'media-title-container';

  render() {
    return html` <div
      class="inline-flex flex-row"
      part=${this.mediaPartAttribute}
    >
      <slot name=${this.imageSlotName}></slot>
      <div part=${this.textPartAttribute}>
        <div part=${this.titlePartAttribute}>
          <p>${this.mediaTitle ? this.mediaTitle : this.mediaTitle === '' ? '' : msg(str`Title`)}</p>
        </div>
        <slot name=${this.staticContentSlotName}></slot>
      </div>
      <slot name=${this.iconSlotName}></slot>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'media-component': MediaComponent;
  }
}
