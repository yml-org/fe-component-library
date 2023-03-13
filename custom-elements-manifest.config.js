import { moduleFileExtensionsPlugin } from 'cem-plugin-module-file-extensions';

export default {
  globs: [
    '**/*.component.ts',
    '**/overlay-trigger.ts',
    '**/src/[A-Z]*.ts',
    '**/src/elements/[A-Z]*.ts',
  ],
  exclude: [
    '**/*.d.ts',
    '**/stories/**',
    '**/test/**',
    'node_modules/*',
    '**/*.dev.*',
  ],
  outdir: '.',
  litelement: true,
  packagejson: false,
  plugins: [moduleFileExtensionsPlugin()],
};
