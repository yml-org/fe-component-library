import React, { useRef } from "react";
import {
  useAttribute,
  useBooleanAttribute,
  useProperties,
  useEventListener,
} from "./react-utils";
import "../src/index.js";

export function VideoComponent({
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
}) {
  const ref = useRef(null);

  /** Event listeners */
  useEventListener(ref, "handlePlay", onHandleplay);
  useEventListener(ref, "handlePause", onHandlepause);
  useEventListener(ref, "handleSeek", onHandleseek);
  useEventListener(ref, "click", onClick);

  /** Boolean attributes */
  useBooleanAttribute(ref, "autoplay", autoplay);
  useBooleanAttribute(ref, "controls", controls);
  useBooleanAttribute(ref, "fluid", fluid);
  useBooleanAttribute(ref, "responsive", responsive);
  useBooleanAttribute(ref, "muted", muted);
  useBooleanAttribute(ref, "loop", loop);

  /** Attributes */
  useAttribute(ref, "src", src);
  useAttribute(ref, "preload", preload);
  useAttribute(ref, "playbackRates", playbackrates);
  useAttribute(ref, "poster", poster);
  useAttribute(ref, "videoStyle", videostyle);
  useAttribute(ref, "captions", captions);
  useAttribute(ref, "seekTo", seekto);
  useAttribute(ref, "customPlayEvent", customplayevent);
  useAttribute(ref, "customPauseEvent", custompauseevent);
  useAttribute(ref, "customSeekEvent", customseekevent);
  useAttribute(ref, "id", id);
  useAttribute(ref, "class", className);
  useAttribute(ref, "style", style);
  useAttribute(ref, "slot", slot);

  /** Properties */
  useProperties(ref, "hasSeeked", hasSeeked);

  return React.createElement(
    "ymlwebcl-video",
    {
      ref,
      src,
      preload,
      playbackRates: playbackrates,
      poster,
      videoStyle: videostyle,
      captions,
      seekTo: seekto,
      customPlayEvent: customplayevent,
      customPauseEvent: custompauseevent,
      customSeekEvent: customseekevent,
      id,
      className,
      style,
      slot,
    },
    children
  );
}
