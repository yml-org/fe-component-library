import React, { useRef } from "react";
import {
  useAttribute,
  useBooleanAttribute,
  useProperties,
  useEventListener,
} from "./react-utils";
import "../src/index.js";

export function AvatarComponent({
  children,
  isrounded,
  usepercentage,
  hasborder,
  hasshadow,
  showdefaulticon,
  width,
  height,
  bordercolor,
  defaultbgcolor,
  slotname,
  onavatarclick,
  defaultimage,
  avatarpartattribute,
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
  useBooleanAttribute(ref, "isRounded", isrounded);
  useBooleanAttribute(ref, "usePercentage", usepercentage);
  useBooleanAttribute(ref, "hasBorder", hasborder);
  useBooleanAttribute(ref, "hasShadow", hasshadow);
  useBooleanAttribute(ref, "showDefaultIcon", showdefaulticon);

  /** Attributes */
  useAttribute(ref, "width", width);
  useAttribute(ref, "height", height);
  useAttribute(ref, "borderColor", bordercolor);
  useAttribute(ref, "defaultBgColor", defaultbgcolor);
  useAttribute(ref, "slotName", slotname);
  useAttribute(ref, "onAvatarClick", onavatarclick);
  useAttribute(ref, "defaultImage", defaultimage);
  useAttribute(ref, "avatarPartAttribute", avatarpartattribute);
  useAttribute(ref, "id", id);
  useAttribute(ref, "class", className);
  useAttribute(ref, "style", style);
  useAttribute(ref, "slot", slot);

  return React.createElement(
    "ymlwebcl-avatar",
    {
      ref,
      width,
      height,
      borderColor: bordercolor,
      defaultBgColor: defaultbgcolor,
      slotName: slotname,
      onAvatarClick: onavatarclick,
      defaultImage: defaultimage,
      avatarPartAttribute: avatarpartattribute,
      id,
      className,
      style,
      slot,
    },
    children
  );
}
