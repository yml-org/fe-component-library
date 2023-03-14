import React, { useRef } from "react";
import {
  useAttribute,
  useBooleanAttribute,
  useProperties,
  useEventListener,
} from "./react-utils";
import "../src/index.js";

export function LinkComponent({
  children,
  text,
  linktitle,
  href,
  rel,
  target,
  type,
  slotname,
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
  useAttribute(ref, "linkTitle", linktitle);
  useAttribute(ref, "href", href);
  useAttribute(ref, "rel", rel);
  useAttribute(ref, "target", target);
  useAttribute(ref, "type", type);
  useAttribute(ref, "slotName", slotname);
  useAttribute(ref, "id", id);
  useAttribute(ref, "class", className);
  useAttribute(ref, "style", style);
  useAttribute(ref, "slot", slot);

  return React.createElement(
    "ymlwebcl-link",
    {
      ref,
      text,
      linkTitle: linktitle,
      href,
      rel,
      target,
      type,
      slotName: slotname,
      id,
      className,
      style,
      slot,
    },
    children
  );
}
