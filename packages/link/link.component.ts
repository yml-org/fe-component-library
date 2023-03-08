import { LinkComponent } from './src/link/link.component';

declare global {
  interface HTMLElementTagNameMap {
    'ymlwebcl-link': LinkComponent;
  }
}
