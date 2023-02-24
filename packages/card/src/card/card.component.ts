import { html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { TailwindElement } from '../shared/tailwind.element';
import { msg, str } from '@lit/localize';

@customElement('card-component')
export class CardComponent extends TailwindElement(null) {
  render() {
    return html`<div
      class="webcl-card-wrapper"
      part="webcl-card-container"
    ></div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'card-component': CardComponent;
  }
}
