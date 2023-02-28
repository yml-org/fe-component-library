import { LitElement } from 'lit-element';

describe('card-component', () => {
  const CARD_COMPONENT = 'card-component';
  let cardElement: LitElement;

  const getShadowRoot = (tagName: string): ShadowRoot =>
    document.body.getElementsByTagName(tagName)[0].shadowRoot;

  beforeEach(() => {
    cardElement = window.document.createElement(CARD_COMPONENT) as LitElement;
    document.body.appendChild(cardElement);
  });

  afterEach(() => {
    document.body.getElementsByTagName(CARD_COMPONENT)[0].remove();
  });

  it('matches component snapshot', async () => {
    expect(
      document.body.getElementsByTagName(CARD_COMPONENT)[0]
    ).toMatchSnapshot();
  });

  it('renders the card with rounded border', async () => {
    cardElement['hasRoundedBorder'] = true;
    await cardElement.updateComplete;
    const cardComponentClassList =
      getShadowRoot(CARD_COMPONENT).querySelector('div').classList;
    expect(cardComponentClassList).toContain('rounded-lg');
  });

  it('renders the card with custom width', async () => {
    const CUSTOM_WIDTH = 200;
    cardElement['cardWidth'] = CUSTOM_WIDTH;
    await cardElement.updateComplete;
    const cardComponentStyle =
      getShadowRoot(CARD_COMPONENT).querySelector('div').style;
    expect(cardComponentStyle?.width).toBe(`${CUSTOM_WIDTH}px`);
  });

  it('renders the card with custom height', async () => {
    const CUSTOM_HEIGHT = 200;
    cardElement['cardHeight'] = CUSTOM_HEIGHT;
    await cardElement.updateComplete;
    const cardComponentStyle =
      getShadowRoot(CARD_COMPONENT).querySelector('div').style;
    expect(cardComponentStyle?.minHeight).toBe(`${CUSTOM_HEIGHT}px`);
  });

  it('renders the component passed in slot', async () => {
    cardElement['customSlotName'] = 'card-slot';
    cardElement['showCustomSlot'] = true;
    window.document.body.appendChild(cardElement);
    document.querySelector('card-component').innerHTML =
      '<div slot="card-slot" class="slot-test">Test</div>';
    await cardElement.updateComplete;
    const elemClassList = document
      .querySelector('card-component')
      .querySelector('div').classList;
    expect(elemClassList).toContain('slot-test');
  });

  it('renders content in row if isHorizontal flag is set to true', async () => {
    cardElement['isHorizontal'] = true;
    await cardElement.updateComplete;
    const cardComponentClassList =
      getShadowRoot(CARD_COMPONENT).querySelector('div').classList;
    expect(cardComponentClassList).toContain('flex-row');
  });
});
