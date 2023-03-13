import { html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { TailwindElement } from '../shared/tailwind.element';
import { AutoComplete } from '../types/text-area';
import { AutoCompleteValues } from '../constants/text-area';

@customElement('ymlwebcl-textarea')
export class TextAreaComponent extends TailwindElement(null) {
  @property({ type: String, reflect: true })
  label?: string = '';
  @property({ type: String, reflect: true })
  textAreaId?: string = '';
  @property({ type: String, reflect: true })
  textAreaName?: string = '';
  @property({ type: Number, reflect: true })
  textAreaRows?: number = 2;
  @property({ type: Number, reflect: true })
  textAreaCols?: number = 20;
  @property({ reflect: true })
  textAreaAutoComplete?: AutoComplete = AutoCompleteValues.Off;
  @property({ type: Boolean, reflect: true })
  isAutoFocus?: boolean = false;
  @property({ type: Boolean, reflect: true })
  isDisabled?: boolean = false;
  @property({ type: String, reflect: true })
  labelPartAttribute?: string = 'webcl-textarea-label';
  @property({ type: String, reflect: true })
  containerPartAttribute?: string = 'webcl-textarea-container';
  @property({ type: String, reflect: true })
  textAreaPartAttribute?: string = 'webcl-textarea';
  @property({ type: String, reflect: true })
  formId?: string = '';
  @property({ type: Number, reflect: true })
  textAreaMaxLength?: number;
  @property({ type: Number, reflect: true })
  textAreaMinLength?: number;
  @property({ type: String, reflect: true })
  textAreaPlaceHolder?: string = '';
  @property({ type: Boolean, reflect: true })
  isReadOnly?: boolean = false;
  @property({ type: Boolean, reflect: true })
  isRequired?: boolean = false;
  @property({ type: String, reflect: true })
  changeHandlerName?: string = '';
  @property({ type: Boolean, reflect: true })
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
