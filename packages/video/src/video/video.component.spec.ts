import { VideoComponent } from './video.component';

describe('ymlwebcl-video', () => {
  const VIDEO_COMPONENT = 'ymlwebcl-video';
  let videoElement: VideoComponent;

  const getShadowRoot = (tagName: string): ShadowRoot | null =>
    document.body.getElementsByTagName(tagName)[0].shadowRoot;

  beforeEach(() => {
    videoElement = window.document.createElement(
      VIDEO_COMPONENT
    ) as VideoComponent;
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
