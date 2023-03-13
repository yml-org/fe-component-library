import { LitElement, unsafeCSS } from 'lit';

import style from './tailwind.global.css';

const tailwindElement = unsafeCSS(style);

class CustomTailwindElement {}

export const TailwindElement: any = (style: CSSStyleSheet | null) =>
  class extends LitElement {
    static styles = [tailwindElement, unsafeCSS(style)];
  };
