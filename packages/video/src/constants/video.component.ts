export interface VideoStyle {
  width?: string;
  height?: string;
  aspectRatio?: string;
}

export const AspectRatioDefault = '16:9';

export interface Captions {
  srcTrack: string;
  kind: string;
  srcLang: string;
  label: string;
}

export interface Video {
  src: string;
  preload?: string;
  autoplay?: boolean | string;
  controls?: boolean;
  fluid?: boolean;
  responsive?: boolean;
  muted?: boolean;
  loop?: boolean;
  playbackRates?: Array<number>;
  poster?: string;
  videoStyle?: VideoStyle | null;
  captions?: Captions[];
  seekTo?: string;
  customPlayEvent?: string;
  customPauseEvent?: string;
  customSeekEvent?: string;
}
