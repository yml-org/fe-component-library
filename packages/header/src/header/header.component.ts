import { msg, str } from '@lit/localize';
import { html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { TailwindElement } from '../shared/tailwind.element';
import { OpenMenuIcon, CloseMenuIcon } from './headerIcons';
import { MenuLink, Nav } from '../types/header.component';
import {
  NavbarModes,
  NavbarLinkType,
  DeviceType,
  themeOptions,
  ThemeOptionKeys,
} from '../constants/header.component';
import { defaultNavConfig } from '../constants/header.variants';
import Style from './header.component.scss?inline';

@customElement('header-component')
export class HeaderComponent extends TailwindElement(Style) {
  @property()
  navOptions: Nav = defaultNavConfig;

  themeOptions = themeOptions;

  @state() openMenu: boolean = this.navOptions?.isMenuOpen;

  protected setMenuOpen() {
    this.openMenu = !this.openMenu;
  }

  protected getThemeProperty(key: string) {
    return (
      this.themeOptions[this.navOptions?.mode][key] ||
      this.themeOptions[NavbarModes.Dark][key]
    );
  }

  protected renderMenuOptionsAsButton(type: DeviceType, link: MenuLink) {
    return html`<button
      part="btn-menu-link-${link.label}"
      class="${type === DeviceType.DESKTOP
        ? `${this.getThemeProperty(
            ThemeOptionKeys.TextHoverColorDesktop
          )} px-3 py-2 rounded-md text-sm font-medium`
        : ` w-full text-left ${this.getThemeProperty(
            ThemeOptionKeys.TextHoverColorMobile
          )} ${this.getThemeProperty(
            ThemeOptionKeys.BackgroundHoverColor
          )} block px-3 py-2 rounded-md text-base font-medium`}"
      @click=${() => {
        this.dispatchEvent(new CustomEvent(link.eventName));
        this.openMenu = false;
      }}
    >
      ${link.label}
    </button>`;
  }

  protected renderMenuOptionsAsLink(type: DeviceType, link: MenuLink) {
    return html`<a
      href=${link.url}
      part="a-menu-link-${link.label}"
      class="${type === DeviceType.DESKTOP
        ? `${this.getThemeProperty(
            ThemeOptionKeys.TextHoverColorDesktop
          )} px-3 py-2 rounded-md text-sm font-medium`
        : `text-left ${this.getThemeProperty(
            ThemeOptionKeys.TextHoverColorMobile
          )} ${this.getThemeProperty(
            ThemeOptionKeys.BackgroundHoverColor
          )} block px-3 py-2 rounded-md text-base font-medium`}"
      aria-current=${link.label}
    >
      ${link.label}
    </a>`;
  }

  protected displayMenuLinks(type: DeviceType) {
    return html` ${this.navOptions?.menuLinks?.map((link) =>
      link.type === NavbarLinkType.LINK
        ? this.renderMenuOptionsAsLink(type, link)
        : this.renderMenuOptionsAsButton(type, link)
    )}`;
  }

  protected renderNavBarLogo() {
    return html`<img
      part="logo"
      class="hidden h-8 w-8 lg:block"
      src=${this.navOptions?.logo}
      alt="${this.navOptions?.logoAltText
        ? this.navOptions?.logoAltText
        : msg(str`Company logo`)}"
    />`;
  }

  protected renderHamburgerIcon() {
    return html`<button
      type="button"
      class="inline-flex items-center justify-center rounded-md p-2 ${this.getThemeProperty(
        ThemeOptionKeys.TextHoverColorDesktop
      )} focus:outline-none btn-tap-color"
      aria-controls=${msg(str`mobile menu`)}
      aria-expanded="${this.navOptions.isMenuOpen}"
      aria-label=${msg(str`mobile button`)}
      @click=${this.setMenuOpen}
      part="menu-icon-button"
    >
      ${this.openMenu
        ? !this.navOptions?.closeMenuIcon?.slotName
          ? CloseMenuIcon
          : html`<div class="h-6 w-6" part="menu-close-icon">
              <slot name=${this.navOptions?.closeMenuIcon?.slotName}></slot>
            </div>`
        : !this.navOptions?.openMenuIcon?.slotName
        ? OpenMenuIcon
        : html`<div class="h-6 w-6" part="menu-open-icon">
            <slot name=${this.navOptions?.openMenuIcon?.slotName}></slot>
          </div>`}
    </button>`;
  }

  render() {
    return html`
      <nav class="${this.getThemeProperty(ThemeOptionKeys.BackgroundColor)}
      ${this.getThemeProperty(ThemeOptionKeys.HeaderTextColor)} " part="nav">
        
        <div class="mx-auto max-w-8xl px-2 sm:px-6 lg:px-4" >
          
          <div class="relative flex h-16 items-center justify-between">
            
            <div class="absolute inset-y-0 left-0 flex items-center sm:hidden" part="menu-icon-container" >
              
              <!-- Mobile menu button-->
            ${
              this.navOptions?.menuLinks?.length > 0
                ? this.renderHamburgerIcon()
                : ''
            }
            </div>

            <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div class="flex flex-shrink-0 items-center" part="logo-container">
                ${this.navOptions?.logo && this.renderNavBarLogo()}
              </div> 
         
            <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              
              <div class="flex flex-shrink-0 items-center font-bold  pl-4 ${this.getThemeProperty(
                ThemeOptionKeys.HeaderTextColor
              )} " part="headerText-container">
                <h2 part="headerText">${this.navOptions?.headerText}</h2>
              </div>

              <div class="hidden sm:ml-6 sm:block">
                <div class="flex space-x-4 pl-10" part="menu-link-container">
                 
                ${this.displayMenuLinks(DeviceType.DESKTOP)}
                </div>
              </div>

            </div>

            <div class="inset-y-0 right-0 flex pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0" part="right-icons-container">
                <slot name=${this.navOptions?.topRightSlot?.slotName}></slot>
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
