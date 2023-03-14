export type VariantType = 'contained' | 'outlined' | 'link';

export type colorType =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'light'
  | 'dark';

export interface Button {
  text?: string;
  variant?: VariantType;
  color?: colorType;
  slotName?: string;
  isDisabled?: boolean;
  fullWidth?: boolean;
  isRounded?: boolean;
  partName?: string;
}
