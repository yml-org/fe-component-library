import { Link } from '../types/link.component';

export const linkConfig: Link = {
  text: 'Click here to test',
  linkTitle: 'myLink',
  href: 'https://www.w3schools.com/html/html_links.asp',
  rel: 'noopener noreferrer',
  target: '_blank',
  type: 'link',
};

export const linkConfigTypeButton: Link = {
  text: 'Click here to test',
  linkTitle: 'myLink',
  href: 'https://www.w3schools.com/html/html_links.asp',
  rel: 'noopener noreferrer',
  target: '_blank',
  type: 'button',
};

export const linkConfigSlot: Link = {
  text: '',
  linkTitle: 'myLink',
  href: 'https://www.w3schools.com/html/html_links.asp',
  rel: 'noopener noreferrer',
  target: '_blank',
  type: 'link',
  slotName: 'newSlot',
};

export const linkConfigSlotTypeButton: Link = {
  text: '',
  linkTitle: 'myLink',
  href: 'https://www.w3schools.com/html/html_links.asp',
  rel: 'noopener noreferrer',
  target: '_blank',
  type: 'button',
  slotName: 'newSlot',
};
