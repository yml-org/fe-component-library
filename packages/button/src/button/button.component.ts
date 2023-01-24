import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { TailwindElement } from '../shared/tailwind.element';
import { themeOptions } from '../constants/button.component';
import { VariantType, colorType } from '../types/button.type';
import { msg, str } from '@lit/localize';

@customElement('button-component')
export class ButtonComponent extends TailwindElement(null) {
  @property()
  text?: string;
  @property()
  variant?: VariantType; 
  @property()
  color?: colorType; 
  @property()
  slotName?: string;
  @property()
  isDisabled?:boolean;
  @property()
  fullWidth?: boolean;
  @property()
  isRounded?: boolean;
  

  protected getClassTheme() {
    return `inline-block px-6 font-medium text-xs leading-tight uppercase focus:outline-none focus:ring-0 transition duration-150 ease-in-out
      ${themeOptions[this.color || 'primary'][this.variant || 'contained']}
      ${this.isRounded ? 'rounded-full' : 'rounded'}
      ${this.fullWidth && 'w-full'}
      ${this.isDisabled && 'pointer-events-none opacity-60'}
    `;
  }
   
  render() {
    return html`
      <button
        tabindex=${this.isDisabled? '-1': '0'}
        type="button"
        role=${msg(str`button`)}
        class=${this.getClassTheme()}
      >
        ${this.text}
        <slot name=${this.slotName}></slot>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'button-component': ButtonComponent;
  }
}
