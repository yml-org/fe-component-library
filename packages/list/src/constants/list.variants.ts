import { ListItemType, ListVariant } from '../types/list';
import { BorderPositions, BorderStyles, ListTypes } from './list';

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
  },
  {
    id: 4,
    listLabel: 'Technical Support',
  },
  {
    id: 5,
    listLabel: 'Logout',
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
