import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { TailwindElement } from '../shared/tailwind.element';

@customElement('text-area-component')
export class TextAreaComponent extends TailwindElement(null) {
  render() {
    return html`<div part="webcl-textarea-container"></div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'text-area-component': TextAreaComponent;
  }
}
