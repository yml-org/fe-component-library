import { CardComponent } from './src/card/card.component';

declare global {
  interface HTMLElementTagNameMap {
    'ymlwebcl-card': CardComponent;
  }
}
