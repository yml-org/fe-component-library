import { TextFieldComponent } from './textField.component';

describe('ymlwebcl-textfield', () => {
  const TEXTFIELD_COMPONENT = 'ymlwebcl-textfield';
  let textFieldElement: TextFieldComponent;

  const getShadowRoot = (tagName: string): ShadowRoot | null =>
    document.body.getElementsByTagName(tagName)[0].shadowRoot;

  beforeEach(() => {
    textFieldElement = window.document.createElement(
      TEXTFIELD_COMPONENT
    ) as TextFieldComponent;
    document.body.appendChild(textFieldElement);
  });

  afterEach(() => {
    document.body.getElementsByTagName(TEXTFIELD_COMPONENT)[0].remove();
  });

  it('matches component snapshot', async () => {
    expect(
      document.body.getElementsByTagName(TEXTFIELD_COMPONENT)[0]
    ).toMatchSnapshot();
  });

  it('matches the label passed', async () => {
    const LABEL = 'Label';
    textFieldElement['label'] = LABEL;
    await textFieldElement.updateComplete;
    const textEle =
      getShadowRoot(TEXTFIELD_COMPONENT).querySelector('label').innerText;
    console.log(textEle);
    expect(textEle).toEqual(LABEL);
  });

  it('renders disabled text field', async () => {
    textFieldElement['disabled'] = true;
    await textFieldElement.updateComplete;
    const isDisabled =
      getShadowRoot(TEXTFIELD_COMPONENT).querySelector('input').disabled;
    expect(isDisabled).toBeTruthy();
  });

  it('focus on the text field if autoFocus is true', async () => {
    textFieldElement['autofocus'] = true;
    await textFieldElement.updateComplete;
    const isAutoFocus =
      getShadowRoot(TEXTFIELD_COMPONENT).querySelector('input').autofocus;
    expect(isAutoFocus).toBeTruthy();
  });

  it('renders readonly text field', async () => {
    textFieldElement['readonly'] = true;
    await textFieldElement.updateComplete;
    const isReadOnly =
      getShadowRoot(TEXTFIELD_COMPONENT).querySelector('input').readOnly;
    expect(isReadOnly).toBeTruthy();
  });

  it('has error if error prop is passed', async () => {
    textFieldElement['error'] = true;
    await textFieldElement.updateComplete;
    const textFieldComponentClassList =
      getShadowRoot(TEXTFIELD_COMPONENT).querySelector('div').classList;
    expect(textFieldComponentClassList).toContain('text-field-wrapper-error');
  });

  it('renders a required text field', async () => {
    textFieldElement['required'] = true;
    await textFieldElement.updateComplete;
    const isRequired =
      getShadowRoot(TEXTFIELD_COMPONENT).querySelector('input').required;
    expect(isRequired).toBeTruthy();
  });
});
