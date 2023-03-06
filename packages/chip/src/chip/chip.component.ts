import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { TailwindElement } from '../shared/tailwind.element';
import { msg, str } from '@lit/localize';

@customElement('chip-component')
export class ChipComponent extends TailwindElement(null) {
  @property()
  text?: string = 'Label';

  @property()
  rightSlotName?: string;

  @property()
  leftSlotName?: string;

  @property()
  chipPartAttribute?: string = 'webcl-chip';

  protected getContainerClassList() {
    return `[word-wrap: break-word] inline-flex flex-row items-center my-[5px] pt-[4px] pb-[6px] px-[12px]`;
  }

  render() {
    return html`
      <div class=${this.getContainerClassList()} part=${this.chipPartAttribute}>
        <slot name=${this.leftSlotName}></slot>
        ${this.text ? this.text : this.text === '' ? '' : msg(str`Label`)}
        <slot name=${this.rightSlotName}></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'chip-component': ChipComponent;
  }
}
