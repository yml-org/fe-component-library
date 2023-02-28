import { html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { TailwindElement } from '../shared/tailwind.element';
import { AutoComplete } from '../types/text-area';
import { AutoCompleteValues } from '../constants/text-area';

@customElement('text-area-component')
export class TextAreaComponent extends TailwindElement(null) {
  @property()
  label?: string = '';
  @property()
  textAreaId?: string = '';
  @property()
  textAreaName?: string = '';
  @property()
  textAreaRows?: number = 2;
  @property()
  textAreaCols?: number = 20;
  @property()
  textAreaAutoComplete?: AutoComplete = AutoCompleteValues.Off;
  @property()
  isAutoFocus?: boolean = false;
  @property()
  isDisabled?: boolean = false;
  @property()
  labelPartAttribute?: string = 'webcl-textarea-label';
  @property()
  containerPartAttribute?: string = 'webcl-textarea-container';
  @property()
  textAreaPartAttribute?: string = 'webcl-textarea';
  @property()
  formId?: string = '';
  @property()
  textAreaMaxLength?: number;
  @property()
  textAreaMinLength?: number;
  @property()
  textAreaPlaceHolder?: string = '';
  @property()
  isReadOnly?: boolean = false;
  @property()
  isRequired?: boolean = false;
  @property()
  changeHandlerName?: string = '';
  @property()
  canResize?: boolean = true;

  protected getTextAreaClassList() {
    const { canResize } = this;
    return canResize ? 'resize' : 'resize-none';
  }

  render() {
    return html`<div part=${this.containerPartAttribute}>
      ${this.label
        ? html`<label
            for=${this.textAreaId}
            part=${this.labelPartAttribute}
            class="flex"
            >${this.label}</label
          >`
        : nothing}
      <textarea
        part=${this.textAreaPartAttribute}
        class=${this.getTextAreaClassList()}
        id=${this.textAreaId}
        name=${this.textAreaName}
        rows=${this.textAreaRows}
        cols=${this.textAreaCols}
        autocomplete=${this.textAreaAutoComplete}
        ?autofocus=${this.isAutoFocus}
        ?disabled=${this.isDisabled}
        ?form=${this.formId}
        maxlength=${this.textAreaMaxLength}
        minlength=${this.textAreaMinLength}
        placeholder=${this.textAreaPlaceHolder}
        ?readonly=${this.isReadOnly}
        ?required=${this.isRequired}
        @input=${({ target: { value } }) =>
          this.dispatchEvent(
            new CustomEvent(this.changeHandlerName, { detail: { value } })
          )}
      ></textarea>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'text-area-component': TextAreaComponent;
  }
}
