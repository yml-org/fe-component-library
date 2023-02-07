import { LitElement } from 'lit-element';

describe('video-component', () => {
  const VIDEO_COMPONENT = 'video-component';
  let videoElement: LitElement;

  const getShadowRoot = (tagName: string): ShadowRoot =>
    document.body.getElementsByTagName(tagName)[0].shadowRoot;

  beforeEach(() => {
    videoElement = window.document.createElement(VIDEO_COMPONENT) as LitElement;
    document.body.appendChild(videoElement);
  });

  afterEach(() => {
    document.body.getElementsByTagName(VIDEO_COMPONENT)[0].remove();
  });

  it('instantiate video-js', async () => {
    const video = getShadowRoot(VIDEO_COMPONENT).querySelector('div');
    expect(video.classList.contains('video-js')).toBe(true);
  });
});
