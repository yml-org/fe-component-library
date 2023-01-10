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
  menuIcon?: string;
  menuLinks?: Array<MenuLink>;
  isMenuOpen: boolean;
  topRightIcons?: {
    slotName: string;
  }[];
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
    mode: 'light',
    logo: 'https://ymedialabs.atlassian.net/s/1jmxwi/b/8/d35727372e299c952e88a10ef82bbaf6/_/jira-logo-scaled.png',
    logoAltText: msg(str`Company logo`),
    headerText: 'Home',
    menuIcon: '',
    menuLinks: [
      {
        label: msg(str`Home`),
        type: 'link',
        url: '#home',
      }
    ],
    isMenuOpen: false,
    topRightIcons: [
      {
        slotName: 'btn',
      },
    ],
  };

  themeOptions = {
    dark: {
      bgColor: 'bg-black',
      textColor: 'text-grey',
      textHoverColor: 'hover:text-white',
    },
    light: {
      bgColor: 'bg-grey',
      textColor: 'text-brown',
      textHoverColor: 'hover:text-black',
    },
  };

  bgColor = this.themeOptions[this.navOptions?.mode].bgColor;
  textColor = this.themeOptions[this.navOptions?.mode].textColor;
  textHoverColor = this.themeOptions[this.navOptions?.mode].textHoverColor;

  @state() openMenu: boolean = this.navOptions.isMenuOpen;

  setMenuOpen() {
    this.openMenu = !this.openMenu;
  }

  displayMenuLinks(type: DeviceType) {
    return html` ${this.navOptions?.menuLinks?.map((link) =>
      link.type === NavbarLinkType.LINK
        ? html`<a
            href=${link.url}
            class="${type === 'desktop'
              ? `${this.textHoverColor} px-3 py-2 rounded-md text-sm font-medium`
              : `text-left ${this.textHoverColor} block px-3 py-2 rounded-md text-base font-medium`}"
            aria-current=${link.label}
          >
            ${link.label}
          </a>`
        : html`<button
            class="${type === 'desktop'
              ? `${this.textHoverColor} px-3 py-2 rounded-md text-sm font-medium`
              : ` w-full text-left ${this.textColor} block px-3 py-2 rounded-md text-base font-medium`}"
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
      <nav class="${this.bgColor} ${this.textColor}">
        
        <div class="mx-auto max-w-8xl px-2 sm:px-6 lg:px-4">
          
          <div class="relative flex h-16 items-center justify-between">
            
            <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
              
              <!-- Mobile menu button-->
              <button
                type="button"
                class="inline-flex items-center justify-center rounded-md p-2 ${
                  this.textHoverColor
                } focus:outline-none"
                aria-controls=${msg(str`mobile menu`)}
                aria-expanded="${this.navOptions.isMenuOpen}"
                aria-label=${msg(str`mobile button`)}
                @click=${this.setMenuOpen}>
                ${!this.openMenu ? OpenMenuIcon : CloseMenuIcon}
              </button>
            </div>

            <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            ${
              this.navOptions?.logo &&
              html`<div class="flex flex-shrink-0 items-center">
                <img
                  class="hidden h-8 w-auto lg:block"
                  src=${this.navOptions?.logo}
                  alt="${this.navOptions?.logoAltText}"
                />
              </div> `
            }
            <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              
              <div class="flex flex-shrink-0 items-center font-bold  pl-4 ${
                this.navOptions?.mode === NavbarModes.Dark
                  ? 'text-white'
                  : 'text-black'
              } ">
                <h2>${this.navOptions?.headerText}</h2>
              </div>

              <div class="hidden sm:ml-6 sm:block">
                <div class="flex space-x-4 pl-10">
                 
                ${this.displayMenuLinks(DeviceType.DESKTOP)}
                </div>
              </div>

            </div>

            <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              ${this.navOptions?.topRightIcons?.map(
                (icon) => html`<slot name=${icon.slotName}></slot>`
              )}
            </div>

          </div>

        </div>

        <!-- Mobile menu, show/hide based on menu state. -->

        <div class="sm:hidden" id="mobile-menu" ?hidden=${!this.openMenu}>
          
          <div class="space-y-1 px-2 pt-2 pb-3" >
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
