import React, { useRef } from "react";
import {
  useAttribute,
  useBooleanAttribute,
  useProperties,
  useEventListener,
} from "./react-utils";
import "../src/index.js";

export function ButtonComponent({
  children,
  isdisabled,
  fullwidth,
  isrounded,
  text,
  variant,
  color,
  slotname,
  partname,
  id,
  className,
  style,
  slot,
  onClick,
}) {
  const ref = useRef(null);

  /** Event listeners */
  useEventListener(ref, "click", onClick);

  /** Boolean attributes */
  useBooleanAttribute(ref, "isDisabled", isdisabled);
  useBooleanAttribute(ref, "fullWidth", fullwidth);
  useBooleanAttribute(ref, "isRounded", isrounded);

  /** Attributes */
  useAttribute(ref, "text", text);
  useAttribute(ref, "variant", variant);
  useAttribute(ref, "color", color);
  useAttribute(ref, "slotName", slotname);
  useAttribute(ref, "partName", partname);
  useAttribute(ref, "id", id);
  useAttribute(ref, "class", className);
  useAttribute(ref, "style", style);
  useAttribute(ref, "slot", slot);

  return React.createElement(
    "ymlwebcl-button",
    {
      ref,
      text,
      variant,
      color,
      slotName: slotname,
      partName: partname,
      id,
      className,
      style,
      slot,
    },
    children
  );
}
