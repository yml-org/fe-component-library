import React from "react";
import "../src/index.js";
import type * as MediaComponentTypes from "../src/index";

export interface MediaComponentProps {
  /** undefined */
  mediatitle?: string | undefined;

  /** undefined */
  imageslotname?: string | undefined;

  /** undefined */
  staticcontentslotname?: string | undefined;

  /** undefined */
  iconslotname?: string | undefined;

  /** undefined */
  mediapartattribute?: string | undefined;

  /** undefined */
  textpartattribute?: string | undefined;

  /** undefined */
  titlepartattribute?: string | undefined;

  /** Defines a unique identifier (ID) which must be unique in the whole document. Its purpose is to identify the element when linking (using a fragment identifier), scripting, or styling (with CSS). */
  id?: string;

  /** A space-separated list of the classes of the element. Classes allows CSS and JavaScript to select and access specific elements via the class selectors or functions like the method `Document.getElementsByClassName()`. */
  className?: string;

  /** Contains CSS styling declarations to be applied to the element. Note that it is recommended for styles to be defined in a separate file or files. This attribute and the <style> element have mainly the purpose of allowing for quick styling, for example for testing purposes. */
  style?: object;

  /** Assigns a slot in a shadow DOM shadow tree to an element: An element with a slot attribute is assigned to the slot created by the `<slot>` element whose [name](https://developer.mozilla.org/docs/Web/HTML/Element/slot#attr-name) attribute's value matches that slot attribute's value. */
  slot?: string;

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
      MediaComponentProps {}
}

/**
 *
 *
 *
 *
 *
 *
 */
export declare function MediaComponent({
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
}: MediaComponentProps): JSX.Element;