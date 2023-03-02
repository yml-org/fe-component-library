import { LitElement } from 'lit-element';

describe('text-field', () => {
  const TEXT_FIELD = 'text-field';
  let textFieldElement: LitElement;

  const getShadowRoot = (tagName: string): ShadowRoot =>
    document.body.getElementsByTagName(tagName)[0].shadowRoot;

  beforeEach(() => {
    textFieldElement = window.document.createElement(TEXT_FIELD) as LitElement;
    document.body.appendChild(textFieldElement);
  });

  afterEach(() => {
    document.body.getElementsByTagName(TEXT_FIELD)[0].remove();
  });

  it('matches component snapshot', async () => {
    expect(document.body.getElementsByTagName(TEXT_FIELD)[0]).toMatchSnapshot();
  });

  it('matches the label passed', async () => {
    const LABEL = 'Label';
    textFieldElement['label'] = LABEL;
    await textFieldElement.updateComplete;
    const textEle = getShadowRoot(TEXT_FIELD).querySelector('label').innerText;
    console.log(textEle);
    expect(textEle).toEqual(LABEL);
  });

  it('renders disabled text field', async () => {
    textFieldElement['disabled'] = true;
    await textFieldElement.updateComplete;
    const isDisabled =
      getShadowRoot(TEXT_FIELD).querySelector('input').disabled;
    expect(isDisabled).toBeTruthy();
  });

  it('focus on the text field if autoFocus is true', async () => {
    textFieldElement['autofocus'] = true;
    await textFieldElement.updateComplete;
    const isAutoFocus =
      getShadowRoot(TEXT_FIELD).querySelector('input').autofocus;
    expect(isAutoFocus).toBeTruthy();
  });

  it('renders readonly text field', async () => {
    textFieldElement['readonly'] = true;
    await textFieldElement.updateComplete;
    const isReadOnly =
      getShadowRoot(TEXT_FIELD).querySelector('input').readOnly;
    expect(isReadOnly).toBeTruthy();
  });

  it('has error if error prop is passed', async () => {
    textFieldElement['error'] = true;
    await textFieldElement.updateComplete;
    const textFieldComponentClassList =
      getShadowRoot(TEXT_FIELD).querySelector('div').classList;
    expect(textFieldComponentClassList).toContain('text-field-wrapper-error');
  });

  it('renders a required text field', async () => {
    textFieldElement['required'] = true;
    await textFieldElement.updateComplete;
    const isRequired =
      getShadowRoot(TEXT_FIELD).querySelector('input').required;
    expect(isRequired).toBeTruthy();
  });
});
