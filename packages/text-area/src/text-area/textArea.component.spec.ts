import { TextAreaComponent } from './textArea.component';

describe('ymlwebcl-textarea', () => {
  const TEXTAREA_COMPONENT = 'ymlwebcl-textarea';
  let textAreaElement: TextAreaComponent;

  const getShadowRoot = (tagName: string): ShadowRoot | null =>
    document.body.getElementsByTagName(tagName)[0].shadowRoot;

  beforeEach(() => {
    textAreaElement = window.document.createElement(
      TEXTAREA_COMPONENT
    ) as TextAreaComponent;
    document.body.appendChild(textAreaElement);
  });

  afterEach(() => {
    document.body.getElementsByTagName(TEXTAREA_COMPONENT)[0].remove();
  });

  it('matches component snapshot', async () => {
    expect(
      document.body.getElementsByTagName(TEXTAREA_COMPONENT)[0]
    ).toMatchSnapshot();
  });

  it('matches the rows passed', async () => {
    const CUSTOM_ROWS = 5;
    textAreaElement['textAreaRows'] = CUSTOM_ROWS;
    await textAreaElement.updateComplete;
    const elementRows = getShadowRoot(TEXTAREA_COMPONENT)
      .querySelector('textarea')
      .getAttribute('rows');
    expect(Number(elementRows)).toEqual(CUSTOM_ROWS);
  });

  it('matches the columns passed', async () => {
    const CUSTOM_COLUMNS = 10;
    textAreaElement['textAreaCols'] = CUSTOM_COLUMNS;
    await textAreaElement.updateComplete;
    const elementCols = getShadowRoot(TEXTAREA_COMPONENT)
      .querySelector('textarea')
      .getAttribute('cols');
    expect(Number(elementCols)).toEqual(CUSTOM_COLUMNS);
  });

  it('renders disabled textarea', async () => {
    textAreaElement['isDisabled'] = true;
    await textAreaElement.updateComplete;
    const isDisabled =
      getShadowRoot(TEXTAREA_COMPONENT).querySelector('textarea').disabled;
    expect(isDisabled).toBeTruthy();
  });

  it('focus on the text area if autoFocus is true', async () => {
    textAreaElement['isAutoFocus'] = true;
    await textAreaElement.updateComplete;
    const isAutoFocus =
      getShadowRoot(TEXTAREA_COMPONENT).querySelector('textarea').autofocus;
    expect(isAutoFocus).toBeTruthy();
  });

  it('renders readonly textarea', async () => {
    textAreaElement['isReadOnly'] = true;
    await textAreaElement.updateComplete;
    const isReadOnly =
      getShadowRoot(TEXTAREA_COMPONENT).querySelector('textarea').readOnly;
    expect(isReadOnly).toBeTruthy();
  });

  it('renders a required textarea', async () => {
    textAreaElement['isRequired'] = true;
    await textAreaElement.updateComplete;
    const isRequired =
      getShadowRoot(TEXTAREA_COMPONENT).querySelector('textarea').required;
    expect(isRequired).toBeTruthy();
  });

  it('can not be resized if canResize property is set to false', async () => {
    textAreaElement['canResize'] = false;
    await textAreaElement.updateComplete;
    const textAreaClassList =
      getShadowRoot(TEXTAREA_COMPONENT).querySelector('textarea').classList;
    expect(textAreaClassList).toContain('resize-none');
  });
});
