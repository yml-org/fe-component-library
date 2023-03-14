import React, { useRef } from "react";
import {
  useAttribute,
  useBooleanAttribute,
  useProperties,
  useEventListener,
} from "./react-utils";
import "../src/index.js";

export function ProgressBarComponent({
  children,
  percent,
  max,
  containerpartattribute,
  progressbarpartattribute,
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
  useAttribute(ref, "percent", percent);
  useAttribute(ref, "max", max);
  useAttribute(ref, "containerPartAttribute", containerpartattribute);
  useAttribute(ref, "progressBarPartAttribute", progressbarpartattribute);
  useAttribute(ref, "id", id);
  useAttribute(ref, "class", className);
  useAttribute(ref, "style", style);
  useAttribute(ref, "slot", slot);

  return React.createElement(
    "ymlwebcl-progressbar",
    {
      ref,
      percent,
      max,
      containerPartAttribute: containerpartattribute,
      progressBarPartAttribute: progressbarpartattribute,
      id,
      className,
      style,
      slot,
    },
    children
  );
}
