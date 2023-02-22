import { ListItemType, ListVariant } from '../types/list';
import {
  BorderPositions,
  BorderStyles,
  ListTypes,
  SlotPositions,
} from './list';

const listItemsMock: ListItemType[] = [
  {
    id: 1,
    listLabel: 'Account Details',
  },
  {
    id: 2,
    listLabel: 'Notifications',
  },
  {
    id: 3,
    listLabel: 'About',
    isAnchor: true,
    href: 'http://google.com/',
    hasSlot: true,
    slotName: 'list-slot',
    slotPosition: SlotPositions.End,
  },
  {
    id: 4,
    listLabel: 'Technical Support',
  },
  {
    id: 5,
    listLabel: 'Logout',
    isButton: true,
    btnClickHandler: (id, listLabel) => {
      console.log(id, listLabel);
    },
    hasSlot: true,
    slotName: 'list-slot-1',
    slotPosition: SlotPositions.End,
  },
];

const orderedListVariant: ListVariant = {
  listType: ListTypes.Ordered,
  listItems: listItemsMock,
};

const unOrderedListVariant: ListVariant = {
  listType: ListTypes.Unordered,
  listItems: listItemsMock,
};

const unOrderedListWithBottomBorder: ListVariant = {
  ...unOrderedListVariant,
  showBorder: true,
  borderPosition: BorderPositions.Bottom,
  borderStyle: BorderStyles.Solid,
  overrideDefaultListStyles: true,
};

export {
  orderedListVariant,
  unOrderedListVariant,
  unOrderedListWithBottomBorder,
};
