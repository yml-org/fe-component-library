import React, { useRef } from "react";
import {
  useAttribute,
  useBooleanAttribute,
  useProperties,
  useEventListener,
} from "./react-utils";
import "../src/index.js";

export function ListComponent({
  children,
  overridedefaultliststyles,
  showborder,
  listtype,
  listitems,
  borderposition,
  borderstyle,
  containerpartname,
  listpartname,
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
  useBooleanAttribute(
    ref,
    "overrideDefaultListStyles",
    overridedefaultliststyles
  );
  useBooleanAttribute(ref, "showBorder", showborder);

  /** Attributes */
  useAttribute(ref, "listType", listtype);
  useAttribute(ref, "listItems", listitems);
  useAttribute(ref, "borderPosition", borderposition);
  useAttribute(ref, "borderStyle", borderstyle);
  useAttribute(ref, "containerPartName", containerpartname);
  useAttribute(ref, "listPartName", listpartname);
  useAttribute(ref, "id", id);
  useAttribute(ref, "class", className);
  useAttribute(ref, "style", style);
  useAttribute(ref, "slot", slot);

  return React.createElement(
    "ymlwebcl-list",
    {
      ref,
      listType: listtype,
      listItems: listitems,
      borderPosition: borderposition,
      borderStyle: borderstyle,
      containerPartName: containerpartname,
      listPartName: listpartname,
      id,
      className,
      style,
      slot,
    },
    children
  );
}
