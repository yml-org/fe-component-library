import reactWrapperPlugin from './scripts/cem-plugin-react-wrapper.js';
import { readFileSync } from 'fs';
import { resolve } from 'path';
import yaml from 'js-yaml';

export default {
  globs: ['**/*.component.ts', '**/overlay-trigger.ts', '**/src/[A-Z]*.ts'],
  outdir: '.',
  litelement: true,
  packagejson: false,
  plugins: [
    reactWrapperPlugin({
      outDir: '../../react',
      prettierConfig: yaml.load(
        readFileSync(resolve('../../.prettierrc.yaml'))
      ),
    }),
  ],
};
