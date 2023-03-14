import React, { useRef } from "react";
import {
  useAttribute,
  useBooleanAttribute,
  useProperties,
  useEventListener,
} from "./react-utils";
import "../src/index.js";

export function CardComponent({
  children,
  hasroundedborder,
  showcustomslot,
  ishorizontal,
  customslotname,
  cardheight,
  cardwidth,
  carddimensionunit,
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
  useBooleanAttribute(ref, "hasRoundedBorder", hasroundedborder);
  useBooleanAttribute(ref, "showCustomSlot", showcustomslot);
  useBooleanAttribute(ref, "isHorizontal", ishorizontal);

  /** Attributes */
  useAttribute(ref, "customSlotName", customslotname);
  useAttribute(ref, "cardHeight", cardheight);
  useAttribute(ref, "cardWidth", cardwidth);
  useAttribute(ref, "cardDimensionUnit", carddimensionunit);
  useAttribute(ref, "id", id);
  useAttribute(ref, "class", className);
  useAttribute(ref, "style", style);
  useAttribute(ref, "slot", slot);

  return React.createElement(
    "ymlwebcl-card",
    {
      ref,
      customSlotName: customslotname,
      cardHeight: cardheight,
      cardWidth: cardwidth,
      cardDimensionUnit: carddimensionunit,
      id,
      className,
      style,
      slot,
    },
    children
  );
}
