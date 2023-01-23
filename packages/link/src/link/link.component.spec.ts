import { LitElement } from 'lit-element';

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

  
  it('renders the component with type button', async () => {
    document.body.getElementsByTagName(LINK_COMPONENT)[0].remove();
    linkElement = window.document.createElement(LINK_COMPONENT) as LitElement;
    // linkElement['target'] = "_blank";
    linkElement.setAttribute('target', '_blank');

    window.document.body.appendChild(linkElement);
    await linkElement.updateComplete;
    const elem = getShadowRoot(LINK_COMPONENT).querySelector('a');
    console.log(elem.getAttribute('target'))
    // expect(elem.classList.contains(' bg-blue-700')).toBe(true);
  });
});
