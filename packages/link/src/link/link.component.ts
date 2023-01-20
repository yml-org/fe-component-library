import { html } from 'lit';
import { customElement, property} from 'lit/decorators.js';
import { TailwindElement } from '../shared/tailwind.element';

const enum LinkTypes {
  Default = 'default',
  Button = 'button',
}

@customElement('link-component')
export class LinkComponent extends TailwindElement(null) {
  @property()
  text?: string = 'Click Here';
  linkTitle?: string = '';
  href: string = '#';
  rel?: string = '';
  target?: string = '_self';
  type?: 'default' | 'button' = 'default';
  slotName?: string = '';

  render() {
    return html`
      <a
        part="custom-link"
        class=${this.type === LinkTypes.Default
          ? 'font-medium text-blue-600 dark:text-blue-500 hover:underline'
          : 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 inline-block '}
        title=${this.linkTitle}
        href=${this.href}
        target=${this.target}
        rel=${this.rel}
      >
        ${this.text}
        <slot name=${this.slotName}></slot>
      </a>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'link-component': LinkComponent;
  }
}
