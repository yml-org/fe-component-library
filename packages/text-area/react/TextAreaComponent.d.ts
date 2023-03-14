import React from "react";
import "../src/index.js";
import type * as TextAreaComponentTypes from "../src/index";

export interface TextAreaComponentProps {
  /** undefined */
  isautofocus?: boolean | undefined;

  /** undefined */
  isdisabled?: boolean | undefined;

  /** undefined */
  isreadonly?: boolean | undefined;

  /** undefined */
  isrequired?: boolean | undefined;

  /** undefined */
  canresize?: boolean | undefined;

  /** undefined */
  label?: string | undefined;

  /** undefined */
  textareaid?: string | undefined;

  /** undefined */
  textareaname?: string | undefined;

  /** undefined */
  textarearows?: number | undefined;

  /** undefined */
  textareacols?: number | undefined;

  /** undefined */
  textareaautocomplete?: TextAreaComponentTypes.AutoComplete | undefined;

  /** undefined */
  labelpartattribute?: string | undefined;

  /** undefined */
  containerpartattribute?: string | undefined;

  /** undefined */
  textareapartattribute?: string | undefined;

  /** undefined */
  formid?: string | undefined;

  /** undefined */
  textareamaxlength?: number | undefined;

  /** undefined */
  textareaminlength?: number | undefined;

  /** undefined */
  textareaplaceholder?: string | undefined;

  /** undefined */
  changehandlername?: string | undefined;

  /** Defines a unique identifier (ID) which must be unique in the whole document. Its purpose is to identify the element when linking (using a fragment identifier), scripting, or styling (with CSS). */
  id?: string;

  /** A space-separated list of the classes of the element. Classes allows CSS and JavaScript to select and access specific elements via the class selectors or functions like the method `Document.getElementsByClassName()`. */
  className?: string;

  /** Contains CSS styling declarations to be applied to the element. Note that it is recommended for styles to be defined in a separate file or files. This attribute and the <style> element have mainly the purpose of allowing for quick styling, for example for testing purposes. */
  style?: object;

  /** Assigns a slot in a shadow DOM shadow tree to an element: An element with a slot attribute is assigned to the slot created by the `<slot>` element whose [name](https://developer.mozilla.org/docs/Web/HTML/Element/slot#attr-name) attribute's value matches that slot attribute's value. */
  slot?: string;

  /** undefined */
  on?: (event: CustomEvent) => void;

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
      TextAreaComponentProps {}
}

/**
 *
 *
 *
 *
 * **Events**
 * - **on** - undefined
 * - **onClick** - A pointing device button has been pressed and released on an element.
 *
 *
 */
export declare function TextAreaComponent({
  children,
  isautofocus,
  isdisabled,
  isreadonly,
  isrequired,
  canresize,
  label,
  textareaid,
  textareaname,
  textarearows,
  textareacols,
  textareaautocomplete,
  labelpartattribute,
  containerpartattribute,
  textareapartattribute,
  formid,
  textareamaxlength,
  textareaminlength,
  textareaplaceholder,
  changehandlername,
  id,
  className,
  style,
  slot,
  on,
  onClick,
}: TextAreaComponentProps): JSX.Element;
