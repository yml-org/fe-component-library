export type LinkComponentTypes = 'link' | 'button';

export interface Link {
  text?: string;
  linkTitle?: string;
  href: string;
  rel?: string;
  target?: string;
  type?: string;
  slotName?: string;
}
