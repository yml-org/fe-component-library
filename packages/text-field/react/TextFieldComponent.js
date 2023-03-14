import React, { useRef } from "react";
import {
  useAttribute,
  useBooleanAttribute,
  useProperties,
  useEventListener,
} from "./react-utils";
import "../src/index.js";

export function TextFieldComponent({
  children,
  disabled,
  readonly,
  required,
  clearfield,
  autofocus,
  error,
  textfieldid,
  label,
  value,
  placeholder,
  minlength,
  maxlength,
  pattern,
  hinttext,
  changehandler,
  clickiconhandler,
  labelpartattribute,
  textfieldpartattribute,
  iconpartattribute,
  hinttextpartattribute,
  autocomplete,
  id,
  className,
  style,
  slot,
  on,
  onClick,
}) {
  const ref = useRef(null);

  /** Event listeners */
  useEventListener(ref, "undefined", on);
  useEventListener(ref, "click", onClick);

  /** Boolean attributes */
  useBooleanAttribute(ref, "disabled", disabled);
  useBooleanAttribute(ref, "readonly", readonly);
  useBooleanAttribute(ref, "required", required);
  useBooleanAttribute(ref, "clearField", clearfield);
  useBooleanAttribute(ref, "autofocus", autofocus);
  useBooleanAttribute(ref, "error", error);

  /** Attributes */
  useAttribute(ref, "textFieldId", textfieldid);
  useAttribute(ref, "label", label);
  useAttribute(ref, "value", value);
  useAttribute(ref, "placeholder", placeholder);
  useAttribute(ref, "minLength", minlength);
  useAttribute(ref, "maxLength", maxlength);
  useAttribute(ref, "pattern", pattern);
  useAttribute(ref, "hintText", hinttext);
  useAttribute(ref, "changeHandler", changehandler);
  useAttribute(ref, "clickIconHandler", clickiconhandler);
  useAttribute(ref, "labelPartAttribute", labelpartattribute);
  useAttribute(ref, "textFieldPartAttribute", textfieldpartattribute);
  useAttribute(ref, "iconPartAttribute", iconpartattribute);
  useAttribute(ref, "hintTextPartAttribute", hinttextpartattribute);
  useAttribute(ref, "autocomplete", autocomplete);
  useAttribute(ref, "id", id);
  useAttribute(ref, "class", className);
  useAttribute(ref, "style", style);
  useAttribute(ref, "slot", slot);

  return React.createElement(
    "ymlwebcl-textfield",
    {
      ref,
      textFieldId: textfieldid,
      label,
      value,
      placeholder,
      minLength: minlength,
      maxLength: maxlength,
      pattern,
      hintText: hinttext,
      changeHandler: changehandler,
      clickIconHandler: clickiconhandler,
      labelPartAttribute: labelpartattribute,
      textFieldPartAttribute: textfieldpartattribute,
      iconPartAttribute: iconpartattribute,
      hintTextPartAttribute: hinttextpartattribute,
      autocomplete,
      id,
      className,
      style,
      slot,
    },
    children
  );
}
