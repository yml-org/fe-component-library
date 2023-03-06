export type ListType = 'Ordered' | 'Unordered';

export type BorderPosition = 'All' | 'Top' | 'Left' | 'Bottom' | 'Right';

export type BorderStyle =
  | 'solid'
  | 'dashed'
  | 'dotted'
  | 'double'
  | 'hidden'
  | 'none';

export type Slot = {
  slotName?: string;
  hasSlot?: boolean;
};

export type ListItemType = {
  id?: string | number;
  listLabel?: string;
  isAnchor?: boolean;
  isButton?: boolean;
  href?: string;
  rightSlot?: Slot;
  leftSlot?: Slot;
  btnClickHandler?: (id: string | number, listLabel: string) => void;
  listItemPartName?: string;
  contentPartName?: string;
  listLabelPartName?: string;
};

export type ListVariant = {
  listType?: ListType;
  listItems: ListItemType[];
  overrideDefaultListStyles?: boolean;
  showBorder?: boolean;
  borderPosition?: BorderPosition;
  borderStyle?: BorderStyle;
  containerPartName?: string;
  listPartName?: string;
};
