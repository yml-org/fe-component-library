import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { TailwindElement } from '../shared/tailwind.element';
import { AutoComplete } from '../types/text-field';
import { AutoCompleteValues } from '../constants/text-field';

@customElement('ymlwebcl-textfield')
export class TextFieldComponent extends TailwindElement(null) {
  @property({ type: String, reflect: true })
  textFieldId: string;
  @property({ type: String, reflect: true })
  label?: string = 'Label';
  @property({ type: String, reflect: true })
  value?: string = '';
  @property({ type: String, reflect: true })
  placeholder?: string = 'Input';
  @property({ type: Boolean, reflect: true })
  disabled?: boolean;
  @property({ type: Boolean, reflect: true })
  readonly?: boolean;
  @property({ type: Boolean, reflect: true })
  required?: boolean;
  @property({ type: Boolean, reflect: true })
  clearField?: boolean;
  @property({ type: Boolean, reflect: true })
  autofocus: boolean;
  @property({ type: Boolean, reflect: true })
  error?: boolean;
  @property({ type: Number, reflect: true })
  minLength?: number;
  @property({ type: Number, reflect: true })
  maxLength?: number;
  @property({ type: String, reflect: true })
  pattern?: string;
  @property({ type: String, reflect: true })
  hintText?: string;
  @property({ type: String, reflect: true })
  changeHandler?: string = '';
  @property({ type: String, reflect: true })
  clickIconHandler?: string = '';
  @property({ type: String, reflect: true })
  labelPartAttribute?: string = 'text-field-label';
  @property({ type: String, reflect: true })
  textFieldPartAttribute?: string = 'text-field-input';
  @property({ type: String, reflect: true })
  iconPartAttribute?: string = 'text-field-icon';
  @property({ type: String, reflect: true })
  hintTextPartAttribute?: string = 'text-field-hint-text';
  @property({ reflect: true })
  autocomplete?: AutoComplete = AutoCompleteValues.Off;

  protected getContainerList() {
    const { error, disabled } = this;
    if (error) {
      return 'text-field-wrapper-error';
    } else if (disabled) {
      return 'text-field-wrapper-disabled';
    } else return 'text-field-wrapper';
  }

  protected getInputClassList() {
    return 'text-field-input';
  }

  protected renderLabel() {
    const { label, required, labelPartAttribute, textFieldId } = this;
    return label
      ? html`<label
          class="text-field-label-container"
          part=${labelPartAttribute}
          for=${textFieldId}
        >
          ${label} ${required ? html`<span class="text-red-500">*</span>` : ''}
        </label>`
      : '';
  }

  protected renderHintText() {
    const { hintText, hintTextPartAttribute } = this;
    return hintText
      ? html`<div part=${hintTextPartAttribute}>${hintText}</div>`
      : '';
  }

  protected handleIconClick() {
    if (this.clearField) {
      document.body
        .getElementsByTagName('ymlwebcl-textfield')[0]
        .shadowRoot.querySelector('.text-field-input').value = '';
      this.value = '';
    } else {
      this.dispatchEvent(new CustomEvent(this.clickIconHandler));
    }
  }

  protected updateValue(newValue) {
    this.value = newValue;
    this.dispatchEvent(
      new CustomEvent(this.changeHandler, { detail: { value: newValue } })
    );
  }

  render() {
    return html`<div
      class=${this.getContainerList()}
      part=${this.getContainerList()}
    >
      ${this.renderLabel()}
      <div class="text-field-input-wrapper">
        <div
          part=${this.iconPartAttribute}
          @click=${() => this.handleIconClick()}
        >
          <slot name="textfield-icon"></slot>
        </div>
        <input
          class=${this.getInputClassList()}
          type="text"
          id=${this.textFieldId}
          value=${this.value || ''}
          autocomplete=${this.autocomplete}
          placeholder=${this.placeholder || ''}
          autofocus=${this.autofocus || false}
          ?disabled=${this.disabled || false}
          ?readonly=${this.readonly || false}
          ?required=${this.required || false}
          ?pattern=${this.pattern || ''}
          ?minlength=${this.minLength || ''}
          ?maxlength=${this.maxLength || ''}
          @input=${({ target: { value } }) => this.updateValue(value)}
          part=${this.textFieldPartAttribute}
        />
      </div>
      ${this.renderHintText()}
    </div>`;
  }
}
