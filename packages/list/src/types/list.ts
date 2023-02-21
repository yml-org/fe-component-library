export type ListType = 'Ordered' | 'Unordered';

export type SlotPosition = 'Start' | 'End';

export type ListItemType = {
  id?: string | number;
  listLabel?: string;
  isAnchor?: boolean;
  isButton?: boolean;
  href?: string;
  hasSlot?: boolean;
  slotName?: string;
  slotPosition?: SlotPosition;
};

export type ListVariant = {
  listType?: ListType;
  listItems: ListItemType[];
};
