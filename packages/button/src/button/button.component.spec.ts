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
  

  it('sets button color as secondary', async () => {
    buttonElement['color']="secondary";
    window.document.body.appendChild(buttonElement);
    await buttonElement.updateComplete;
    const buttonEle = getShadowRoot(BUTTON_COMPONENT).querySelector('button'); 
    expect(buttonEle.classList.contains('bg-purple-600')).toBe(true);
  });

  it('sets button color as success', async () => {
    buttonElement['color']="success";
    window.document.body.appendChild(buttonElement);
    await buttonElement.updateComplete;
    const buttonEle = getShadowRoot(BUTTON_COMPONENT).querySelector('button'); 
    expect(buttonEle.classList.contains('bg-green-500')).toBe(true);
  });

  it('sets button color as danger', async () => {
    buttonElement['color']="danger";
    window.document.body.appendChild(buttonElement);
    await buttonElement.updateComplete;
    const buttonEle = getShadowRoot(BUTTON_COMPONENT).querySelector('button'); 
    expect(buttonEle.classList.contains('bg-red-600')).toBe(true);
  });

  it('sets button color as warning', async () => {
    buttonElement['color']="warning";
    window.document.body.appendChild(buttonElement);
    await buttonElement.updateComplete;
    const buttonEle = getShadowRoot(BUTTON_COMPONENT).querySelector('button'); 
    expect(buttonEle.classList.contains('bg-yellow-500')).toBe(true);
  });

  it('sets button color as light', async () => {
    buttonElement['color']="light";
    window.document.body.appendChild(buttonElement);
    await buttonElement.updateComplete;
    const buttonEle = getShadowRoot(BUTTON_COMPONENT).querySelector('button'); 
    expect(buttonEle.classList.contains('bg-gray-200')).toBe(true);
  });

  it('sets button color as dark', async () => {
    buttonElement['color']="dark";
    window.document.body.appendChild(buttonElement);
    await buttonElement.updateComplete;
    const buttonEle = getShadowRoot(BUTTON_COMPONENT).querySelector('button'); 
    expect(buttonEle.classList.contains('bg-gray-800')).toBe(true);
  });

  it('sets button variant as outlined', async () => {
    buttonElement['variant']="outlined";
    window.document.body.appendChild(buttonElement);
    await buttonElement.updateComplete;
    const buttonEle = getShadowRoot(BUTTON_COMPONENT).querySelector('button'); 
    expect(buttonEle.classList.contains('border-2')).toBe(true);
  });

  it('sets button variant as link', async () => {
    buttonElement['variant']="link";
    window.document.body.appendChild(buttonElement);
    await buttonElement.updateComplete;
    const buttonEle = getShadowRoot(BUTTON_COMPONENT).querySelector('button'); 
    expect(buttonEle.classList.contains('bg-transparent')).toBe(true);
  });

  it('sets the isDisabled property correctly', async () => {
    buttonElement['isDisabled']= true;
    window.document.body.appendChild(buttonElement);
    await buttonElement.updateComplete;
    const buttonEle = getShadowRoot(BUTTON_COMPONENT).querySelector('button'); 
    expect(buttonEle.classList.contains('pointer-events-none')).toBe(true);
  });

  it('sets the isDisabled property to false by default', async () => {
    const buttonEle = getShadowRoot(BUTTON_COMPONENT).querySelector('button'); 
    expect(buttonEle.classList.contains('pointer-events-none')).toBe(false);
  });

  it('sets the fullWidth property correctly', async () => {
    buttonElement['fullWidth']= true;
    window.document.body.appendChild(buttonElement);
    await buttonElement.updateComplete;
    const buttonEle = getShadowRoot(BUTTON_COMPONENT).querySelector('button'); 
    expect(buttonEle.classList.contains('w-full')).toBe(true);
  });

  it('sets the fullWidth property to false, by default', async () => {
    const buttonEle = getShadowRoot(BUTTON_COMPONENT).querySelector('button'); 
    expect(buttonEle.classList.contains('w-full')).toBe(false);
  });
  
  it('sets the isRounded property correctly', async () => {
    buttonElement['isRounded']= true;
    window.document.body.appendChild(buttonElement);
    await buttonElement.updateComplete;
    const buttonEle = getShadowRoot(BUTTON_COMPONENT).querySelector('button'); 
    expect(buttonEle.classList.contains('rounded-full')).toBe(true);
  });

  it('renders the component passed in slot', async () => {
    buttonElement['slotName'] = "btn";
    window.document.body.appendChild(buttonElement);
    document.querySelector('button-component').innerHTML =
      '<h2 slot="btn" class="slot-test">Test</h2>';
    await buttonElement.updateComplete;
    const elem = document
      .querySelector('button-component')
      .querySelector('h2');
    expect(elem.classList.contains('slot-test')).toBe(true);
  });
  
  it('sets part property correctly', async () => {
    const elem = getShadowRoot(BUTTON_COMPONENT).querySelector('button');
    expect(elem.part[0]).toBe("custom-button");
  });

  it('sets role property correctly', async () => {
    const elem = getShadowRoot(BUTTON_COMPONENT).querySelector('button');
    expect(elem.getAttribute('role')).toBe("button");
  });

});

