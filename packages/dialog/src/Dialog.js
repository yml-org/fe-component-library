"use strict";var m=Object.defineProperty;var v=Object.getOwnPropertyDescriptor;var r=(c,n,e,t)=>{for(var o=t>1?void 0:t?v(n,e):n,i=c.length-1,b;i>=0;i--)(b=c[i])&&(o=(t?b(n,e,o):b(o))||o);return t&&o&&m(n,e,o),o};import{html as s,nothing as l,SpectrumElement as f}from"@spectrum-web-components/base";import{property as d,query as u}from"@spectrum-web-components/base/src/decorators.js";import{classMap as g}from"@spectrum-web-components/base/src/directives.js";import{conditionAttributeWithId as p}from"@spectrum-web-components/base/src/condition-attribute-with-id.js";import"@spectrum-web-components/divider/sp-divider.js";import"@spectrum-web-components/button/sp-close-button.js";import"@spectrum-web-components/button-group/sp-button-group.js";import"@spectrum-web-components/icons-workflow/icons/sp-icon-alert.js";import{FocusVisiblePolyfillMixin as y,ObserveSlotPresence as C}from"@spectrum-web-components/shared";import S from"./dialog.css.js";let E=0;function h(c,n){const e=c.assignedElements(),t=[];return e.forEach(o=>{if(o.id)t.push(o.id);else{const i=n+`-${E++}`;o.id=i,t.push(i)}}),t}const a=class extends y(C(f,['[slot="hero"]','[slot="footer"]','[slot="button"]'])){constructor(){super(...arguments);this.error=!1;this.dismissable=!1;this.noDivider=!1;this.shouldManageTabOrderForScrolling=()=>{const{offsetHeight:e,scrollHeight:t}=this.contentElement;e<t?this.contentElement.tabIndex=0:this.contentElement.removeAttribute("tabindex")};this.labelledbyId=`sp-dialog-label-${a.instanceCount++}`;this.describedbyId=`sp-dialog-description-${a.instanceCount++}`}static get styles(){return[S]}get hasFooter(){return this.getSlotContentPresence('[slot="footer"]')}get hasButtons(){return this.getSlotContentPresence('[slot="button"]')}get hasHero(){return this.getSlotContentPresence('[slot="hero"]')}close(){this.dispatchEvent(new Event("close",{bubbles:!0,composed:!0,cancelable:!0}))}renderHero(){return s`
            <slot name="hero"></slot>
        `}renderHeading(){return s`
            <slot name="heading" @slotchange=${this.onHeadingSlotchange}></slot>
        `}renderContent(){return s`
            <div class="content">
                <slot @slotchange=${this.onContentSlotChange}></slot>
            </div>
        `}renderFooter(){return s`
            <div class="footer">
                <slot name="footer"></slot>
            </div>
        `}renderButtons(){const e={"button-group":!0,"button-group--noFooter":!this.hasFooter};return s`
            <sp-button-group class=${g(e)}>
                <slot name="button"></slot>
            </sp-button-group>
        `}renderDismiss(){return s`
            <sp-close-button
                class="close-button"
                label="Close"
                quiet
                size="m"
                @click=${this.close}
            ></sp-close-button>
        `}render(){return s`
            <div class="grid">
                ${this.renderHero()} ${this.renderHeading()}
                ${this.error?s`
                          <sp-icon-alert class="type-icon"></sp-icon-alert>
                      `:l}
                ${this.noDivider?l:s`
                          <sp-divider size="m" class="divider"></sp-divider>
                      `}
                ${this.renderContent()}
                ${this.hasFooter?this.renderFooter():l}
                ${this.hasButtons?this.renderButtons():l}
                ${this.dismissable?this.renderDismiss():l}
            </div>
        `}shouldUpdate(e){return e.has("mode")&&this.mode&&(this.dismissable=!1),e.has("dismissable")&&this.dismissable&&(this.dismissable=!this.mode),super.shouldUpdate(e)}firstUpdated(e){super.firstUpdated(e),this.setAttribute("role","dialog")}onHeadingSlotchange({target:e}){this.conditionLabelledby&&(this.conditionLabelledby(),delete this.conditionLabelledby);const t=h(e,this.labelledbyId);t.length&&(this.conditionLabelledby=p(this,"aria-labelledby",t))}onContentSlotChange({target:e}){this.conditionDescribedby&&(this.conditionDescribedby(),delete this.conditionDescribedby);const t=h(e,this.describedbyId);if(t.length&&t.length<4)this.conditionDescribedby=p(this,"aria-describedby",t);else if(!t.length){const o=!!this.id;o||(this.id=this.describedbyId);const i=p(this,"aria-describedby",this.id);this.conditionDescribedby=()=>{i(),o||this.removeAttribute("id")}}}connectedCallback(){super.connectedCallback(),this.tabIndex=0,window.addEventListener("resize",this.shouldManageTabOrderForScrolling)}disconnectedCallback(){window.removeEventListener("resize",this.shouldManageTabOrderForScrolling),super.disconnectedCallback()}};export let Dialog=a;Dialog.instanceCount=0,r([u(".close-button")],Dialog.prototype,"closeButton",2),r([u(".content")],Dialog.prototype,"contentElement",2),r([d({type:Boolean,reflect:!0})],Dialog.prototype,"error",2),r([d({type:Boolean,reflect:!0})],Dialog.prototype,"dismissable",2),r([d({type:Boolean,reflect:!0,attribute:"no-divider"})],Dialog.prototype,"noDivider",2),r([d({type:String,reflect:!0})],Dialog.prototype,"mode",2),r([d({type:String,reflect:!0})],Dialog.prototype,"size",2);
//# sourceMappingURL=Dialog.js.map
