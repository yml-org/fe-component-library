import { Nav } from '../types/header.component';

const defaultNavConfig: Nav = {
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

const withMenuLinks: Nav = {
  ...defaultNavConfig,
  menuLinks: [
    {
      label: 'Home',
      type: 'link',
      url: 'home',
    },
    {
      label: 'Company',
      type: 'link',
      url: 'company',
    },
    {
      label: 'Team',
      type: 'link',
      url: 'team',
    },
    {
      label: 'Map',
      type: 'button',
      eventName: 'map-click',
    },
  ],
};

const lightModeNavConfig: Nav = {
  ...withMenuLinks,
  mode: 'light',
};

const withSlots: Nav = {
  ...withMenuLinks,
  topRightSlot: {
    slotName: 'slot-div',
  },
  openMenuIcon: {
    slotName: 'open',
  },
  closeMenuIcon: {
    slotName: 'close',
  },
};

export { defaultNavConfig, withMenuLinks, lightModeNavConfig, withSlots };
