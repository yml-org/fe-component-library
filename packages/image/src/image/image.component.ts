import { msg, str } from '@lit/localize';
import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { TailwindElement } from '../shared/tailwind.element';
import {Size } from '../constants/image.component'

@customElement('image-component')
export class ImageComponent extends TailwindElement(null) {

  @property()
  altText?:string="";
  @property()
  src?:string = "";
  @property()
  placeholderImg?:string= "";
  @property()
  size?: Size= {};

  render() {
    return html`
     <img 
     class="max-w-full h-auto transition-shadow ease-in-out duration-300
     ${this.size?.objectFit && `object-${this.size?.objectFit}`}
     ${this.size?.rounded && 'rounded-full'}"
     src=${this.placeholderImg}
     srcset="${this.src}"
     alt="${this.altText ? this.altText : msg(str`image`)}"
     part="custom-image"
     width=${this.size?.width}
     height=${this.size?.height}
     min-width=${this.size?.minWidth}
     max-width=${this.size?.maxWidth}
     min-height=${this.size?.minHeight}
     max-height=${this.size?.maxHeight}
     style="border:${
       this.size?.border?.width +
       ' ' +
       this.size?.border?.type +
       ' ' +
       this.size?.border?.color
     }"
     >
     </img>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'image-component': ImageComponent;
  }
}
