"use strict";
import {
  elementUpdated,
  expect,
  fixture,
  html,
  nextFrame,
  oneEvent
} from "@open-wc/testing";
import "@spectrum-web-components/theme/sp-theme.js";
import "@spectrum-web-components/theme/src/themes.js";
import "@spectrum-web-components/dialog/sp-dialog-base.js";
import "@spectrum-web-components/overlay/overlay-trigger.js";
import { alertDestructive } from "../stories/dialog.stories.js";
async function styledFixture(story) {
  const test = await fixture(html`
        <sp-theme theme="spectrum" scale="medium" color="dark">
            ${story}
        </sp-theme>
    `);
  return test.children[0];
}
const overlayTrigger = (story) => html`
    <overlay-trigger type="modal" placement="none">
        <sp-button slot="trigger" variant="primary">Toggle Dialog</sp-button>
        ${story()}
    </overlay-trigger>
`;
describe("dialog base", () => {
  it("does not close by default with interacting with buttons", async () => {
    var _a, _b, _c, _d, _e;
    const el = await styledFixture(
      overlayTrigger(
        () => html`
                    <sp-dialog-base underlay slot="click-content">
                        ${alertDestructive()}
                    </sp-dialog-base>
                `
      )
    );
    await elementUpdated(el);
    const dialog = el.querySelector("sp-dialog-base");
    await elementUpdated(dialog);
    const secondaryButton = el.querySelector(
      '[variant="secondary"]'
    );
    const negativeButton = el.querySelector(
      '[variant="negative"]'
    );
    expect(el.open).to.be.undefined;
    expect(dialog.open).to.be.false;
    expect((_a = dialog.parentElement) == null ? void 0 : _a.localName).to.equal("overlay-trigger");
    await nextFrame();
    const opened = oneEvent(el, "sp-opened");
    el.open = "click";
    await opened;
    await nextFrame();
    expect(dialog.open).to.be.true;
    expect(el.open).to.be.equal("click");
    expect((_b = dialog.parentElement) == null ? void 0 : _b.localName).to.equal("active-overlay");
    secondaryButton.click();
    expect(el.open).to.be.equal("click");
    expect((_c = dialog.parentElement) == null ? void 0 : _c.localName).to.equal("active-overlay");
    negativeButton.click();
    expect(el.open).to.be.equal("click");
    expect((_d = dialog.parentElement) == null ? void 0 : _d.localName).to.equal("active-overlay");
    const closed = oneEvent(el, "sp-closed");
    el.open = void 0;
    await closed;
    await elementUpdated(el);
    expect(dialog.open).to.be.false;
    expect(el.open).to.be.undefined;
    expect((_e = dialog.parentElement) == null ? void 0 : _e.localName).to.equal("overlay-trigger");
  });
  it("does not close by default with interacting with buttons when recycled", async () => {
    var _a, _b, _c, _d;
    const el = await styledFixture(
      overlayTrigger(
        () => html`
                    <sp-dialog-base underlay slot="click-content">
                        ${alertDestructive()}
                    </sp-dialog-base>
                `
      )
    );
    await elementUpdated(el);
    const dialog = el.querySelector("sp-dialog-base");
    await elementUpdated(dialog);
    const secondaryButton = el.querySelector(
      '[variant="secondary"]'
    );
    const negativeButton = el.querySelector(
      '[variant="negative"]'
    );
    expect(el.open).to.be.undefined;
    expect(dialog.open).to.be.false;
    expect((_a = dialog.parentElement) == null ? void 0 : _a.localName).to.equal("overlay-trigger");
    await nextFrame();
    const opened = oneEvent(el, "sp-opened");
    el.open = "click";
    await opened;
    await nextFrame();
    expect(dialog.open).to.be.true;
    expect(el.open).to.be.equal("click");
    expect((_b = dialog.parentElement) == null ? void 0 : _b.localName).to.equal("active-overlay");
    secondaryButton.click();
    expect(el.open).to.be.equal("click");
    expect((_c = dialog.parentElement) == null ? void 0 : _c.localName).to.equal("active-overlay");
    negativeButton.click();
    expect(el.open).to.be.equal("click");
    expect((_d = dialog.parentElement) == null ? void 0 : _d.localName).to.equal("active-overlay");
    const closed = oneEvent(el, "sp-closed");
    dialog.open = false;
    await closed;
    await elementUpdated(el);
    expect(dialog.open).to.be.false;
  });
});
//# sourceMappingURL=dialog-base.test.js.map
