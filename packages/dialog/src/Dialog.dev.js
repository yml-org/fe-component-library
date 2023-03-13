"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
import {
  html,
  nothing,
  SpectrumElement
} from "@spectrum-web-components/base";
import {
  property,
  query
} from "@spectrum-web-components/base/src/decorators.js";
import { classMap } from "@spectrum-web-components/base/src/directives.js";
import { conditionAttributeWithId } from "@spectrum-web-components/base/src/condition-attribute-with-id.js";
import "@spectrum-web-components/divider/sp-divider.js";
import "@spectrum-web-components/button/sp-close-button.js";
import "@spectrum-web-components/button-group/sp-button-group.js";
import "@spectrum-web-components/icons-workflow/icons/sp-icon-alert.js";
import {
  FocusVisiblePolyfillMixin,
  ObserveSlotPresence
} from "@spectrum-web-components/shared";
import styles from "./dialog.css.js";
let appliedIds = 0;
function gatherAppliedIdsFromSlottedChildren(slot, idBase) {
  const assignedElements = slot.assignedElements();
  const ids = [];
  assignedElements.forEach((el) => {
    if (el.id) {
      ids.push(el.id);
    } else {
      const id = idBase + `-${appliedIds++}`;
      el.id = id;
      ids.push(id);
    }
  });
  return ids;
}
const _Dialog = class extends FocusVisiblePolyfillMixin(
  ObserveSlotPresence(SpectrumElement, [
    '[slot="hero"]',
    '[slot="footer"]',
    '[slot="button"]'
  ])
) {
  constructor() {
    super(...arguments);
    this.error = false;
    this.dismissable = false;
    this.noDivider = false;
    this.shouldManageTabOrderForScrolling = () => {
      const { offsetHeight, scrollHeight } = this.contentElement;
      if (offsetHeight < scrollHeight) {
        this.contentElement.tabIndex = 0;
      } else {
        this.contentElement.removeAttribute("tabindex");
      }
    };
    this.labelledbyId = `sp-dialog-label-${_Dialog.instanceCount++}`;
    this.describedbyId = `sp-dialog-description-${_Dialog.instanceCount++}`;
  }
  static get styles() {
    return [styles];
  }
  get hasFooter() {
    return this.getSlotContentPresence('[slot="footer"]');
  }
  get hasButtons() {
    return this.getSlotContentPresence('[slot="button"]');
  }
  get hasHero() {
    return this.getSlotContentPresence('[slot="hero"]');
  }
  close() {
    this.dispatchEvent(
      new Event("close", {
        bubbles: true,
        composed: true,
        cancelable: true
      })
    );
  }
  renderHero() {
    return html`
            <slot name="hero"></slot>
        `;
  }
  renderHeading() {
    return html`
            <slot name="heading" @slotchange=${this.onHeadingSlotchange}></slot>
        `;
  }
  renderContent() {
    return html`
            <div class="content">
                <slot @slotchange=${this.onContentSlotChange}></slot>
            </div>
        `;
  }
  renderFooter() {
    return html`
            <div class="footer">
                <slot name="footer"></slot>
            </div>
        `;
  }
  renderButtons() {
    const classes = {
      "button-group": true,
      "button-group--noFooter": !this.hasFooter
    };
    return html`
            <sp-button-group class=${classMap(classes)}>
                <slot name="button"></slot>
            </sp-button-group>
        `;
  }
  renderDismiss() {
    return html`
            <sp-close-button
                class="close-button"
                label="Close"
                quiet
                size="m"
                @click=${this.close}
            ></sp-close-button>
        `;
  }
  render() {
    return html`
            <div class="grid">
                ${this.renderHero()} ${this.renderHeading()}
                ${this.error ? html`
                          <sp-icon-alert class="type-icon"></sp-icon-alert>
                      ` : nothing}
                ${this.noDivider ? nothing : html`
                          <sp-divider size="m" class="divider"></sp-divider>
                      `}
                ${this.renderContent()}
                ${this.hasFooter ? this.renderFooter() : nothing}
                ${this.hasButtons ? this.renderButtons() : nothing}
                ${this.dismissable ? this.renderDismiss() : nothing}
            </div>
        `;
  }
  shouldUpdate(changes) {
    if (changes.has("mode") && !!this.mode) {
      this.dismissable = false;
    }
    if (changes.has("dismissable") && this.dismissable) {
      this.dismissable = !this.mode;
    }
    return super.shouldUpdate(changes);
  }
  firstUpdated(changes) {
    super.firstUpdated(changes);
    this.setAttribute("role", "dialog");
  }
  onHeadingSlotchange({
    target
  }) {
    if (this.conditionLabelledby) {
      this.conditionLabelledby();
      delete this.conditionLabelledby;
    }
    const ids = gatherAppliedIdsFromSlottedChildren(
      target,
      this.labelledbyId
    );
    if (ids.length) {
      this.conditionLabelledby = conditionAttributeWithId(
        this,
        "aria-labelledby",
        ids
      );
    }
  }
  onContentSlotChange({
    target
  }) {
    if (this.conditionDescribedby) {
      this.conditionDescribedby();
      delete this.conditionDescribedby;
    }
    const ids = gatherAppliedIdsFromSlottedChildren(
      target,
      this.describedbyId
    );
    if (ids.length && ids.length < 4) {
      this.conditionDescribedby = conditionAttributeWithId(
        this,
        "aria-describedby",
        ids
      );
    } else if (!ids.length) {
      const idProvided = !!this.id;
      if (!idProvided)
        this.id = this.describedbyId;
      const conditionDescribedby = conditionAttributeWithId(
        this,
        "aria-describedby",
        this.id
      );
      this.conditionDescribedby = () => {
        conditionDescribedby();
        if (!idProvided) {
          this.removeAttribute("id");
        }
      };
    }
  }
  connectedCallback() {
    super.connectedCallback();
    this.tabIndex = 0;
    window.addEventListener(
      "resize",
      this.shouldManageTabOrderForScrolling
    );
  }
  disconnectedCallback() {
    window.removeEventListener(
      "resize",
      this.shouldManageTabOrderForScrolling
    );
    super.disconnectedCallback();
  }
};
export let Dialog = _Dialog;
Dialog.instanceCount = 0;
__decorateClass([
  query(".close-button")
], Dialog.prototype, "closeButton", 2);
__decorateClass([
  query(".content")
], Dialog.prototype, "contentElement", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], Dialog.prototype, "error", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], Dialog.prototype, "dismissable", 2);
__decorateClass([
  property({ type: Boolean, reflect: true, attribute: "no-divider" })
], Dialog.prototype, "noDivider", 2);
__decorateClass([
  property({ type: String, reflect: true })
], Dialog.prototype, "mode", 2);
__decorateClass([
  property({ type: String, reflect: true })
], Dialog.prototype, "size", 2);
//# sourceMappingURL=Dialog.dev.js.map
