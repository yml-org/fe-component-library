export type ListType = 'Ordered' | 'Unordered';

export type SlotPosition = 'Start' | 'End';

export type BorderPosition = 'All' | 'Top' | 'Left' | 'Bottom' | 'Right';

export type BorderStyle =
  | 'solid'
  | 'dashed'
  | 'dotted'
  | 'double'
  | 'hidden'
  | 'none';

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
  overrideDefaultListStyles?: boolean;
  showBorder?: boolean;
  borderPosition?: BorderPosition;
  borderStyle?: BorderStyle;
};
