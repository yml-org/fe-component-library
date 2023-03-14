import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { TailwindElement } from '../shared/tailwind.element';
import { CardDimensionUnit } from '../types/card';
import { CardDimensionUnits } from '../constants/card';

@customElement('ymlwebcl-card')
export class CardComponent extends TailwindElement(null) {
  @property({ type: Boolean, reflect: true })
  hasRoundedBorder?: boolean = false;
  @property({ type: String, reflect: true })
  customSlotName?: string = '';
  @property({ type: Boolean, reflect: true })
  showCustomSlot?: boolean = false;
  @property({ type: Number, reflect: true })
  cardHeight?: number = 300;
  @property({ type: Number, reflect: true })
  cardWidth?: number = 300;
  @property({ reflect: true })
  cardDimensionUnit?: CardDimensionUnit = CardDimensionUnits.Pixel;
  @property({ type: Boolean, reflect: true })
  isHorizontal?: boolean = false;

  private getContainerClassList() {
    const { hasRoundedBorder, isHorizontal } = this;
    return `webcl-card-wrapper flex ${isHorizontal ? 'flex-row' : 'flex-col'} ${
      hasRoundedBorder ? 'rounded-lg' : ''
    }`.trim();
  }

  private setCardDimensions() {
    const { cardHeight, cardWidth, cardDimensionUnit } = this;
    return `width:${cardWidth}${cardDimensionUnit}; min-height:${cardHeight}${cardDimensionUnit}`;
  }

  private renderSlots() {
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
  public override render() {
    return html`<div
      class=${this.getContainerClassList()}
      style=${this.setCardDimensions()}
      part="webcl-card-container"
    >
      ${this.renderSlots()}
    </div>`;
  }
}
