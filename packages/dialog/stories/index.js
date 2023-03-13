"use strict";
import { html } from "@spectrum-web-components/base";
function nextFrame() {
  return new Promise((res) => requestAnimationFrame(() => res()));
}
class OverlayTriggerReady extends HTMLElement {
  constructor() {
    super();
    this.handleTriggerOpened = async () => {
      await nextFrame();
      this.ready(true);
    };
    this.readyPromise = Promise.resolve(false);
    this.readyPromise = new Promise((res) => {
      this.ready = res;
      this.setup();
    });
  }
  async setup() {
    await nextFrame();
    const overlay = document.querySelector(
      `overlay-trigger`
    );
    overlay.addEventListener("sp-opened", this.handleTriggerOpened);
  }
  get updateComplete() {
    return this.readyPromise;
  }
}
customElements.define("overlay-trigger-ready", OverlayTriggerReady);
export const overlayTriggerDecorator = (story) => {
  return html`
        ${story()}
        <overlay-trigger-ready></overlay-trigger-ready>
    `;
};
//# sourceMappingURL=index.js.map
