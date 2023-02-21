import { html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { TailwindElement } from '../shared/tailwind.element';
import { msg, str } from '@lit/localize';
import { ListType, ListItemType } from '../types/list';
import { ListTypes, SlotPositions } from '../constants/list';

@customElement('list-component')
export class ListComponent extends TailwindElement(null) {
  @property()
  listType?: ListType = ListTypes.Ordered;
  @property()
  listItems?: ListItemType[] = [];

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

  protected renderListItems() {
    return html` ${repeat(
      this.listItems,
      (listItem) => listItem?.id || listItem?.listLabel,
      (listItem) => html` <li>${this.renderAnchorOrButton(listItem)}</li> `
    )}`;
  }

  protected renderUnorderedList() {
    return html`<ul part="webcl-list" class="list-disc">
      ${this.renderListItems()}
    </ul>`;
  }

  protected renderOrderedList() {
    return html`<ol part="webcl-list" class="list-decimal">
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
