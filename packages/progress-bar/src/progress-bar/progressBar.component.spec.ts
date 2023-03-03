import { LitElement } from 'lit-element';

describe('progress-bar-component', () => {
  const PROGRESS_BAR_COMPONENT = 'progress-bar-component';
  let progressBarEle: LitElement;

  const getShadowRoot = (tagName: string): ShadowRoot =>
    document.body.getElementsByTagName(tagName)[0].shadowRoot;

  beforeEach(() => {
    progressBarEle = window.document.createElement(
      PROGRESS_BAR_COMPONENT
    ) as LitElement;
    document.body.appendChild(progressBarEle);
  });

  afterEach(() => {
    document.body.getElementsByTagName(PROGRESS_BAR_COMPONENT)[0].remove();
  });

  it('matches component snapshot', async () => {
    expect(
      document.body.getElementsByTagName(PROGRESS_BAR_COMPONENT)[0]
    ).toMatchSnapshot();
  });

  it('renders with default values', () => {
    const progressBar = getShadowRoot(PROGRESS_BAR_COMPONENT).querySelector(
      '[part="webcl-progress-bar"]'
    );
    expect(progressBar).toBeDefined();
    expect(progressBar.getAttribute('aria-valuemin')).toEqual('0');
    expect(progressBar.getAttribute('aria-valuemax')).toEqual('100');
  });

  it('renders with custom values', async () => {
    progressBarEle['percent'] = 50;
    progressBarEle['max'] = 200;
    await progressBarEle.updateComplete;
    const progressBar = getShadowRoot(PROGRESS_BAR_COMPONENT).querySelector(
      '[part="webcl-progress-bar"]'
    );
    expect(progressBar.getAttribute('aria-valuemin')).toEqual('0');
    expect(progressBar.getAttribute('aria-valuemax')).toEqual('200');
    expect(progressBar.getAttribute('aria-valuenow')).toEqual('50');
  });

  it('updates the progress bar on property change', async () => {
    const progressBar = getShadowRoot(PROGRESS_BAR_COMPONENT).querySelector(
      '[part="webcl-progress-bar"]'
    );
    progressBarEle['percent'] = 75;
    await progressBarEle.updateComplete;
    expect(progressBar.getAttribute('aria-valuenow')).toEqual('75');
  });
});
