import { LitElement } from 'lit-element';
import { withTextProp, withSlot } from '../constants/chip.variants';

describe('chip-component', () => {
  const CHIP_COMPONENT = 'chip-component';
  let chipElement: LitElement;

  const getShadowRoot = (tagName: string): ShadowRoot =>
    document.body.getElementsByTagName(tagName)[0].shadowRoot;

  beforeEach(() => {
    chipElement = window.document.createElement(CHIP_COMPONENT) as LitElement;
    document.body.appendChild(chipElement);
  });

  afterEach(() => {
    document.body.getElementsByTagName(CHIP_COMPONENT)[0].remove();
  });

  it('matches component snapshot', async () => {
    expect(
      document.body.getElementsByTagName(CHIP_COMPONENT)[0]
    ).toMatchSnapshot();
  });

  it('sets the text property correctly', async () => {
    chipElement['text'] = withTextProp.text;
    await chipElement.updateComplete;
    const elem = getShadowRoot(CHIP_COMPONENT).querySelector('div').innerText;
    expect(elem).toBe(withTextProp.text);
  });

  it('sets the chipPartAttribute property correctly', async () => {
    chipElement['chipPartAttribute'] = withSlot.chipPartAttribute;
    await chipElement.updateComplete;
    const elem = getShadowRoot(CHIP_COMPONENT).querySelector('div');
    expect(elem.getAttribute('part')).toBe(withSlot.chipPartAttribute);
  });

  it('renders the slot elements correctly', async () => {
    chipElement['chipPartAttribute'] = withSlot.rightSlotName;
    getShadowRoot(CHIP_COMPONENT)
      .querySelector('div')
      .querySelector('div')
      .querySelector('slot').innerHTML =
      '<h2 class="slot-test">The chip Component</h2>';
    await chipElement.updateComplete;
    const elem = getShadowRoot(CHIP_COMPONENT)
      .querySelector('div')
      .querySelector('div')
      .querySelector('slot')
      .querySelector('h2');
    expect(elem.classList.contains('slot-test')).toBe(true);
  });
});
