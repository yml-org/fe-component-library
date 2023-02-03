import { borderType, objectFitType } from "../types/image.type";

export interface Border {
    width?: string;
    type?: borderType;
    color?: string;
  }
  
export interface Size {
    width?: string;
    height?: string;
    maxHeight?: string;
    minHeight?: string;
    maxWidth?: string;
    minWidth?: string;
    border?: Border;
    rounded?: boolean;
    objectFit?: objectFitType;
  }