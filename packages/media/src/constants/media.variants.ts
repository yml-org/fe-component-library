import { html } from 'lit';
import { MediaProps } from '../types/media';

export const mediaProps: MediaProps = {
  mediaPartAttribute: 'custom-media',
  textPartAttribute: 'custom-text',
  titlePartAttribute: 'custom-title',
  staticContentSlotName: 'staticContent',
  imageSlotName: 'imageSlot',
  iconSlotName: 'iconSlot',
  mediaTitle: 'Media Component',
};

export const houseIcon = html`<svg
  width="80px"
  height="80px"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M2 22H22"
    stroke="#292D32"
    stroke-width="1.5"
    stroke-miterlimit="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M2.94995 22L2.99995 9.96999C2.99995 9.35999 3.28995 8.78004 3.76995 8.40004L10.77 2.95003C11.49 2.39003 12.5 2.39003 13.23 2.95003L20.23 8.39003C20.72 8.77003 21 9.34999 21 9.96999V22"
    stroke="#292D32"
    stroke-width="1.5"
    stroke-miterlimit="10"
    stroke-linejoin="round"
  />
  <path
    d="M15.5 11H8.5C7.67 11 7 11.67 7 12.5V22H17V12.5C17 11.67 16.33 11 15.5 11Z"
    stroke="#292D32"
    stroke-width="1.5"
    stroke-miterlimit="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>`;

export const bookmarkIcon = html` <svg
  width="20px"
  height="20px"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M17 3C18.1046 3 19 3.89543 19 5L19 19.0536C19 20.5893 17.341 21.552 16.0077 20.7901L12.9923 19.067C12.3774 18.7157 11.6226 18.7157 11.0077 19.067L7.99228 20.7901C6.65897 21.552 5 20.5893 5 19.0536L5 5C5 3.89543 5.89543 3 7 3L17 3Z"
    stroke="#323232"
    stroke-width="2"
    stroke-linejoin="round"
  />
</svg>`;
