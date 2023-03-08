import { ListComponent } from './src/list/list.component';

declare global {
  interface HTMLElementTagNameMap {
    'ymlwebcl-list': ListComponent;
  }
}
