import React from "react";
import "../src/index.js";
import type * as TextFieldComponentTypes from "../src/index";

export interface TextFieldComponentProps {
  /** undefined */
  disabled?: boolean | undefined;

  /** undefined */
  readonly?: boolean | undefined;

  /** undefined */
  required?: boolean | undefined;

  /** undefined */
  clearfield?: boolean | undefined;

  /** undefined */
  autofocus?: boolean;

  /** undefined */
  error?: boolean | undefined;

  /** undefined */
  textfieldid?: string;

  /** undefined */
  label?: string | undefined;

  /** undefined */
  value?: string | undefined;

  /** undefined */
  placeholder?: string | undefined;

  /** undefined */
  minlength?: number | undefined;

  /** undefined */
  maxlength?: number | undefined;

  /** undefined */
  pattern?: string | undefined;

  /** undefined */
  hinttext?: string | undefined;

  /** undefined */
  changehandler?: string | undefined;

  /** undefined */
  clickiconhandler?: string | undefined;

  /** undefined */
  labelpartattribute?: string | undefined;

  /** undefined */
  textfieldpartattribute?: string | undefined;

  /** undefined */
  iconpartattribute?: string | undefined;

  /** undefined */
  hinttextpartattribute?: string | undefined;

  /** undefined */
  autocomplete?: TextFieldComponentTypes.AutoComplete | undefined;

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
      TextFieldComponentProps {}
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
export declare function TextFieldComponent({
  children,
  disabled,
  readonly,
  required,
  clearfield,
  autofocus,
  error,
  textfieldid,
  label,
  value,
  placeholder,
  minlength,
  maxlength,
  pattern,
  hinttext,
  changehandler,
  clickiconhandler,
  labelpartattribute,
  textfieldpartattribute,
  iconpartattribute,
  hinttextpartattribute,
  autocomplete,
  id,
  className,
  style,
  slot,
  on,
  onClick,
}: TextFieldComponentProps): JSX.Element;
