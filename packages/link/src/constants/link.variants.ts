interface Link {
  text?: string;
  linkTitle?: string;
  href: string;
  rel?: string;
  target?: string;
  type?: string;
  slotName?: string;
}

export const linkConfig: Link = {
  text: 'Click here to test',
  linkTitle: 'myLink',
  href: 'https://www.w3schools.com/html/html_links.asp',
  rel: 'noopener noreferrer',
  target: '_blank',
  type: 'default',
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
  type: 'default',
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
