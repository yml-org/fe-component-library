import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { TailwindElement } from '../shared/tailwind.element';
import { msg, str } from '@lit/localize';

@customElement('avatar-component')
export class AvatarComponent extends TailwindElement(null) {
  @property()
  isRounded?: boolean = false;
  @property()
  width?: number = 75;
  @property()
  height?: number = 75;
  @property()
  usePercentage?: boolean = false;
  @property()
  slotName?: string;
  @property()
  onAvatarClick?: () => void;
  @property()
  showDefaultIcon?: boolean = false;
  @property()
  defaultImage?: string;
  @property()
  avatarPartAttribute?: string = 'webcl-avatar';

  protected getContainerClassList() {
    return `webcl-avatar-container flex items-center justify-center ${this.isRounded ? 'rounded-full' : ''}`;
  }
  protected getContainerDimensions() {
    const { width, height, usePercentage } = this;
    const dimension = `${usePercentage ? '%' : 'px'}`;
    return `width: ${width}${dimension};height: ${height}${dimension};`;
  }

  protected renderDefaultIcon() {
    const { defaultImage, showDefaultIcon, width, height } = this;
    return showDefaultIcon
      ? html`<img
          src=${defaultImage}
          alt="default icon"
          width="${width}px"
          height="${height}px"
        />`
      : '';
  }

  render() {
    return html`<div
      class=${this.getContainerClassList()}
      style=${this.getContainerDimensions()}
      part=${this.avatarPartAttribute}
      role=${msg(str`button`)}
      @click=${this.onAvatarClick}
    >
      ${this.renderDefaultIcon()}
      ${this.slotName ? html`<slot name=${this.slotName}></slot>` : ''}
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'avatar-component': AvatarComponent;
  }
}
