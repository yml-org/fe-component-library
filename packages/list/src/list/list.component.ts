import { html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { TailwindElement } from '../shared/tailwind.element';
import { msg, str } from '@lit/localize';
import {
  ListType,
  ListItemType,
  BorderPosition,
  BorderStyle,
} from '../types/list';
import {
  ListTypes,
  SlotPositions,
  BorderPositions,
  BorderStyles,
} from '../constants/list';

@customElement('list-component')
export class ListComponent extends TailwindElement(null) {
  @property()
  listType?: ListType = ListTypes.Ordered;
  @property()
  listItems?: ListItemType[] = [];
  @property()
  overrideDefaultListStyles?: boolean = false;
  @property()
  showBorder?: boolean = false;
  @property()
  borderPosition?: BorderPosition = BorderPositions.All;
  @property()
  borderStyle?: BorderStyle = BorderStyles.Solid;

  protected renderListItemContent(hasSlot, slotName, slotPosition, listLabel) {
    return html` ${hasSlot && slotPosition === SlotPositions.Start
      ? html`<slot name=${slotName} />`
      : nothing}
    ${msg(str`${listLabel}`)}
    ${hasSlot && slotPosition === SlotPositions.End
      ? html`<slot name=${slotName} />`
      : nothing}`;
  }

  protected renderAnchorOrButton({
    isAnchor,
    isButton,
    href,
    listLabel,
    hasSlot,
    slotPosition,
    slotName,
  }: ListItemType) {
    return isAnchor
      ? html`<a href=${href}
          >${this.renderListItemContent(
            hasSlot,
            slotName,
            slotPosition,
            listLabel
          )}
        </a>`
      : isButton
      ? html`<button>
          ${this.renderListItemContent(
            hasSlot,
            slotName,
            slotPosition,
            listLabel
          )}
        </button>`
      : html`<span
          >${this.renderListItemContent(
            hasSlot,
            slotName,
            slotPosition,
            listLabel
          )}</span
        >`;
  }

  protected renderBorderStyles() {
    const { borderPosition, borderStyle } = this;
    switch (borderPosition) {
      case BorderPositions.Bottom:
        return `border-${borderStyle} border-b`;
      case BorderPositions.Top:
        return `border-${borderStyle} border-t`;
      case BorderPositions.Right:
        return `border-${borderStyle} border-r`;
      case BorderPositions.Left:
        return `border-${borderStyle} border-l`;
      case BorderPositions.All:
      default:
        return `border border-${borderStyle}`;
    }
  }

  protected renderListItems() {
    const { showBorder, renderBorderStyles } = this;
    return html` ${repeat(
      this.listItems,
      (listItem) => listItem?.id || listItem?.listLabel,
      (listItem) =>
        html`
          <li class=${showBorder ? renderBorderStyles.call(this) : ''}>
            ${this.renderAnchorOrButton(listItem)}
          </li>
        `
    )}`;
  }

  protected renderUnorderedList() {
    const { overrideDefaultListStyles } = this;
    return html`<ul
      part="webcl-list"
      class=${overrideDefaultListStyles ? '' : 'list-disc'}
    >
      ${this.renderListItems()}
    </ul>`;
  }

  protected renderOrderedList() {
    const { overrideDefaultListStyles } = this;
    return html`<ol
      part="webcl-list"
      class=${overrideDefaultListStyles ? '' : 'list-decimal'}
    >
      ${this.renderListItems()}
    </ol>`;
  }

  protected renderList() {
    const { listType } = this;
    switch (listType) {
      case ListTypes.Unordered:
        return this.renderUnorderedList();
      case ListTypes.Ordered:
      default:
        return this.renderOrderedList();
    }
  }
  render() {
    return html`<div class="webcl-list-wrapper" part="webcl-list-container">
      ${this.renderList()}
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'list-component': ListComponent;
  }
}
