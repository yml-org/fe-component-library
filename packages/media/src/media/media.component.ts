import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { TailwindElement } from '../shared/tailwind.element';
import { msg, str } from '@lit/localize';

@customElement('ymlwebcl-media')
export class MediaComponent extends TailwindElement(null) {
  @property({ type: String, reflect: true })
  mediaTitle?: string = 'Title';

  @property({ type: String, reflect: true })
  imageSlotName?: string;

  @property({ type: String, reflect: true })
  staticContentSlotName?: string;

  @property({ type: String, reflect: true })
  iconSlotName?: string;

  @property({ type: String, reflect: true })
  mediaPartAttribute?: string = 'webcl-media';

  @property({ type: String, reflect: true })
  textPartAttribute?: string = 'media-text-container';

  @property({ type: String, reflect: true })
  titlePartAttribute?: string = 'media-title-container';

  render() {
    return html` <div
      class="inline-flex flex-row"
      part=${this.mediaPartAttribute}
    >
      <slot name=${this.imageSlotName}></slot>
      <div part=${this.textPartAttribute}>
        <div part=${this.titlePartAttribute}>
          <p>
            ${this.mediaTitle
              ? this.mediaTitle
              : this.mediaTitle === ''
              ? ''
              : msg(str`Title`)}
          </p>
        </div>
        <slot name=${this.staticContentSlotName}></slot>
      </div>
      <slot name=${this.iconSlotName}></slot>
    </div>`;
  }
}
