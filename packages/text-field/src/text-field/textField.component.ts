import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { TailwindElement } from '../shared/tailwind.element';
import { AutoComplete } from '../types/text-field';
import { AutoCompleteValues } from '../constants/text-field';

@customElement('text-field-component')
export class TextFieldComponent extends TailwindElement(null) {
  @property()
  textFieldId: string;
  @property()
  label?: string;
  @property()
  value?: string;
  @property()
  placeholder?: string;
  @property()
  disabled?: boolean;
  @property()
  readonly?: boolean;
  @property()
  required?: boolean;
  @property()
  clearField?: boolean;
  @property()
  autofocus: boolean;
  @property()
  error?: boolean;
  @property()
  minLength?: number;
  @property()
  maxLength?: number;
  @property()
  pattern?: string;
  @property()
  hintText?: string;
  @property()
  changeHandler?: string = '';
  @property()
  clickIconHandler?: string = '';
  @property()
  labelPartAttribute?: string = 'text-field-label';
  @property()
  textFieldPartAttribute?: string = 'text-field-input';
  @property()
  iconPartAttribute?: string = 'text-field-icon';
  @property()
  hintTextPartAttribute?: string = 'text-field-hint-text';
  @property()
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
        .getElementsByTagName('text-field')[0]
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

declare global {
  interface HTMLElementTagNameMap {
    'text-field-component': TextFieldComponent;
  }
}
