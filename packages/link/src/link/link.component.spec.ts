import { LitElement } from 'lit-element';
import {
  linkConfig,
  linkConfigTypeButton,
  linkConfigSlot,
} from '../constants/link.variants';

describe('link-component', () => {
  const LINK_COMPONENT = 'link-component';
  let linkElement: LitElement;

  const getShadowRoot = (tagName: string): ShadowRoot =>
    document.body.getElementsByTagName(tagName)[0].shadowRoot;

  beforeEach(() => {
    linkElement = window.document.createElement(LINK_COMPONENT) as LitElement;
    document.body.appendChild(linkElement);
  });

  afterEach(() => {
    document.body.getElementsByTagName(LINK_COMPONENT)[0].remove();
  });

  it('matches component snapshot', async () => {
    expect(
      document.body.getElementsByTagName(LINK_COMPONENT)[0]
    ).toMatchSnapshot();
  });

  it('renders the component with default type', async () => {
    window.document.body.appendChild(linkElement);
    await linkElement.updateComplete;
    const elem = getShadowRoot(LINK_COMPONENT).querySelector('a');
    expect(elem.classList.contains('text-blue-600')).toBe(true);
  });

  it('renders the component with button type', async () => {
    linkElement.setAttribute('type', linkConfigTypeButton.type);
    window.document.body.appendChild(linkElement);
    await linkElement.updateComplete;
    const elem = getShadowRoot(LINK_COMPONENT).querySelector('a');
    expect(elem.classList.contains('text-white')).toBe(true);
  });

  it('sets the href property correctly', async () => {
    linkElement.setAttribute('href', linkConfig.href);
    window.document.body.appendChild(linkElement);
    await linkElement.updateComplete;
    const elem = getShadowRoot(LINK_COMPONENT).querySelector('a');
    expect(elem.getAttribute('href')).toBe(linkConfig.href);
  });

  it('sets the target property correctly', async () => {
    linkElement.setAttribute('target', linkConfig.target);
    window.document.body.appendChild(linkElement);
    await linkElement.updateComplete;
    const elem = getShadowRoot(LINK_COMPONENT).querySelector('a');
    expect(elem.getAttribute('target')).toBe(linkConfig.target);
  });

  it('renders the component passed in slot', async () => {
    linkElement.setAttribute('slotName', linkConfigSlot?.slotName);
    window.document.body.appendChild(linkElement);
    document.querySelector('link-component').innerHTML =
      '<p slot="bell" class="slot-test">Test</p>';
    await linkElement.updateComplete;
    const elem = document.querySelector('link-component').querySelector('p');
    expect(elem.classList.contains('slot-test')).toBe(true);
  });
});
