import { ImageComponent } from './src/image/image.component';

declare global {
  interface HTMLElementTagNameMap {
    'ymlwebcl-image': ImageComponent;
  }
}
