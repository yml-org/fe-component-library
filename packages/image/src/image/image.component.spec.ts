

import { LitElement } from 'lit-element';
import {
  imageConfig
} from '../constants/image.variant';

describe('image-component', () => {
  const IMAGE_COMPONENT = 'image-component';
  let imageElement: LitElement;

  const getShadowRoot = (tagName: string): ShadowRoot =>
    document.body.getElementsByTagName(tagName)[0].shadowRoot;

  beforeEach(() => {
    imageElement = window.document.createElement(IMAGE_COMPONENT) as LitElement;
    document.body.appendChild(imageElement);
  });

  afterEach(() => {
    document.body.getElementsByTagName(IMAGE_COMPONENT)[0].remove();
  });

  it('matches component snapshot', async () => {
    expect(
      document.body.getElementsByTagName(IMAGE_COMPONENT)[0]
    ).toMatchSnapshot();
  });

  it('sets part property correctly', async () => {
    const elem = getShadowRoot(IMAGE_COMPONENT).querySelector('img');
    expect(elem.part[0]).toBe("custom-image");
  });

  it('sets image alt text as secondary', async () => {
    imageElement['altText']=imageConfig.altText;
    window.document.body.appendChild(imageElement);
    await imageElement.updateComplete;
    const imageEle = getShadowRoot(IMAGE_COMPONENT).querySelector('img'); 
    expect(imageEle.alt).toBe(imageConfig.altText);
  });

  it('sets image width property', async () => {
    imageElement['size']=imageConfig.size;
    window.document.body.appendChild(imageElement);
    await imageElement.updateComplete;
    const imageEle = getShadowRoot(IMAGE_COMPONENT).querySelector('img'); 
    expect(imageEle.getAttribute('width')).toBe(imageConfig.size.width);
  });

  it('sets image height property', async () => {
    imageElement['size']=imageConfig.size;
    window.document.body.appendChild(imageElement);
    await imageElement.updateComplete;
    const imageEle = getShadowRoot(IMAGE_COMPONENT).querySelector('img'); 
    expect(imageEle.getAttribute('height')).toBe(imageConfig.size.height);
  });

  it('sets image max-height property', async () => {
    imageElement['size']=imageConfig.size;
    window.document.body.appendChild(imageElement);
    await imageElement.updateComplete;
    const imageEle = getShadowRoot(IMAGE_COMPONENT).querySelector('img'); 
    expect(imageEle.getAttribute('max-height')).toBe(imageConfig.size.maxHeight);
  });

  it('sets image max-width property', async () => {
    imageElement['size']=imageConfig.size;
    window.document.body.appendChild(imageElement);
    await imageElement.updateComplete;
    const imageEle = getShadowRoot(IMAGE_COMPONENT).querySelector('img'); 
    expect(imageEle.getAttribute('max-width')).toBe(imageConfig.size.maxWidth);
  });

  it('sets image min-width property', async () => {
    imageElement['size']=imageConfig.size;
    window.document.body.appendChild(imageElement);
    await imageElement.updateComplete;
    const imageEle = getShadowRoot(IMAGE_COMPONENT).querySelector('img'); 
    expect(imageEle.getAttribute('min-width')).toBe(imageConfig.size.minWidth);
  });

  it('sets image min-height property', async () => {
    imageElement['size']=imageConfig.size;
    window.document.body.appendChild(imageElement);
    await imageElement.updateComplete;
    const imageEle = getShadowRoot(IMAGE_COMPONENT).querySelector('img'); 
    expect(imageEle.getAttribute('min-height')).toBe(imageConfig.size.minHeight);
  });

  it('sets image object-fit property', async () => {
    imageElement['size']=imageConfig.size;
    window.document.body.appendChild(imageElement);
    await imageElement.updateComplete;
    const imageEle = getShadowRoot(IMAGE_COMPONENT).querySelector('img'); 
    expect(imageEle.classList.contains('object-fill')).toBe(true);
  });

  it('Does not set image object-fit property by default', async () => {
    const imageEle = getShadowRoot(IMAGE_COMPONENT).querySelector('img'); 
    expect(imageEle.classList.contains('object-fill')).toBe(false);
  });

  it('sets image rounded property to true if rounded=true', async () => {
    imageElement['size']=imageConfig.size;
    window.document.body.appendChild(imageElement);
    await imageElement.updateComplete;
    const imageEle = getShadowRoot(IMAGE_COMPONENT).querySelector('img'); 
    expect(imageEle.classList.contains('rounded-full')).toBe(true);
  });

  it('sets image rounded property to false by default', async () => {
    const imageEle = getShadowRoot(IMAGE_COMPONENT).querySelector('img'); 
    expect(imageEle.classList.contains('rounded-full')).toBe(false);
  });
  
  it('sets image border property', async () => {
    imageElement['size']=imageConfig.size;
    window.document.body.appendChild(imageElement);
    await imageElement.updateComplete;
    const imageEle = getShadowRoot(IMAGE_COMPONENT).querySelector('img'); 
    expect(imageEle.style.border).toContain(imageConfig.size.border.width + ' ' + imageConfig.size.border.type );
  });

  it('sets image src property', async () => {
    imageElement['placeholderImg']=imageConfig.placeholderImg;
    window.document.body.appendChild(imageElement);
    await imageElement.updateComplete;
    const imageEle = getShadowRoot(IMAGE_COMPONENT).querySelector('img'); 
    expect(imageEle.getAttribute('src')).toBe(imageConfig.placeholderImg);
  });

  it('sets image srcset property', async () => {
    imageElement['src']=imageConfig.src;
    window.document.body.appendChild(imageElement);
    await imageElement.updateComplete;
    const imageEle = getShadowRoot(IMAGE_COMPONENT).querySelector('img'); 
    expect(imageEle.getAttribute('srcset')).toBe(imageConfig.src);
  });
});