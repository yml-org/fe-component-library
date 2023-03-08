import { MediaComponent } from './src/media/media.component';

declare global {
  interface HTMLElementTagNameMap {
    'ymlwebcl-media': MediaComponent;
  }
}
