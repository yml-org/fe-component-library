import { msg, str } from '@lit/localize';
import { html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { TailwindElement } from '../shared/tailwind.element';
import { OpenMenuIcon, CloseMenuIcon } from './headerIcons';
import Style from './header.component.scss?inline';

interface MenuLink {
  label: string;
  type: 'link' | 'button';
  url?: string;
  eventName?: string;
}

interface Nav {
  mode?: 'dark' | 'light';
  logo?: string;
  logoAltText?: string;
  headerText?: string;
  openMenuIcon?: {
    slotName: string;
  };
  closeMenuIcon?: {
    slotName: string;
  };
  menuLinks?: Array<MenuLink>;
  isMenuOpen: boolean;
  topRightSlot?: {
    slotName: string;
  };
}

const enum NavbarModes {
  Dark = 'dark',
  Light = 'light',
}

const enum NavbarLinkType {
  LINK = 'link',
  BUTTON = 'button',
}

const enum DeviceType {
  DESKTOP = 'desktop',
  MOBILE = 'mobile',
}

@customElement('header-component')
export class HeaderComponent extends TailwindElement(Style) {
  @property()
  navOptions: Nav = {
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

  themeOptions = {
    dark: {
      bgColor: 'bg-black',
      textColor: 'text-grey',
      textHoverColorDesktop: 'hover:text-white',
      textHoverColorMobile: 'hover:text-black',
      bgHoverColor:'hover:bg-light-gray'
    },
    light: {
      bgColor: 'bg-grey',
      textColor: 'text-brown',
      textHoverColorDesktop: 'hover:text-black',
      textHoverColorMobile: 'hover:text-white',
      bgHoverColor:'hover:bg-brown'
    },
  };

  @state() openMenu: boolean = this.navOptions.isMenuOpen;

  setMenuOpen() {
    this.openMenu = !this.openMenu;
  }

  displayMenuLinks(type: DeviceType) {
    return html` ${this.navOptions?.menuLinks?.map((link) =>
      link.type === NavbarLinkType.LINK
        ? html`<a
            href=${link.url}
            part="a-menu-link-${link.label}"
            class="${type === 'desktop'
              ? `${
                  this.themeOptions[this.navOptions?.mode].textHoverColorDesktop
                } px-3 py-2 rounded-md text-sm font-medium`
              : `text-left ${
                  this.themeOptions[this.navOptions?.mode].textHoverColorMobile
                } ${this.themeOptions[this.navOptions?.mode].bgHoverColor} block px-3 py-2 rounded-md text-base font-medium`}"
                aria-current=${link.label}
          >
            ${link.label}
          </a>`
        : html`<button
            part="btn-menu-link-${link.label}"
            class="${type === 'desktop'
              ? `${
                  this.themeOptions[this.navOptions?.mode].textHoverColorDesktop
                } px-3 py-2 rounded-md text-sm font-medium`
              : ` w-full text-left ${
                  this.themeOptions[this.navOptions?.mode].textHoverColorMobile
                } ${this.themeOptions[this.navOptions?.mode].bgHoverColor} block px-3 py-2 rounded-md text-base font-medium`}"
            @click=${() => {
              this.dispatchEvent(new CustomEvent(link.eventName));
            }}
          >
            ${link.label}
          </button>`
    )}`;
  }

  render() {
    return html`
      <nav class="${this.themeOptions[this.navOptions?.mode].bgColor} ${
      this.themeOptions[this.navOptions?.mode].textColor
    }" part="nav">
        
        <div class="mx-auto max-w-8xl px-2 sm:px-6 lg:px-4" >
          
          <div class="relative flex h-16 items-center justify-between">
            
            <div class="absolute inset-y-0 left-0 flex items-center sm:hidden" part="menu-icon-container" >
              
              <!-- Mobile menu button-->
              <button
                type="button"
                class="inline-flex items-center justify-center rounded-md p-2 ${
                  this.themeOptions[this.navOptions?.mode].textHoverColorDesktop
                } focus:outline-none"
                aria-controls=${msg(str`mobile menu`)}
                aria-expanded="${this.navOptions.isMenuOpen}"
                aria-label=${msg(str`mobile button`)}
                @click=${this.setMenuOpen}
                part="menu-icon-button">
                ${
                  this.openMenu
                    ? !this.navOptions?.closeMenuIcon?.slotName
                      ? CloseMenuIcon
                      : html`<div class="h-6 w-6" part="menu-close-icon">
                          <slot
                            name=${this.navOptions?.closeMenuIcon?.slotName}
                          ></slot>
                        </div>`
                    : !this.navOptions?.openMenuIcon?.slotName
                    ? OpenMenuIcon
                    : html`<div class="h-6 w-6" part="menu-open-icon">
                        <slot
                          name=${this.navOptions?.openMenuIcon?.slotName}
                        ></slot>
                      </div>`
                }
              </button>
            </div>

            <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div class="flex flex-shrink-0 items-center" part="logo-container">
                <img
                  part="logo"
                  class="hidden h-8 w-8 lg:block"
                  src=${this.navOptions?.logo}
                  alt="${
                    this.navOptions?.logoAltText
                      ? this.navOptions?.logoAltText
                      : msg(str`Company logo`)
                  }"
                />
              </div> 
         
            <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              
              <div class="flex flex-shrink-0 items-center font-bold  pl-4 ${
                this.navOptions?.mode === NavbarModes.Dark
                  ? 'text-white'
                  : 'text-black'
              } " part="headerText-container">
                <h2 part="headerText">${this.navOptions?.headerText}</h2>
              </div>

              <div class="hidden sm:ml-6 sm:block">
                <div class="flex space-x-4 pl-10" part="menu-link-container">
                 
                ${this.displayMenuLinks(DeviceType.DESKTOP)}
                </div>
              </div>

            </div>

            <div class="inset-y-0 right-0 flex pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0" part="right-icons-container">
                <slot name=${this.navOptions.topRightSlot.slotName}></slot>
            </div>

          </div>

        </div>

        <!-- Mobile menu, show/hide based on menu state. -->

        <div class="sm:hidden" id="mobile-menu" ?hidden=${!this.openMenu}>
          
          <div class="space-y-1 px-2 pt-2 pb-3" part="menu-link-container-mobile">
          ${this.displayMenuLinks(DeviceType.MOBILE)}
          </div>

        </div>

      </nav>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'header-component': HeaderComponent;
  }
}
