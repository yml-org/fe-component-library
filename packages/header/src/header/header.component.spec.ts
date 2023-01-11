import { LitElement } from 'lit-element';

describe('header-component', () => {
  const HEADER_COMPONENT = 'header-component';
  let buttonElement: LitElement;

  // TODO: Uncomment when needed to access the shadow root
  // const getShadowRoot = (tagName: string): ShadowRoot => {
  //   return document.body.getElementsByTagName(tagName)[0].shadowRoot;
  // };

  beforeEach(() => {
    buttonElement = window.document.createElement(
      HEADER_COMPONENT
    ) as LitElement;
    document.body.appendChild(buttonElement);
  });

  afterEach(() => {
    document.body.getElementsByTagName(HEADER_COMPONENT)[0].remove();
  });

  it('matches component snapshot', async () => {
    expect(
      document.body.getElementsByTagName(HEADER_COMPONENT)[0]
    ).toMatchSnapshot();
  });
});
