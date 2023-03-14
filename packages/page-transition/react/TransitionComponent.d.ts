import React from "react";
import "../src/index.js";
import type * as TransitionComponentTypes from "../src/index";

export interface TransitionComponentProps {
  /** undefined */
  disableswipenext?: boolean | undefined;

  /** undefined */
  disableswipeprev?: boolean | undefined;

  /** undefined */
  allowcircularswipe?: boolean | undefined;

  /** undefined */
  componentarray?: TransitionComponentTypes.Array<string> | undefined;

  /** undefined */
  animationduration?: number | undefined;

  /** undefined */
  animationdelay?: number | undefined;

  /** undefined */
  callbackevent?: string | undefined;

  /** undefined */
  scrolldirection?: TransitionComponentTypes.Direction | undefined;

  /** undefined */
  backgroundcolor?: string | undefined;

  /** Defines a unique identifier (ID) which must be unique in the whole document. Its purpose is to identify the element when linking (using a fragment identifier), scripting, or styling (with CSS). */
  id?: string;

  /** A space-separated list of the classes of the element. Classes allows CSS and JavaScript to select and access specific elements via the class selectors or functions like the method `Document.getElementsByClassName()`. */
  className?: string;

  /** Contains CSS styling declarations to be applied to the element. Note that it is recommended for styles to be defined in a separate file or files. This attribute and the <style> element have mainly the purpose of allowing for quick styling, for example for testing purposes. */
  style?: object;

  /** Assigns a slot in a shadow DOM shadow tree to an element: An element with a slot attribute is assigned to the slot created by the `<slot>` element whose [name](https://developer.mozilla.org/docs/Web/HTML/Element/slot#attr-name) attribute's value matches that slot attribute's value. */
  slot?: string;

  /** undefined */
  slotname?: string;

  /** undefined */
  index?: number;

  /** undefined */
  slotclass?: string;

  /** undefined */
  mouseposition?: TransitionComponentTypes.MousePosition;

  /** undefined */
  offset?: array;

  /** undefined */
  slotwrapperdiv?: TransitionComponentTypes.HTMLElement;

  /** undefined */
  hideslotwrapperdiv?: TransitionComponentTypes.HTMLElement;

  /** undefined */
  isdown?: boolean;

  /** undefined */
  isscrolled?: boolean;

  /** undefined */
  swipeddirection?: string;

  /** undefined */
  slotwrapperdivposition?: string;

  /** A pointing device button has been pressed and released on an element. */
  onClick?: (event: MouseEvent) => void;

  /** Used to help React identify which items have changed, are added, or are removed within a list. */
  key?: string;

  children?: any;

  /** A mutable ref object whose `.current` property is initialized to the passed argument (`initialValue`). The returned object will persist for the full lifetime of the component. */
  ref?: any;
}

declare module "react" {
  interface HTMLAttributes<T>
    extends AriaAttributes,
      DOMAttributes<T>,
      TransitionComponentProps {}
}

/**
 *
 *
 *
 *
 *
 *
 */
export declare function TransitionComponent({
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
}: TransitionComponentProps): JSX.Element;