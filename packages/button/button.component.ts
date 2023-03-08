import { ButtonComponent } from './src/button/button.component';

declare global {
  interface HTMLElementTagNameMap {
    'ymlwebcl-button': ButtonComponent;
  }
}
