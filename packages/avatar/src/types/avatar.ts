export type AvatarVariant = {
  isRounded?: boolean;
  width?: number;
  height?: number;
  usePercentage?: boolean;
  hasBorder?: boolean;
  borderColor?: string;
  slotName?: string;
  onAvatarClick?: () => void;
  hasShadow?: boolean;
  showDefaultIcon?: boolean;
  defaultImage?: string;
  defaultBgColor?: string;
};
