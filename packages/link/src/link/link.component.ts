import { html } from 'lit';
import { msg, str } from '@lit/localize';
import { customElement, property } from 'lit/decorators.js';
import { TailwindElement } from '../shared/tailwind.element';
import { LinkTypes } from '../constants/link.component';
import { LinkComponentTypes } from '../types/link.component';

@customElement('ymlwebcl-link')
export class LinkComponent extends TailwindElement(null) {
  @property({ type: String, reflect: true })
  text?: string = 'Click Here';
  @property({ type: String, reflect: true })
  linkTitle?: string = '';
  @property({ type: String, reflect: true })
  href?: string = '#';
  @property({ type: String, reflect: true })
  rel?: string = '';
  @property({ type: String, reflect: true })
  target?: string = '_self';
  @property({ reflect: true })
  type?: LinkComponentTypes = 'link';
  @property({ type: String, reflect: true })
  slotName?: string = '';

  protected getClassTheme() {
    return this.type === LinkTypes.Default
      ? 'font-medium text-blue-600 dark:text-blue-500 hover:underline'
      : 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 inline-block ';
  }

  render() {
    return html`
      <a
        part="custom-link"
        class="${this.getClassTheme()}"
        title=${this.linkTitle}
        href=${this.href}
        target=${this.target}
        rel=${this.rel}
        aria-label=${msg(str`Click Here to redirect`)}
      >
        ${this.text ? this.text : this.text === '' ? '' : msg(str`Click Here`)}
        <slot name=${this.slotName}></slot>
      </a>
    `;
  }
}
