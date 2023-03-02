import { LitElement } from 'lit-element';

describe('scroll-component', () => {
  const SCROLL_COMPONENT = 'scroll-component';
  let scrollElement: LitElement;

  const getShadowRoot = (tagName: string): ShadowRoot =>
    document.body.getElementsByTagName(tagName)[0].shadowRoot;

    const dataSlots = [
        {
          dataStart: 1,
          dataEnd: 5,
          slotName: 'slot1',
        },
      ];

 const getSlotElements = () => {
    return getShadowRoot(SCROLL_COMPONENT)
    .querySelector('div')
    .querySelector('section')
    .querySelector('div')
 }

  beforeEach(() => {
    scrollElement = window.document.createElement(
      SCROLL_COMPONENT
    ) as LitElement;
    document.body.appendChild(scrollElement);
  });

  afterEach(() => {
    document.body.getElementsByTagName(SCROLL_COMPONENT)[0].remove();
  });

  it('matches component snapshot', async () => {
    expect(
      document.body.getElementsByTagName(SCROLL_COMPONENT)[0]
    ).toMatchSnapshot();
  });

  it('renders the slot elements', async () => {
    getShadowRoot(SCROLL_COMPONENT).querySelector('div').innerHTML =
      '<h2 class="slot-test">The scroll Component</h2>';
    await scrollElement.updateComplete;
    const elem = getShadowRoot(SCROLL_COMPONENT)
      .querySelector('div')
      .querySelector('h2');
    expect(elem.classList.contains('slot-test')).toBe(true);
  });

  it('sets the slotName property correctly', async () => {
    scrollElement['dataSlot'] = dataSlots;
    await scrollElement.updateComplete;
    const elem = getSlotElements();
    expect(elem.querySelector('slot').getAttribute('name')).toBe(dataSlots[0].slotName);
  });

  
  it('sets the dataStart property correctly', async () => {
    scrollElement['dataSlot'] = dataSlots;
    await scrollElement.updateComplete;
    const elem = getSlotElements();
    expect(elem.getAttribute('data-start')).toBe('1');
  });

  it('sets the dataStart property correctly', async () => {
    scrollElement['dataSlot'] = dataSlots;
    await scrollElement.updateComplete;
    const elem = getSlotElements();
    expect(elem.getAttribute('data-end')).toBe('5');
  });
});
