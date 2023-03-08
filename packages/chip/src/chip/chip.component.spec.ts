import { withTextProp, withSlot } from '../constants/chip.variants';
import { ChipComponent } from './chip.component';

describe('ymlwebcl-chip', () => {
  const CHIP_COMPONENT = 'ymlwebcl-chip';
  let chipElement: ChipComponent;

  const getShadowRoot = (tagName: string): ShadowRoot | null =>
    document.body.getElementsByTagName(tagName)[0].shadowRoot;

  beforeEach(() => {
    chipElement = window?.document?.createElement(
      CHIP_COMPONENT
    ) as ChipComponent;
    document.body.appendChild(chipElement);
  });

  afterEach(() => {
    document.body.getElementsByTagName(CHIP_COMPONENT)[0]?.remove();
  });

  it('matches component snapshot', async () => {
    expect(
      document.body.getElementsByTagName(CHIP_COMPONENT)[0]
    ).toMatchSnapshot();
  });

  it('sets the text property correctly', async () => {
    chipElement['text'] = withTextProp.text;
    await chipElement.updateComplete;
    const elem = getShadowRoot(CHIP_COMPONENT)?.querySelector('div')?.innerText;
    expect(elem).toBe(withTextProp.text);
  });

  it('sets the chipPartAttribute property correctly', async () => {
    chipElement['chipPartAttribute'] = withSlot.chipPartAttribute;
    await chipElement.updateComplete;
    const elem = getShadowRoot(CHIP_COMPONENT)?.querySelector('div');
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
