import { ListItemType, ListVariant } from '../types/list';
import { ListTypes } from './list';

const listItemsMock: ListItemType[] = [
  {
    id: 1,
    listLabel: 'YML',
  },
  {
    id: 2,
    listLabel: 'Component Library',
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

export { orderedListVariant, unOrderedListVariant };
