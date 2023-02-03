import { Image } from '../types/image.type';

export const imageConfig: Image = {
  altText: 'background image',
  src: 'https://i.ibb.co/yBV3M1C/planet.jpg',
  placeholderImg: 'https://i.ibb.co/yBV3M1C/planet-mini.jpg',
  size: {
    width: '500px',
    height: '500px',
    rounded: true,
    border: {
      type: 'solid',
      color: '#000',
      width: '2px',
    },
    objectFit: 'fill',
    minWidth: '100px',
    maxHeight: '100%',
    maxWidth: '200px',
    minHeight: '100%'
  },
};
