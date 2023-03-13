import { ProgressBarComponent } from './src/progress-bar/progressBar.component';

declare global {
  interface HTMLElementTagNameMap {
    'ymlwebcl-progressbar': ProgressBarComponent;
  }
}
