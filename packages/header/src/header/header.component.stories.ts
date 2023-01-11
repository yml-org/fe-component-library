import { msg, str } from '@lit/localize';
import { html } from 'lit-html';
import './header.component';

export default {
  title: 'Header',
};

//👇 We create a “template” of how args map to rendering
const Template = ({ navOptions }) =>
  html` <header-component .navOptions=${navOptions}>
    <div slot="slot-div" style="display:flex;flex-direction:row">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="white"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        aria-hidden="true"
        style="width:26px;height:26px;margin-top:3px;margin-right:5px"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
        />
      </svg>
      <img
        class="h-8 w-8 rounded-full"
        src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
        alt=""
      />
    </div>
    ;

    <svg slot="open" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path
        d="M61.1 224C45 224 32 211 32 194.9c0-1.9 .2-3.7 .6-5.6C37.9 168.3 78.8 32 256 32s218.1 136.3 223.4 157.3c.5 1.9 .6 3.7 .6 5.6c0 16.1-13 29.1-29.1 29.1H61.1zM144 128c0-8.8-7.2-16-16-16s-16 7.2-16 16s7.2 16 16 16s16-7.2 16-16zm240 16c8.8 0 16-7.2 16-16s-7.2-16-16-16s-16 7.2-16 16s7.2 16 16 16zM272 96c0-8.8-7.2-16-16-16s-16 7.2-16 16s7.2 16 16 16s16-7.2 16-16zM16 304c0-26.5 21.5-48 48-48H448c26.5 0 48 21.5 48 48s-21.5 48-48 48H64c-26.5 0-48-21.5-48-48zm16 96c0-8.8 7.2-16 16-16H464c8.8 0 16 7.2 16 16v16c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V400z"
      />
    </svg>

    <svg slot="close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path
        d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
      />
    </svg>
  </header-component>`;

//👇 Each story then reuses that template
export const Light = Template.bind({});

Light.args = {
  navOptions: {
    mode: 'light',
    logo: 'https://ymedialabs.atlassian.net/s/1jmxwi/b/8/d35727372e299c952e88a10ef82bbaf6/_/jira-logo-scaled.png',
    logoAltText: 'Logo',
    headerText: 'YML',
    openMenuIcon: {
      slotName: 'open',
    },
    closeMenuIcon: {
      slotName: 'close',
    },
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
    topRightSlot: {
      slotName: 'slot-div',
    },
  },
};
export const Dark = Template.bind({});

Dark.args = {
  navOptions: {
    mode: 'dark',
    logo: 'https://ymedialabs.atlassian.net/s/1jmxwi/b/8/d35727372e299c952e88a10ef82bbaf6/_/jira-logo-scaled.png',
    logoAltText: 'Logo',
    headerText: 'YML',
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
    topRightSlot: {
      slotName: 'slot-div',
    },
  },
};
