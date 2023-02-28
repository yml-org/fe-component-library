import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { TailwindElement } from '../shared/tailwind.element';
import { CardDimensionUnit } from '../types/card';
import { CardDimensionUnits } from '../constants/card';

@customElement('card-component')
export class CardComponent extends TailwindElement(null) {
  @property()
  hasRoundedBorder?: boolean = false;
  @property()
  customSlotName?: string = '';
  @property()
  showCustomSlot?: boolean = false;
  @property()
  cardHeight?: number = 300;
  @property()
  cardWidth?: number = 300;
  @property()
  cardDimensionUnit?: CardDimensionUnit = CardDimensionUnits.Pixel;
  @property()
  isHorizontal?: boolean = false;

  protected getContainerClassList() {
    const { hasRoundedBorder, isHorizontal } = this;
    return `webcl-card-wrapper flex ${isHorizontal ? 'flex-row' : 'flex-col'} ${
      hasRoundedBorder ? 'rounded-lg' : ''
    }`.trim();
  }

  protected setCardDimensions() {
    const { cardHeight, cardWidth, cardDimensionUnit } = this;
    return `width:${cardWidth}${cardDimensionUnit}; min-height:${cardHeight}${cardDimensionUnit}`;
  }

  protected renderSlots() {
    const { showCustomSlot } = this;
    return !showCustomSlot
      ? html`<div class="webcl-card-header-section" part="webcl-card-header">
            <slot name="webcl-card-header" />
          </div>
          <div class="webcl-card-content-section" part="webcl-card-content">
            <slot name="webcl-card-content" />
          </div>
          <div
            class="webcl-card-footer-section mt-auto"
            part="webcl-card-footer"
          >
            <slot name="webcl-card-footer" />
          </div>`
      : html`<slot name=${this.customSlotName} />`;
  }
  render() {
    return html`<div
      class=${this.getContainerClassList()}
      style=${this.setCardDimensions()}
      part="webcl-card-container"
    >
      ${this.renderSlots()}
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'card-component': CardComponent;
  }
}
