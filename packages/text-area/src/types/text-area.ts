export type AutoComplete = 'off' | 'on';

export type TextAreaVariant = {
  label?: string;
  textAreaId?: string;
  textAreaName?: string;
  textAreaRows?: number;
  textAreaCols?: number;
  textAreaAutoComplete?: AutoComplete;
  isAutoFocus?: boolean;
  isDisabled?: boolean;
  labelPartAttribute?: string;
  containerPartAttribute?: string;
  textAreaPartAttribute?: string;
  formId?: string;
  textAreaMaxLength?: number;
  textAreaMinLength?: number;
  textAreaPlaceHolder?: string;
  isReadOnly?: boolean;
  isRequired?: boolean;
  changeHandlerName?: string;
  canResize?: boolean;
};
