import { HeaderComponent } from './header.component';

const navOptions = {
  mode: 'dark',
  logo: 'https://ymedialabs.atlassian.net/s/1jmxwi/b/8/d35727372e299c952e88a10ef82bbaf6/_/jira-logo-scaled.png',
  headerText: 'YML',
  openMenuIcon: {
    slotName: '',
  },
  closeMenuIcon: {
    slotName: '',
  },
  menuLinks: [],
  isMenuOpen: false,
  topRightSlot: {
    slotName: 'bell',
  },
};

describe('ymlwebcl-header', () => {
  const HEADER_COMPONENT = 'ymlwebcl-header';
  let headerElement: HeaderComponent;

  const getShadowRoot = (tagName: string): ShadowRoot | null =>
    document.body.getElementsByTagName(tagName)[0].shadowRoot;

  beforeEach(() => {
    headerElement = window.document.createElement(
      HEADER_COMPONENT
    ) as HeaderComponent;
    document.body.appendChild(headerElement);
  });

  afterEach(() => {
    document.body.getElementsByTagName(HEADER_COMPONENT)[0].remove();
  });

  it('matches component snapshot', async () => {
    expect(
      document.body.getElementsByTagName(HEADER_COMPONENT)[0]
    ).toMatchSnapshot();
  });

  it('sets the openMenu to false', async () => {
    headerElement.setAttribute('openMenu', 'false');
    window.document.body.appendChild(headerElement);
    await headerElement.updateComplete;
    const renderedComponent = getShadowRoot(HEADER_COMPONENT)?.innerHTML;
    expect(renderedComponent.indexOf('false')).not.toBe(-1);
  });

  it('sets the openMenu to true', async () => {
    headerElement.setAttribute('openMenu', 'true');
    window.document.body.appendChild(headerElement);
    await headerElement.updateComplete;
    const renderedComponent = getShadowRoot(HEADER_COMPONENT)?.innerHTML;
    expect(renderedComponent.indexOf('true')).not.toBe(-1);
  });

  it('sets the default header hoverTextColor correctly', async () => {
    const headerDivClassList =
      document.body.getElementsByClassName('hover:text-white')[0];
    expect(headerDivClassList).not.toBe(-1);
  });

  it('sets the default header headerTextColor correctly', async () => {
    window.document.body.appendChild(headerElement);
    await headerElement.updateComplete;
    const elemList =
      getShadowRoot(HEADER_COMPONENT).querySelectorAll('.text-white');
    expect(elemList).toHaveLength(2);
  });

  it('sets the  header text correctly', async () => {
    headerElement['navOptions'] = navOptions;
    window.document.body.appendChild(headerElement);
    await headerElement.updateComplete;
    const headingElementText =
      getShadowRoot(HEADER_COMPONENT).querySelector('h2').textContent;
    expect(headingElementText).toBe('YML');
  });

  it('renders the component in mode passed by user', async () => {
    headerElement['navOptions'] = { ...navOptions, mode: 'light' };
    window.document.body.appendChild(headerElement);
    await headerElement.updateComplete;
    const elem = getShadowRoot(HEADER_COMPONENT).querySelector('nav');
    expect(elem.classList.contains('bg-gray-200')).toBe(true);
  });

  it('renders the component passed in slot', async () => {
    headerElement['navOptions'] = navOptions;
    window.document.body.appendChild(headerElement);
    document.querySelector('header-component').innerHTML =
      '<div slot="bell" class="slot-test">Test</div>';
    await headerElement.updateComplete;
    const elem = document
      .querySelector('header-component')
      .querySelector('div');
    expect(elem.classList.contains('slot-test')).toBe(true);
  });

  it('triggers the custom event passed', async () => {
    const func = jest.fn();
    headerElement['navOptions'] = {
      ...navOptions,
      menuLinks: [
        {
          type: 'button',
          label: 'Test',
          eventName: 'my-custom-event',
        },
      ],
    };
    window.document.body.appendChild(headerElement);
    await headerElement.updateComplete;
    document
      .querySelector('header-component')
      .addEventListener('my-custom-event', func);
    const customElem = getShadowRoot(HEADER_COMPONENT);
    const btnElem = customElem.querySelectorAll('button');
    btnElem.forEach((elem) => {
      if (elem.classList.contains('hover:text-white')) {
        elem?.click();
      }
    });
    expect(func.mock.calls).toHaveLength(1);
  });
});
