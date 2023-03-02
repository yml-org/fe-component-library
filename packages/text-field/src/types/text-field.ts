export type AutoComplete = 'off' | 'on';

export type TextFieldVariant = {
  label?: string;
  textFieldId?: string;
  value?: string;
  autocomplete?: AutoComplete;
  autofocus?: boolean;
  disabled?: boolean;
  clearField?: boolean;
  hintText?: string;
  labelPartAttribute?: string;
  hintTextPartAttribute?: string;
  iconPartAttribute?: string;
  textFieldPartAttribute?: string;
  maxLength?: number;
  minLength?: number;
  placeholder?: string;
  readonly?: boolean;
  required?: boolean;
  changeHandler?: string;
  clickIconHandler?: string;
  error?: boolean;
};
