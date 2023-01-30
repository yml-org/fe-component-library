import { Size } from "constants/image.component";

export type borderType =  'solid'
| 'dotted'
| 'dashed'
| 'double'
| 'none'
| 'groove'
| 'ridge'
| 'inset'
| 'outset';

export type  objectFitType = 'contain' | 'fill' | 'scale-down' | 'fit' | 'none' | 'cover';

export interface Image {
  altText?: string;
  src: string;
  placeholderImg?: string;
  size?: Size;
}