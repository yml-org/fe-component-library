import { ThemeOptions } from 'types/header.component';
export enum NavbarModes {
  Dark = 'dark',
  Light = 'light',
}

export enum NavbarLinkType {
  LINK = 'link',
  BUTTON = 'button',
}

export enum DeviceType {
  DESKTOP = 'desktop',
  MOBILE = 'mobile',
}

export enum ThemeOptionKeys {
  BackgroundColor = 'bgColor',
  TextColor = 'textColor',
  TextHoverColorDesktop = 'textHoverColorDesktop',
  TextHoverColorMobile = 'textHoverColorMobile',
  BackgroundHoverColor = 'bgHoverColor',
  HeaderTextColor = 'headerTextColor',
}

export const themeOptions: ThemeOptions = {
  dark: {
    bgColor: 'bg-black',
    textColor: 'text-gray-300',
    textHoverColorDesktop: 'hover:text-white',
    textHoverColorMobile: 'hover:text-black',
    bgHoverColor: 'hover:bg-gray-300',
    headerTextColor: 'text-white',
  },
  light: {
    bgColor: 'bg-gray-200',
    textColor: 'text-stone-900',
    textHoverColorDesktop: 'hover:text-black',
    textHoverColorMobile: 'hover:text-white',
    bgHoverColor: 'hover:bg-stone-700',
    headerTextColor: 'text-black',
  },
};
