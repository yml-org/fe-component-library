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
import { ListTypes, BorderPositions, BorderStyles } from '../constants/list';

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
  @property()
  containerPartName?: string = 'webcl-list-container';
  @property()
  listPartName?: string = 'webcl-list';

  protected renderListItemContent(rightSlot, leftSlot, listLabel) {
    return html` ${leftSlot?.hasSlot
        ? html`<slot name=${leftSlot?.slotName} />`
        : nothing}
      <span>${msg(str`${listLabel}`)}</span>
      ${rightSlot?.hasSlot
        ? html`<slot name=${rightSlot?.slotName} />`
        : nothing}`;
  }

  protected renderAnchorOrButton({
    id,
    isAnchor,
    isButton,
    href,
    listLabel,
    rightSlot,
    leftSlot,
    btnClickHandler,
  }: ListItemType) {
    return isAnchor
      ? html`<a href=${href} class="w-full flex basis-full flex-row"
          >${this.renderListItemContent(rightSlot, leftSlot, listLabel)}
        </a>`
      : isButton
      ? html`<button
          @click=${() => btnClickHandler(id, listLabel)}
          class="w-full flex basis-full flex-row"
        >
          ${this.renderListItemContent(rightSlot, leftSlot, listLabel)}
        </button>`
      : html`<span
          >${this.renderListItemContent(rightSlot, leftSlot, listLabel)}</span
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
          <li
            class=${showBorder ? renderBorderStyles.call(this) : ''}
            part=${listItem?.listItemPartName || 'webcl-list-item'}
          >
            ${this.renderAnchorOrButton(listItem)}
          </li>
        `
    )}`;
  }

  protected renderUnorderedList() {
    const { overrideDefaultListStyles } = this;
    return html`<ul
      part=${this.listPartName}
      class=" flex flex-col ${overrideDefaultListStyles ? '' : 'list-disc'}"
    >
      ${this.renderListItems()}
    </ul>`;
  }

  protected renderOrderedList() {
    const { overrideDefaultListStyles } = this;
    return html`<ol
      part=${this.listPartName}
      class="flex flex-col ${overrideDefaultListStyles ? '' : 'list-decimal'}"
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
    return html`<div class="webcl-list-wrapper" part=${this.containerPartName}>
      ${this.renderList()}
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'list-component': ListComponent;
  }
}
