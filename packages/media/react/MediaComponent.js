import React, { useRef } from "react";
import {
  useAttribute,
  useBooleanAttribute,
  useProperties,
  useEventListener,
} from "./react-utils";
import "../src/index.js";

export function MediaComponent({
  children,
  mediatitle,
  imageslotname,
  staticcontentslotname,
  iconslotname,
  mediapartattribute,
  textpartattribute,
  titlepartattribute,
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
  useAttribute(ref, "mediaTitle", mediatitle);
  useAttribute(ref, "imageSlotName", imageslotname);
  useAttribute(ref, "staticContentSlotName", staticcontentslotname);
  useAttribute(ref, "iconSlotName", iconslotname);
  useAttribute(ref, "mediaPartAttribute", mediapartattribute);
  useAttribute(ref, "textPartAttribute", textpartattribute);
  useAttribute(ref, "titlePartAttribute", titlepartattribute);
  useAttribute(ref, "id", id);
  useAttribute(ref, "class", className);
  useAttribute(ref, "style", style);
  useAttribute(ref, "slot", slot);

  return React.createElement(
    "ymlwebcl-media",
    {
      ref,
      mediaTitle: mediatitle,
      imageSlotName: imageslotname,
      staticContentSlotName: staticcontentslotname,
      iconSlotName: iconslotname,
      mediaPartAttribute: mediapartattribute,
      textPartAttribute: textpartattribute,
      titlePartAttribute: titlepartattribute,
      id,
      className,
      style,
      slot,
    },
    children
  );
}
