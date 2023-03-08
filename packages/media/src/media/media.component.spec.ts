import { MediaComponent } from './media.component';
import { mediaProps } from '../constants/media.variants';

describe('ymlwebcl-media', () => {
  const MEDIA_COMPONENT = 'ymlwebcl-media';
  let mediaElement: MediaComponent;

  const getShadowRoot = (tagName: string): ShadowRoot | null =>
    document.body.getElementsByTagName(tagName)[0].shadowRoot;

  beforeEach(() => {
    mediaElement = window.document.createElement(
      MEDIA_COMPONENT
    ) as MediaComponent;
    document.body.appendChild(mediaElement);
  });

  afterEach(() => {
    document.body.getElementsByTagName(MEDIA_COMPONENT)[0].remove();
  });

  it('matches component snapshot', async () => {
    expect(
      document.body.getElementsByTagName(MEDIA_COMPONENT)[0]
    ).toMatchSnapshot();
  });

  it('sets the title property correctly', async () => {
    mediaElement['mediaTitle'] = mediaProps.mediaTitle;
    await mediaElement.updateComplete;
    const elem = getShadowRoot(MEDIA_COMPONENT)
      .querySelector('div')
      .querySelector('div')
      .querySelector('div')
      .querySelector('p').innerText;
    expect(elem).toBe(mediaProps.mediaTitle);
  });

  it('sets the mediaPartAttribute property correctly', async () => {
    mediaElement['mediaPartAttribute'] = mediaProps.mediaPartAttribute;
    await mediaElement.updateComplete;
    const elem = getShadowRoot(MEDIA_COMPONENT).querySelector('div');
    expect(elem.getAttribute('part')).toBe(mediaProps.mediaPartAttribute);
  });

  it('sets the textPartAttribute property correctly', async () => {
    mediaElement['textPartAttribute'] = mediaProps.textPartAttribute;
    await mediaElement.updateComplete;
    const elem = getShadowRoot(MEDIA_COMPONENT)
      .querySelector('div')
      .querySelector('div');
    expect(elem.getAttribute('part')).toBe(mediaProps.textPartAttribute);
  });

  it('sets the titlePartAttribute property correctly', async () => {
    mediaElement['titlePartAttribute'] = mediaProps.titlePartAttribute;
    await mediaElement.updateComplete;
    const elem = getShadowRoot(MEDIA_COMPONENT)
      .querySelector('div')
      .querySelector('div')
      .querySelector('div');
    expect(elem.getAttribute('part')).toBe(mediaProps.titlePartAttribute);
  });

  it('renders the slot elements correctly', async () => {
    getShadowRoot(MEDIA_COMPONENT)
      .querySelector('div')
      .querySelector('slot').innerHTML =
      '<h2 class="slot-test">The Media Component</h2>';
    await mediaElement.updateComplete;
    const elem = getShadowRoot(MEDIA_COMPONENT)
      .querySelector('div')
      .querySelector('slot')
      .querySelector('h2');
    expect(elem.classList.contains('slot-test')).toBe(true);
  });
});
