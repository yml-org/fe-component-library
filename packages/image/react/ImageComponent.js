import React, { useRef } from "react";
import {
  useAttribute,
  useBooleanAttribute,
  useProperties,
  useEventListener,
} from "./react-utils";
import "../src/index.js";

export function ImageComponent({
  children,
  alttext,
  src,
  placeholderimg,
  size,
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
  useAttribute(ref, "altText", alttext);
  useAttribute(ref, "src", src);
  useAttribute(ref, "placeholderImg", placeholderimg);
  useAttribute(ref, "size", size);
  useAttribute(ref, "id", id);
  useAttribute(ref, "class", className);
  useAttribute(ref, "style", style);
  useAttribute(ref, "slot", slot);

  return React.createElement(
    "ymlwebcl-image",
    {
      ref,
      altText: alttext,
      src,
      placeholderImg: placeholderimg,
      size,
      id,
      className,
      style,
      slot,
    },
    children
  );
}
