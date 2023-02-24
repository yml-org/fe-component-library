export type CardDimensionUnit =
  | 'px'
  | '%'
  | 'em'
  | 'rem'
  | 'pt'
  | 'cm'
  | 'in'
  | 'mm'
  | 'pc'
  | 'ex'
  | 'ch'
  | 'vh'
  | 'vw';

export type CardVariant = {
  hasRoundedBorder?: boolean;
  customSlotName?: string;
  showCustomSlot?: boolean;
  cardHeight?: number;
  cardWidth?: number;
  cardDimensionUnit?: CardDimensionUnit;
  isHorizontal?: boolean;
};
