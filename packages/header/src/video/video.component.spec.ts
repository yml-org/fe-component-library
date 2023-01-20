import { LitElement } from 'lit-element';

describe('video-component', () => {
  const VIDEOR_COMPONENT = 'video-component';
  let videoElement: LitElement;

  const getShadowRoot = (tagName: string): ShadowRoot => {
    return document.body.getElementsByTagName(tagName)[0].shadowRoot;
  };

  beforeEach(() => {
    videoElement = window.document.createElement(
      VIDEOR_COMPONENT
    ) as LitElement;
    document.body.appendChild(videoElement);
  });

  afterEach(() => {
    document.body.getElementsByTagName(VIDEOR_COMPONENT)[0].remove();
  });

  it('matches component snapshot', async () => {
    expect(
      document.body.getElementsByTagName(VIDEOR_COMPONENT)[0]
    ).toMatchSnapshot();
  });
});
