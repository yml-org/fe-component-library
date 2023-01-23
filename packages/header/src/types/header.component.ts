export type MenuLinkType = 'link' | 'button';

export type NavbarModes = 'dark' | 'light';

export interface MenuLink {
  label: string;
  type: MenuLinkType;
  url?: string;
  eventName?: string;
}

export type ThemeOption = {
  bgColor: string;
  textColor: string;
  textHoverColorDesktop: string;
  textHoverColorMobile: string;
  bgHoverColor: string;
  headerTextColor: string;
};

export interface Nav {
  mode?: NavbarModes;
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

export interface ThemeOptions {
  dark: ThemeOption;
  light: ThemeOption;
}
