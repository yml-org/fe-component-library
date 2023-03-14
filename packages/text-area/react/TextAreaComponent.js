import React, { useRef } from "react";
import {
  useAttribute,
  useBooleanAttribute,
  useProperties,
  useEventListener,
} from "./react-utils";
import "../src/index.js";

export function TextAreaComponent({
  children,
  isautofocus,
  isdisabled,
  isreadonly,
  isrequired,
  canresize,
  label,
  textareaid,
  textareaname,
  textarearows,
  textareacols,
  textareaautocomplete,
  labelpartattribute,
  containerpartattribute,
  textareapartattribute,
  formid,
  textareamaxlength,
  textareaminlength,
  textareaplaceholder,
  changehandlername,
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
  useBooleanAttribute(ref, "isAutoFocus", isautofocus);
  useBooleanAttribute(ref, "isDisabled", isdisabled);
  useBooleanAttribute(ref, "isReadOnly", isreadonly);
  useBooleanAttribute(ref, "isRequired", isrequired);
  useBooleanAttribute(ref, "canResize", canresize);

  /** Attributes */
  useAttribute(ref, "label", label);
  useAttribute(ref, "textAreaId", textareaid);
  useAttribute(ref, "textAreaName", textareaname);
  useAttribute(ref, "textAreaRows", textarearows);
  useAttribute(ref, "textAreaCols", textareacols);
  useAttribute(ref, "textAreaAutoComplete", textareaautocomplete);
  useAttribute(ref, "labelPartAttribute", labelpartattribute);
  useAttribute(ref, "containerPartAttribute", containerpartattribute);
  useAttribute(ref, "textAreaPartAttribute", textareapartattribute);
  useAttribute(ref, "formId", formid);
  useAttribute(ref, "textAreaMaxLength", textareamaxlength);
  useAttribute(ref, "textAreaMinLength", textareaminlength);
  useAttribute(ref, "textAreaPlaceHolder", textareaplaceholder);
  useAttribute(ref, "changeHandlerName", changehandlername);
  useAttribute(ref, "id", id);
  useAttribute(ref, "class", className);
  useAttribute(ref, "style", style);
  useAttribute(ref, "slot", slot);

  return React.createElement(
    "ymlwebcl-textarea",
    {
      ref,
      label,
      textAreaId: textareaid,
      textAreaName: textareaname,
      textAreaRows: textarearows,
      textAreaCols: textareacols,
      textAreaAutoComplete: textareaautocomplete,
      labelPartAttribute: labelpartattribute,
      containerPartAttribute: containerpartattribute,
      textAreaPartAttribute: textareapartattribute,
      formId: formid,
      textAreaMaxLength: textareamaxlength,
      textAreaMinLength: textareaminlength,
      textAreaPlaceHolder: textareaplaceholder,
      changeHandlerName: changehandlername,
      id,
      className,
      style,
      slot,
    },
    children
  );
}
