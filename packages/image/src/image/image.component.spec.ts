import { LitElement } from 'lit-element';

describe('image-component', () =>{
    const IMAGE_COMPONENT = 'image-component';
    let imageElement: LitElement;

    const getShadowRoot = (tagName: string): ShadowRoot =>
    document.body.getElementsByTagName(tagName)[0].shadowRoot; 
   
    beforeEach(() => {
        imageElement = window.document.createElement(
          IMAGE_COMPONENT
        ) as LitElement;
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
    
    it('sets the part for the component', async () => {
        const imageElementPart =
        getShadowRoot(IMAGE_COMPONENT).querySelector('img').part
        expect(imageElementPart).toContain("custom-image");
    });

})
