import React, { useRef } from "react";
import {
  useAttribute,
  useBooleanAttribute,
  useProperties,
  useEventListener,
} from "./react-utils";
import "../src/index.js";

export function ChipComponent({
  children,
  text,
  rightslotname,
  leftslotname,
  chippartattribute,
  id,
  className,
  style,
  slot,
  onClick,
}) {
  const ref = useRef(null);

  /** Event listeners */
  useEventListener(ref, "click", onClick);

  /** Attributes */
  useAttribute(ref, "text", text);
  useAttribute(ref, "rightSlotName", rightslotname);
  useAttribute(ref, "leftSlotName", leftslotname);
  useAttribute(ref, "chipPartAttribute", chippartattribute);
  useAttribute(ref, "id", id);
  useAttribute(ref, "class", className);
  useAttribute(ref, "style", style);
  useAttribute(ref, "slot", slot);

  return React.createElement(
    "ymlwebcl-chip",
    {
      ref,
      text,
      rightSlotName: rightslotname,
      leftSlotName: leftslotname,
      chipPartAttribute: chippartattribute,
      id,
      className,
      style,
      slot,
    },
    children
  );
}
