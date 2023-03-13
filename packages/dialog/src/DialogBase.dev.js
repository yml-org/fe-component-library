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
  SpectrumElement
} from "@spectrum-web-components/base";
import { property } from "@spectrum-web-components/base/src/decorators.js";
import "@spectrum-web-components/underlay/sp-underlay.js";
import "@spectrum-web-components/button/sp-button.js";
import "../sp-dialog.dev.js";
import modalWrapperStyles from "@spectrum-web-components/modal/src/modal-wrapper.css.js";
import modalStyles from "@spectrum-web-components/modal/src/modal.css.js";
import { FocusVisiblePolyfillMixin } from "@spectrum-web-components/shared";
import { firstFocusableIn } from "@spectrum-web-components/shared/src/first-focusable-in.js";
export class DialogBase extends FocusVisiblePolyfillMixin(SpectrumElement) {
  constructor() {
    super(...arguments);
    this.dismissable = false;
    this.open = false;
    this.responsive = false;
    this.transitionPromise = Promise.resolve();
    this.resolveTransitionPromise = () => {
      return;
    };
    this.underlay = false;
    this.animating = false;
  }
  static get styles() {
    return [modalWrapperStyles, modalStyles];
  }
  get dialog() {
    const dialog = this.shadowRoot.querySelector("slot").assignedElements()[0];
    if (true) {
      if (!dialog) {
        window.__swc.warn(
          this,
          `<${this.localName}> expects to be provided dialog content via its default slot.`,
          "https://opensource.adobe.com/spectrum-web-components/components/dialog-base/#dialog"
        );
      }
    }
    return dialog || this;
  }
  async focus() {
    if (this.shadowRoot) {
      const firstFocusable = firstFocusableIn(this.dialog);
      if (firstFocusable) {
        if (firstFocusable.updateComplete) {
          await firstFocusable.updateComplete;
        }
        firstFocusable.focus();
        this.removeAttribute("tabindex");
      } else {
        this.dialog.focus();
      }
    } else {
      super.focus();
    }
  }
  overlayWillCloseCallback() {
    if (!this.open)
      return this.animating;
    this.close();
    return true;
  }
  dismiss() {
    if (!this.dismissable) {
      return;
    }
    this.close();
  }
  handleClose(event) {
    event.stopPropagation();
    this.close();
  }
  close() {
    this.open = false;
  }
  dispatchClosed() {
    this.dispatchEvent(
      new Event("close", {
        bubbles: true
      })
    );
  }
  handleUnderlayTransitionend(event) {
    if (!this.open && event.propertyName === "visibility") {
      this.resolveTransitionPromise();
      this.dispatchClosed();
    }
  }
  handleModalTransitionend() {
    if (this.open || !this.underlay) {
      this.resolveTransitionPromise();
      if (!this.open) {
        this.dispatchClosed();
      }
    }
  }
  update(changes) {
    if (changes.has("open") && changes.get("open") !== void 0) {
      this.animating = true;
      this.transitionPromise = new Promise((res) => {
        this.resolveTransitionPromise = () => {
          this.animating = false;
          res();
        };
      });
    }
    super.update(changes);
  }
  renderDialog() {
    return html`
            <slot></slot>
        `;
  }
  render() {
    return html`
            ${this.underlay ? html`
                      <sp-underlay
                          ?open=${this.open}
                          @click=${this.dismiss}
                          @transitionend=${this.handleUnderlayTransitionend}
                      ></sp-underlay>
                  ` : html``}
            <div
                class="modal ${this.mode}"
                @transitionend=${this.handleModalTransitionend}
                @close=${this.handleClose}
            >
                ${this.renderDialog()}
            </div>
        `;
  }
  updated(changes) {
    if (changes.has("open")) {
      if (this.open) {
        if ("updateComplete" in this.dialog && "shouldManageTabOrderForScrolling" in this.dialog) {
          this.dialog.updateComplete.then(() => {
            this.dialog.shouldManageTabOrderForScrolling();
          });
        }
      } else {
        this.tabIndex = 0;
      }
    }
  }
  /**
   * Bind the open/close transition into the update complete lifecycle so
   * that the overlay system can wait for it to be "visibly ready" before
   * attempting to throw focus into the content contained herein. Not
   * waiting for this can cause small amounts of page scroll to happen
   * while opening the Tray when focusable content is included: e.g. Menu
   * elements whose selected Menu Item is not the first Menu Item.
   */
  async getUpdateComplete() {
    const complete = await super.getUpdateComplete();
    await this.transitionPromise;
    return complete;
  }
}
__decorateClass([
  property({ type: Boolean, reflect: true })
], DialogBase.prototype, "dismissable", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], DialogBase.prototype, "open", 2);
__decorateClass([
  property({ type: String, reflect: true })
], DialogBase.prototype, "mode", 2);
__decorateClass([
  property({ type: Boolean })
], DialogBase.prototype, "responsive", 2);
__decorateClass([
  property({ type: Boolean })
], DialogBase.prototype, "underlay", 2);
//# sourceMappingURL=DialogBase.dev.js.map
