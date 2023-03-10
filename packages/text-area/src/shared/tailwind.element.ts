import { LitElement, unsafeCSS } from 'lit';

import style from './tailwind.global.css';

const tailwindElement = unsafeCSS(style);

export const TailwindElement: any = (style: CSSStyleSheet | null) =>
  class extends LitElement {
    static styles = [tailwindElement, unsafeCSS(style)];
  };
