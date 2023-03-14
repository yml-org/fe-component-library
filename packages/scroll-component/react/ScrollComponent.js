import React, { useRef } from "react";
import {
  useAttribute,
  useBooleanAttribute,
  useProperties,
  useEventListener,
} from "./react-utils";
import "../src/index.js";

export function ScrollComponent({
  children,
  dataslot,
  desktopimages,
  mobileimages,
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
  useAttribute(ref, "dataSlot", dataslot);
  useAttribute(ref, "desktopImages", desktopimages);
  useAttribute(ref, "mobileImages", mobileimages);
  useAttribute(ref, "id", id);
  useAttribute(ref, "class", className);
  useAttribute(ref, "style", style);
  useAttribute(ref, "slot", slot);

  return React.createElement(
    "ymlwebcl-scroll",
    {
      ref,
      dataSlot: dataslot,
      desktopImages: desktopimages,
      mobileImages: mobileimages,
      id,
      className,
      style,
      slot,
    },
    children
  );
}
