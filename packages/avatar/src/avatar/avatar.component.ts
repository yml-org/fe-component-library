import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { TailwindElement } from '../shared/tailwind.element';
import { msg, str } from '@lit/localize';

@customElement('ymlwebcl-avatar')
export class AvatarComponent extends TailwindElement(null) {
  @property({ type: Boolean, reflect: true })
  isRounded?: boolean = false;
  @property({ type: Number, reflect: true })
  width?: number = 75;
  @property({ type: Number, reflect: true })
  height?: number = 75;
  @property({ type: Boolean, reflect: true })
  usePercentage?: boolean = false;
  @property({ type: Boolean, reflect: true })
  hasBorder?: boolean = false;
  @property({ type: String, reflect: true })
  borderColor?: string = 'slate-200';
  @property({ type: String, reflect: true })
  defaultBgColor?: string;
  @property({ type: String, reflect: true })
  slotName?: string;
  @property({ attribute: 'onAvatarClick', reflect: true })
  onAvatarClick?: () => void;
  @property({ type: Boolean, reflect: true })
  hasShadow?: boolean = false;
  @property({ type: Boolean, reflect: true })
  showDefaultIcon?: boolean = false;
  @property({ type: String, reflect: true })
  defaultImage?: string;
  @property()
  avatarPartAttribute?: string = 'webcl-avatar';

  private getContainerClassList() {
    const { isRounded, hasBorder, borderColor, hasShadow, defaultBgColor } =
      this;
    return `webcl-avatar-container flex items-center justify-center ${
      defaultBgColor || ''
    } ${isRounded ? 'rounded-full' : ''} ${
      hasBorder ? `border border-${borderColor}` : ''
    } ${hasShadow ? 'shadow' : ''}`.trim();
  }
  private getContainerDimensions() {
    const { width, height, usePercentage } = this;
    const dimension = `${usePercentage ? '%' : 'px'}`;
    return `width: ${width}${dimension};height: ${height}${dimension};`;
  }

  private renderDefaultIcon() {
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
