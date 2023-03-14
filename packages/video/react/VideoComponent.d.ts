import React from "react";
import "../src/index.js";
import type * as VideoComponentTypes from "../src/index";

export interface VideoComponentProps {
  /** undefined */
  autoplay?: boolean | string | undefined;

  /** undefined */
  controls?: boolean | undefined;

  /** undefined */
  fluid?: boolean | undefined;

  /** undefined */
  responsive?: boolean | undefined;

  /** undefined */
  muted?: boolean | undefined;

  /** undefined */
  loop?: boolean | undefined;

  /** undefined */
  src?: string;

  /** undefined */
  preload?: string | undefined;

  /** undefined */
  playbackrates?: array;

  /** undefined */
  poster?: string | undefined;

  /** undefined */
  videostyle?: VideoComponentTypes.VideoStyle | null | undefined;

  /** undefined */
  captions?: VideoComponentTypes.Captions[] | undefined;

  /** undefined */
  seekto?: string | undefined;

  /** undefined */
  customplayevent?: string | undefined;

  /** undefined */
  custompauseevent?: string | undefined;

  /** undefined */
  customseekevent?: string | undefined;

  /** Defines a unique identifier (ID) which must be unique in the whole document. Its purpose is to identify the element when linking (using a fragment identifier), scripting, or styling (with CSS). */
  id?: string;

  /** A space-separated list of the classes of the element. Classes allows CSS and JavaScript to select and access specific elements via the class selectors or functions like the method `Document.getElementsByClassName()`. */
  className?: string;

  /** Contains CSS styling declarations to be applied to the element. Note that it is recommended for styles to be defined in a separate file or files. This attribute and the <style> element have mainly the purpose of allowing for quick styling, for example for testing purposes. */
  style?: object;

  /** Assigns a slot in a shadow DOM shadow tree to an element: An element with a slot attribute is assigned to the slot created by the `<slot>` element whose [name](https://developer.mozilla.org/docs/Web/HTML/Element/slot#attr-name) attribute's value matches that slot attribute's value. */
  slot?: string;

  /** undefined */
  hasseeked?: boolean;

  /** undefined */
  onHandleplay?: (event: CustomEvent) => void;

  /** undefined */
  onHandlepause?: (event: CustomEvent) => void;

  /** undefined */
  onHandleseek?: (event: CustomEvent) => void;

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
      VideoComponentProps {}
}

/**
 *
 *
 *
 *
 * **Events**
 * - **onHandleplay** - undefined
 * - **onHandlepause** - undefined
 * - **onHandleseek** - undefined
 * - **onClick** - A pointing device button has been pressed and released on an element.
 *
 *
 */
export declare function VideoComponent({
  children,
  autoplay,
  controls,
  fluid,
  responsive,
  muted,
  loop,
  src,
  preload,
  playbackrates,
  poster,
  videostyle,
  captions,
  seekto,
  customplayevent,
  custompauseevent,
  customseekevent,
  id,
  className,
  style,
  slot,
  hasSeeked,
  onHandleplay,
  onHandlepause,
  onHandleseek,
  onClick,
}: VideoComponentProps): JSX.Element;
