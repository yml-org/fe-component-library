import React, { useRef } from "react";
import {
  useAttribute,
  useBooleanAttribute,
  useProperties,
  useEventListener,
} from "./react-utils";
import "../src/index.js";

export function HeaderComponent({
  children,
  navoptions,
  id,
  className,
  style,
  slot,
  openMenu,
  on,
  onClick,
}) {
  const ref = useRef(null);

  /** Event listeners */
  useEventListener(ref, "undefined", on);
  useEventListener(ref, "click", onClick);

  /** Attributes */
  useAttribute(ref, "navOptions", navoptions);
  useAttribute(ref, "id", id);
  useAttribute(ref, "class", className);
  useAttribute(ref, "style", style);
  useAttribute(ref, "slot", slot);

  /** Properties */
  useProperties(ref, "openMenu", openMenu);

  return React.createElement(
    "ymlwebcl-header",
    {
      ref,
      navOptions: navoptions,
      id,
      className,
      style,
      slot,
    },
    children
  );
}
