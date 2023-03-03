import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { TailwindElement } from '../shared/tailwind.element';
import { msg, str } from '@lit/localize';

@customElement('progress-bar-component')
export class ProgressBarComponent extends TailwindElement(null) {
  @property()
  percent: number;
  @property()
  max?: number = 100;
  @property()
  containerPartAttribute?: string = 'webcl-progress-bar-container';
  @property()
  progressBarPartAttribute?: string = 'webcl-progress-bar';

  protected getProgressBarStyle() {
    const { percent, max } = this;
    const percentage = (percent / max) * 100;
    return `width: ${percentage}%; transition: width 0.3s ease-in-out; height: 100%`;
  }

  render() {
    const { percent, max, containerPartAttribute, progressBarPartAttribute } =
      this;
    return html`
      <div part=${containerPartAttribute}>
        <div
          part=${progressBarPartAttribute}
          style=${this.getProgressBarStyle()}
          role="${msg(str`progressbar`)}"
          aria-valuemin="0"
          aria-valuemax=${max}
          aria-valuenow=${percent}
        ></div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'progress-bar-component': ProgressBarComponent;
  }
}
