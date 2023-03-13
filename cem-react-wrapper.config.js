import reactWrapperPlugin from './scripts/cem-plugin-react-wrapper.js';
import { readFileSync } from 'fs';
import { resolve } from 'path';
import yaml from 'js-yaml';

export default {
    globs: ['**/sp-*.ts', '**/overlay-trigger.ts', '**/src/[A-Z]*.ts'],
    exclude: [
        '**/sp-icon-*.ts',
        '**/*.d.ts',
        '**/stories/**',
        '**/test/**',
        'node_modules/*',
        '**/*.dev.*',
    ],
    outdir: '.',
    litelement: true,
    packagejson: false,
    plugins: [
        reactWrapperPlugin({
            exclude: ['DialogBase', 'PickerBase', 'StoryDecorator'],
            outDir: '../../react',
            prettierConfig: yaml.load(
                readFileSync(resolve('../../.prettierrc.yaml'))
            ),
        }),
    ],
};
