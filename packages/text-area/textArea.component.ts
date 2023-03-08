import { TextAreaComponent } from './src/text-area/textArea.component';

declare global {
  interface HTMLElementTagNameMap {
    'ymlwebcl-textarea': TextAreaComponent;
  }
}
