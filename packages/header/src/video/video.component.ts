import { msg } from '@lit/localize';
import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { TailwindElement } from '../shared/tailwind.element';
import Style from './video.component.scss?inline';

@customElement('video-component')
export class VideoComponent extends TailwindElement(Style) {

  @property()
  options: {
    src: string;
    stop: boolean;
    label: string;
    poster: string;
  }

  render() {
    return html`
    <img src=${this.options.poster} />
      <video src=${this.options.src} label="${msg((this.options.label))}"> </video>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'video-component': VideoComponent;
  }
}
