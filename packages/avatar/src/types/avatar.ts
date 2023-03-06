export type AvatarVariant = {
  isRounded?: boolean;
  width?: number;
  height?: number;
  usePercentage?: boolean;
  slotName?: string;
  onAvatarClick?: () => void;
  showDefaultIcon?: boolean;
  defaultImage?: string;
};
