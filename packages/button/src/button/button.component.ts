import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { TailwindElement } from '../shared/tailwind.element';

@customElement('button-component')
export class ButtonComponent extends TailwindElement(null) {
  @property()
  text?: string = 'Button';
  variant?: string = 'contained'; //contained || outlined || link
  color?: string = 'primary'; //primary || secondary || success || danger || warning || light || dark
  slotName?: string = '';
  isDisabled?: boolean = false;
  fullWidth?: boolean = false;
  isRounded?: boolean = false;

  themeOptions = {
    primary: {
      contained:
        'py-2.5 bg-blue-600 text-white shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg  active:bg-blue-800 active:shadow-lg',
      outlined:
        'py-2 border-2 border-blue-600 text-blue-600 hover:bg-black hover:bg-opacity-5',
      link: 'py-2.5 bg-transparent text-blue-600 hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 active:bg-gray-200',
    },

    secondary: {
      contained:
        'py-2.5 bg-purple-600 text-white shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg  active:bg-purple-800 active:shadow-lg',

      outlined:
        'py-2 border-2 border-purple-600 text-purple-600 hover:bg-black hover:bg-opacity-5',

      link: 'py-2.5 bg-transparent text-purple-600 hover:text-purple-700 hover:bg-gray-100 focus:bg-gray-100 active:bg-gray-200',
    },
    success: {
      contained:
        'py-2.5 bg-green-500 text-white shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg  active:bg-green-700 active:shadow-lg',

      outlined:
        'py-2 border-2 border-green-500 text-green-500 hover:bg-black hover:bg-opacity-5',

      link: 'py-2.5 bg-transparent text-green-600 hover:text-green-700 hover:bg-gray-100 focus:bg-gray-100 active:bg-gray-200',
    },
    danger: {
      contained:
        'py-2.5 bg-red-600 text-white shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg  active:bg-red-800 active:shadow-lg',

      outlined:
        'py-2 border-2 border-red-600 text-red-600 hover:bg-black hover:bg-opacity-5',

      link: 'py-2.5 bg-transparent text-red-600 hover:text-red-700 hover:bg-gray-100 focus:bg-gray-100    active:bg-gray-200',
    },
    warning: {
      contained:
        'py-2.5 bg-yellow-500 text-white shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg  active:bg-yellow-700 active:shadow-lg',

      outlined:
        'py-2 border-2 border-yellow-500 text-yellow-500 hover:bg-black hover:bg-opacity-5',

      link: 'py-2.5 bg-transparent text-yellow-600 hover:text-yellow-700 hover:bg-gray-100 focus:bg-gray-100    active:bg-gray-200',
    },
    light: {
      contained:
        'py-2.5 bg-gray-200 text-gray-700 shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg  active:bg-gray-400 active:shadow-lg',

      outlined:
        'py-2 border-2 border-gray-200 text-gray-200 hover:bg-black hover:bg-opacity-5',

      link: 'py-2.5 bg-transparent text-gray-600 hover:text-gray-700 hover:bg-gray-100 focus:bg-gray-100    active:bg-gray-200',
    },
    dark: {
      contained:
        'py-2.5 bg-gray-800 text-white shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg  active:bg-gray-900 active:shadow-lg',

      outlined:
        'py-2 border-2 border-gray-800 text-gray-800 hover:bg-black hover:bg-opacity-5',

      link: 'py-2.5 bg-transparent text-gray-600 hover:text-gray-700 hover:bg-gray-100 focus:bg-gray-100    active:bg-gray-200',
    },
  };

  render() {
    return html`
      <button
        type="button"
        class="inline-block px-6 font-medium text-xs leading-tight uppercase focus:outline-none focus:ring-0 transition duration-150 ease-in-out 
          ${this.themeOptions[this.color][this.variant]}
          ${this.isRounded ? 'rounded-full' : 'rounded'}
          ${this.fullWidth && 'w-full'}
          ${this.isDisabled && 'pointer-events-none opacity-60'}
        "
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
