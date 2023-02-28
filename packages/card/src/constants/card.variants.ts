import { CardVariant } from '../types/card';

const cardWithRoundedBorder: CardVariant = {
  hasRoundedBorder: true,
};

const cardWithCustomWidthHeight: CardVariant = {
  ...cardWithRoundedBorder,
  cardHeight: 450,
  cardWidth: 300,
};

const cardWithCustomSlot: CardVariant = {
  ...cardWithCustomWidthHeight,
  customSlotName: 'custom-card-slot',
  showCustomSlot: true,
};

export { cardWithRoundedBorder, cardWithCustomWidthHeight, cardWithCustomSlot };
