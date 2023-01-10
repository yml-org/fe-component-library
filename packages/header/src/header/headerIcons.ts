import { msg, str} from '@lit/localize';
import { html } from 'lit-html';

export const OpenMenuIcon = html` <svg
  class="block h-6 w-6"
  aria-label=${msg(str`Open menu`)}
  xmlns="http://www.w3.org/2000/svg"
  fill="currentColor"
  viewBox="0 0 24 24"
  stroke-width="1.5"
  stroke="currentColor"
  aria-hidden="true"
>
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
  />
</svg>`;

export const CloseMenuIcon = html`<svg
  class="block h-6 w-6"
  aria-label=${msg(str`Close menu`)}
  xmlns="http://www.w3.org/2000/svg"
  fill="currentColor"
  viewBox="0 0 24 24"
  stroke-width="1.5"
  stroke="currentColor"
  aria-hidden="true"
>
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    d="M6 18L18 6M6 6l12 12"
  />
</svg> `;
