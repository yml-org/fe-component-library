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
