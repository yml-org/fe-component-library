import { ListTypes } from '../constants/list';
import { LitElement } from 'lit-element';
import { listItemsMock } from '../constants/list.variants';

describe('avatar-component', () => {
  const LIST_COMPONENT = 'list-component';
  let listElement: LitElement;

  const getShadowRoot = (tagName: string): ShadowRoot =>
    document.body.getElementsByTagName(tagName)[0].shadowRoot;

  beforeEach(() => {
    listElement = window.document.createElement(LIST_COMPONENT) as LitElement;
    document.body.appendChild(listElement);
  });

  afterEach(() => {
    document.body.getElementsByTagName(LIST_COMPONENT)[0].remove();
  });

  it('matches component snapshot', async () => {
    expect(
      document.body.getElementsByTagName(LIST_COMPONENT)[0]
    ).toMatchSnapshot();
  });
  it('renders the list tag properly based on the listType property', async () => {
    listElement['listType'] = ListTypes.Unordered;
    await listElement.updateComplete;
    const element = getShadowRoot(LIST_COMPONENT);
    expect(element.querySelectorAll('ul').length).toBeTruthy();
  });
  it('renders the list elements correctly', async () => {
    listElement['listItems'] = listItemsMock;
    await listElement.updateComplete;
    const element = getShadowRoot(LIST_COMPONENT);
    expect(element.querySelectorAll('li').length).toEqual(listItemsMock.length);
  });
  it('renders the button element if isButton is set to true for list item', async () => {
    listElement['listItems'] = listItemsMock;
    await listElement.updateComplete;
    const element = getShadowRoot(LIST_COMPONENT);
    expect(element.querySelectorAll('button').length).toEqual(1);
  });
  it('handles the click event on the button', async () => {
    const mockFn = jest.fn();
    const listItems = [
      ...listItemsMock,
      {
        id: 6,
        listLabel: 'Test',
        isButton: true,
        btnClickHandler: mockFn,
      },
    ];
    listElement['listItems'] = listItems;
    await listElement.updateComplete;
    const btnElement =
      getShadowRoot(LIST_COMPONENT).querySelectorAll('button')[1];
    btnElement?.click();
    expect(mockFn).toBeCalled();
  });
  it('sets the href for the anchor tag', async () => {
    listElement['listItems'] = listItemsMock;
    await listElement.updateComplete;
    const anchorElementHref = getShadowRoot(LIST_COMPONENT)
      .querySelector('a')
      .getAttribute('href');

    expect(anchorElementHref).toBe(
      listItemsMock?.find((item) => item?.isAnchor)?.href
    );
  });
});
