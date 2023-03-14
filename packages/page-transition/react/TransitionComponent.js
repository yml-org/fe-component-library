import React, { useRef } from "react";
import {
  useAttribute,
  useBooleanAttribute,
  useProperties,
  useEventListener,
} from "./react-utils";
import "../src/index.js";

export function TransitionComponent({
  children,
  disableswipenext,
  disableswipeprev,
  allowcircularswipe,
  componentarray,
  animationduration,
  animationdelay,
  callbackevent,
  scrolldirection,
  backgroundcolor,
  id,
  className,
  style,
  slot,
  slotName,
  index,
  slotClass,
  mousePosition,
  offset,
  slotWrapperDiv,
  hideSlotWrapperDiv,
  isDown,
  isScrolled,
  swipedDirection,
  slotWrapperDivPosition,
  onClick,
}) {
  const ref = useRef(null);

  /** Event listeners */
  useEventListener(ref, "click", onClick);

  /** Boolean attributes */
  useBooleanAttribute(ref, "disableSwipeNext", disableswipenext);
  useBooleanAttribute(ref, "disableSwipePrev", disableswipeprev);
  useBooleanAttribute(ref, "allowCircularSwipe", allowcircularswipe);

  /** Attributes */
  useAttribute(ref, "componentArray", componentarray);
  useAttribute(ref, "animationDuration", animationduration);
  useAttribute(ref, "animationDelay", animationdelay);
  useAttribute(ref, "callbackEvent", callbackevent);
  useAttribute(ref, "scrollDirection", scrolldirection);
  useAttribute(ref, "backgroundColor", backgroundcolor);
  useAttribute(ref, "id", id);
  useAttribute(ref, "class", className);
  useAttribute(ref, "style", style);
  useAttribute(ref, "slot", slot);

  /** Properties */
  useProperties(ref, "slotName", slotName);
  useProperties(ref, "index", index);
  useProperties(ref, "slotClass", slotClass);
  useProperties(ref, "mousePosition", mousePosition);
  useProperties(ref, "offset", offset);
  useProperties(ref, "slotWrapperDiv", slotWrapperDiv);
  useProperties(ref, "hideSlotWrapperDiv", hideSlotWrapperDiv);
  useProperties(ref, "isDown", isDown);
  useProperties(ref, "isScrolled", isScrolled);
  useProperties(ref, "swipedDirection", swipedDirection);
  useProperties(ref, "slotWrapperDivPosition", slotWrapperDivPosition);

  return React.createElement(
    "ymlwebcl-transition",
    {
      ref,
      componentArray: componentarray,
      animationDuration: animationduration,
      animationDelay: animationdelay,
      callbackEvent: callbackevent,
      scrollDirection: scrolldirection,
      backgroundColor: backgroundcolor,
      id,
      className,
      style,
      slot,
    },
    children
  );
}
