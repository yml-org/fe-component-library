import { AvatarComponent } from './avatar.component';

describe('ymlwebcl-avatar', () => {
  const AVATAR_COMPONENT = 'ymlwebcl-avatar';
  let avatarElement: AvatarComponent;

  const getShadowRoot = (tagName: string): ShadowRoot | null =>
    document.body.getElementsByTagName(tagName)[0].shadowRoot;

  beforeEach(() => {
    avatarElement = window.document.createElement(
      AVATAR_COMPONENT
    ) as AvatarComponent;
    document.body.appendChild(avatarElement);
  });

  afterEach(() => {
    document.body.getElementsByTagName(AVATAR_COMPONENT)[0].remove();
  });

  it('matches component snapshot', async () => {
    expect(
      document.body.getElementsByTagName(AVATAR_COMPONENT)[0]
    ).toMatchSnapshot();
  });

  it('renders the avatar with rounded border', async () => {
    avatarElement['isRounded'] = true;
    await avatarElement.updateComplete;
    const avatarComponentClassList =
      getShadowRoot(AVATAR_COMPONENT)?.querySelector('div')?.classList;
    expect(avatarComponentClassList).toContain('rounded-full');
  });

  it('renders the avatar with custom width', async () => {
    const CUSTOM_WIDTH = 200;
    avatarElement['width'] = CUSTOM_WIDTH;
    await avatarElement.updateComplete;
    const avatarComponentStyle =
      getShadowRoot(AVATAR_COMPONENT)?.querySelector('div')?.style;
    expect(avatarComponentStyle?.width).toBe(`${CUSTOM_WIDTH}px`);
  });

  it('renders the avatar with custom width in percentage', async () => {
    const CUSTOM_WIDTH = 200;
    avatarElement['usePercentage'] = true;
    avatarElement['width'] = CUSTOM_WIDTH;
    await avatarElement.updateComplete;
    const avatarComponentStyle =
      getShadowRoot(AVATAR_COMPONENT)?.querySelector('div')?.style;
    expect(avatarComponentStyle?.width).toBe(`${CUSTOM_WIDTH}%`);
  });

  it('triggers the click event passed', async () => {
    const clickHandler = jest.fn();
    avatarElement['onAvatarClick'] = clickHandler;
    await avatarElement.updateComplete;
    const avatarComponent =
      getShadowRoot(AVATAR_COMPONENT)?.querySelector('div');
    avatarComponent?.click();
    expect(clickHandler).toBeCalled();
  });

  it('renders the component passed in slot', async () => {
    avatarElement['slotName'] = 'avatar';
    window.document.body.appendChild(avatarElement);
    (document.querySelector('ymlwebcl-avatar') || document.body).innerHTML =
      '<div slot="avatar" class="slot-test">Test</div>';
    await avatarElement.updateComplete;
    const elemClassList = document
      ?.querySelector('ymlwebcl-avatar')
      ?.querySelector('div')?.classList;
    expect(elemClassList).toContain('slot-test');
  });
});
