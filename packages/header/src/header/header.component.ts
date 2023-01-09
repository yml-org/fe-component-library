import { html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { TailwindElement } from "../shared/tailwind.element";
import Style from "./header.component.scss?inline";
interface Nav {
  themeColor?: string;
  textColor?: string;
  textHoverColor?: string;
  logo?: string;
  name?: string;
  menuIcon?: string;
  menuLinks?: [
    {
      label: string;
      type: "link" | "button";
      url?: string;
      eventName?: string;
    }
  ];
  topRightIcons?: [
    {
      slotName: string;
    }
  ];
  profile?: {
    avatarUrl: string;
    dropDownList: [
      {
        label: string;
        type: "link" | "button";
        eventName?: string;
        url?: string;
      }
    ];
  };
}

interface navTheme {
  themeColor?: string;
  textColor?: string;
  textHoverColor?: string;
}
@customElement("header-component")
export class HeaderComponent extends TailwindElement(Style) {
  @state() openMenu: boolean = false;

  @property()
  navOptions: Nav = {
    logo: "https://ymedialabs.atlassian.net/s/1jmxwi/b/8/d35727372e299c952e88a10ef82bbaf6/_/jira-logo-scaled.png",
    name: "YML",
    menuIcon: "",
    menuLinks: [
      {
        label: "Home",
        type: "link",
        url: "#home",
      },
    ],
    topRightIcons: [
      {
        slotName: "btn",
      },
    ],
  };

  themeOptions: navTheme = {
    themeColor: "#000",
    textColor: "#fff",
    textHoverColor: "#50d71e",
  };

  __setHambergerBtn() {
    this.openMenu = !this.openMenu;
  }
  

  render() {
    return html`
      <nav class="bg-[${this.themeOptions.themeColor}] text-[${this.themeOptions.textColor}]">
        
        <div class="mx-auto max-w-8xl px-2 sm:px-6 lg:px-4">
          
          <div class="relative flex h-16 items-center justify-between">
            
            <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
              
              <!-- Mobile menu button-->
              <button
                type="button"
                class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-[${
                  this.themeOptions.textHoverColor
                }] focus:outline-none"
                aria-controls="mobile-menu"
                aria-expanded="false"
                @click=${this.__setHambergerBtn}>
                ${
                  !this.openMenu
                    ? html`<svg
                        class="block h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                      </svg>`
                    : html`<svg
                        class="block h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>`
                }
              </button>

            </div>

            <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            ${
              this.navOptions.logo &&
              html`<div class="flex flex-shrink-0 items-center">
                <img
                  class="hidden h-8 w-auto lg:block"
                  src=${this.navOptions.logo}
                  alt="logo"
                />
              </div> `
            }
            <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              
              <div class="flex flex-shrink-0 items-center font-bold  pl-4">
                <h2>${this.navOptions.name}</h2>
              </div>

              <div class="hidden sm:ml-6 sm:block">
                <div class="flex space-x-4 pl-10">
                  <!-- Current: "bg-gray-900", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                  ${this.navOptions.menuLinks.map((link) =>
                    link.type === "link"
                      ? html`<a
                          href=${link.url}
                          class="hover:text-[${this.themeOptions
                            .textHoverColor}] px-3 py-2 rounded-md text-sm font-medium"
                          aria-current="page"
                        >
                          ${link.label}
                        </a>`
                      : html`<button
                          class="text-[${this.themeOptions
                            .textHoverColor}] px-3 py-2 rounded-md text-sm font-medium"
                          @click=${() => {
                            this.dispatchEvent(new CustomEvent(link.eventName));
                            this.openMenu && !this.openMenu;
                          }}
                        >
                          ${link.label}
                        </button>`
                  )}
                </div>
              </div>

            </div>

            <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              ${this.navOptions.topRightIcons.map(
                (icon) => html`<slot name=${icon.slotName}></slot>`
              )}
            </div>

          </div>

        </div>

        <!-- Mobile menu, show/hide based on menu state. -->

        <div class="sm:hidden" id="mobile-menu" ?hidden=${!this.openMenu}>
          
          <div class="space-y-1 px-2 pt-2 pb-3" >
            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
            ${this.navOptions.menuLinks.map((link) =>
              link.type === "link"
                ? html` <a
                    href=${link.url}
                    part="anchor-part"
                    class="text-left  hover:text-[${this.themeOptions
                      .textHoverColor}] block px-3 py-2 rounded-md text-base font-medium"
                    aria-current="page"
                  >
                    ${link.label}
                  </a>`
                : html` <button
                    class=" w-full text-left text-[${this.themeOptions
                      .textHoverColor}] block px-3 py-2 rounded-md text-base font-medium"
                    @click=${() => {
                      this.dispatchEvent(new CustomEvent(link.eventName));
                      this.openMenu = false;
                    }}
                  >
                    ${link.label}
                  </button>`
            )}
          </div>

        </div>

      </nav>
    `;
  }
}