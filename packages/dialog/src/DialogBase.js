"use strict";var p=Object.defineProperty;var u=Object.getOwnPropertyDescriptor;var o=(a,s,e,i)=>{for(var t=i>1?void 0:i?u(s,e):s,n=a.length-1,d;n>=0;n--)(d=a[n])&&(t=(i?d(s,e,t):d(t))||t);return i&&t&&p(s,e,t),t};import{html as l,SpectrumElement as c}from"@spectrum-web-components/base";import{property as r}from"@spectrum-web-components/base/src/decorators.js";import"@spectrum-web-components/underlay/sp-underlay.js";import"@spectrum-web-components/button/sp-button.js";import"../sp-dialog.js";import m from"@spectrum-web-components/modal/src/modal-wrapper.css.js";import h from"@spectrum-web-components/modal/src/modal.css.js";import{FocusVisiblePolyfillMixin as f}from"@spectrum-web-components/shared";import{firstFocusableIn as v}from"@spectrum-web-components/shared/src/first-focusable-in.js";export class DialogBase extends f(c){constructor(){super(...arguments);this.dismissable=!1;this.open=!1;this.responsive=!1;this.transitionPromise=Promise.resolve();this.resolveTransitionPromise=()=>{};this.underlay=!1;this.animating=!1}static get styles(){return[m,h]}get dialog(){return this.shadowRoot.querySelector("slot").assignedElements()[0]||this}async focus(){if(this.shadowRoot){const e=v(this.dialog);e?(e.updateComplete&&await e.updateComplete,e.focus(),this.removeAttribute("tabindex")):this.dialog.focus()}else super.focus()}overlayWillCloseCallback(){return this.open?(this.close(),!0):this.animating}dismiss(){this.dismissable&&this.close()}handleClose(e){e.stopPropagation(),this.close()}close(){this.open=!1}dispatchClosed(){this.dispatchEvent(new Event("close",{bubbles:!0}))}handleUnderlayTransitionend(e){!this.open&&e.propertyName==="visibility"&&(this.resolveTransitionPromise(),this.dispatchClosed())}handleModalTransitionend(){(this.open||!this.underlay)&&(this.resolveTransitionPromise(),this.open||this.dispatchClosed())}update(e){e.has("open")&&e.get("open")!==void 0&&(this.animating=!0,this.transitionPromise=new Promise(i=>{this.resolveTransitionPromise=()=>{this.animating=!1,i()}})),super.update(e)}renderDialog(){return l`
            <slot></slot>
        `}render(){return l`
            ${this.underlay?l`
                      <sp-underlay
                          ?open=${this.open}
                          @click=${this.dismiss}
                          @transitionend=${this.handleUnderlayTransitionend}
                      ></sp-underlay>
                  `:l``}
            <div
                class="modal ${this.mode}"
                @transitionend=${this.handleModalTransitionend}
                @close=${this.handleClose}
            >
                ${this.renderDialog()}
            </div>
        `}updated(e){e.has("open")&&(this.open?"updateComplete"in this.dialog&&"shouldManageTabOrderForScrolling"in this.dialog&&this.dialog.updateComplete.then(()=>{this.dialog.shouldManageTabOrderForScrolling()}):this.tabIndex=0)}async getUpdateComplete(){const e=await super.getUpdateComplete();return await this.transitionPromise,e}}o([r({type:Boolean,reflect:!0})],DialogBase.prototype,"dismissable",2),o([r({type:Boolean,reflect:!0})],DialogBase.prototype,"open",2),o([r({type:String,reflect:!0})],DialogBase.prototype,"mode",2),o([r({type:Boolean})],DialogBase.prototype,"responsive",2),o([r({type:Boolean})],DialogBase.prototype,"underlay",2);
//# sourceMappingURL=DialogBase.js.map
