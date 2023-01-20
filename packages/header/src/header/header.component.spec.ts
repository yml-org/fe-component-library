import { LitElement } from 'lit-element';

describe('header-component', () => {
  const HEADER_COMPONENT = 'header-component';
  let headerElement: LitElement;

  const getShadowRoot = (tagName: string): ShadowRoot => {
    return document.body.getElementsByTagName(tagName)[0].shadowRoot;
  };

  beforeEach(() => {
    headerElement = window.document.createElement(
      HEADER_COMPONENT
    ) as LitElement;
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
    const renderedComponent = getShadowRoot(HEADER_COMPONENT).innerHTML;
    expect(renderedComponent.indexOf('false')).not.toBe(-1);
  });

  it('sets the openMenu to true', async () => {
    headerElement.setAttribute('openMenu', 'true');
    window.document.body.appendChild(headerElement);
    await headerElement.updateComplete;
    const renderedComponent = getShadowRoot(HEADER_COMPONENT).innerHTML;
    expect(renderedComponent.indexOf('true')).not.toBe(-1);
  });

  it('sets the default header hoverTextColor correctly', async () => {
    const headerDivClassList =
      document.body.getElementsByClassName('hover:text-white')[0];
    expect(headerDivClassList).not.toBe(-1);
  });

  // Test Case Failing
  it('sets the default header headerTextColor correctly', async () => {
    const headerDivClassList =
      document.body.getElementsByClassName('text-white');
    console.log(headerDivClassList);
    expect(headerDivClassList).toHaveLength(1);
  });

  it('sets the default header headerTextColor correctly', async () => {
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

    headerElement.setAttribute('navOptions', JSON.stringify(navOptions));
    window.document.body.appendChild(headerElement);
    await headerElement.updateComplete;
    console.log(HEADER_COMPONENT);
    // Fails to change anything in the above consoled HEADER_COMPONENT
  });

});
