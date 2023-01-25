import { LitElement } from 'lit-element';

describe('button-component', () => {
  const BUTTON_COMPONENT = 'button-component';
  let buttonElement: LitElement;

  const getShadowRoot = (tagName: string): ShadowRoot =>
    document.body.getElementsByTagName(tagName)[0].shadowRoot;

  beforeEach(() => {
    buttonElement = window.document.createElement(
      BUTTON_COMPONENT
    ) as LitElement;
    document.body.appendChild(buttonElement);
  });

  afterEach(() => {
    document.body.getElementsByTagName(BUTTON_COMPONENT)[0].remove();
  });

  it('matches component snapshot', async () => {
    expect(
      document.body.getElementsByTagName(BUTTON_COMPONENT)[0]
    ).toMatchSnapshot();
  });

  it('sets button type', async () => {
    window.document.body.appendChild(buttonElement);
    await buttonElement.updateComplete;
    const buttonElementType = getShadowRoot(BUTTON_COMPONENT).querySelector('button').type;
      expect(buttonElementType).toBe('button');
  });

  it('sets button text', async () => {
    buttonElement['text']="YML";
    window.document.body.appendChild(buttonElement);
    await buttonElement.updateComplete;
    const buttonElementText = getShadowRoot(BUTTON_COMPONENT).querySelector('button').textContent;
      expect(buttonElementText).toContain( "YML");
  });

  it('sets button variant as contained', async () => {
    const buttonEle = getShadowRoot(BUTTON_COMPONENT).querySelector('button'); 
    expect(buttonEle.classList.contains('focus:bg-blue-700')).toBe(true);
  });

  it('sets button color as primary', async () => {
    const buttonEle = getShadowRoot(BUTTON_COMPONENT).querySelector('button'); 
     expect(buttonEle.classList.contains('bg-blue-600')).toBe(true);
  });

});

