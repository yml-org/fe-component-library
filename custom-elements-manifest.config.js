import { reactWrapper } from 'cem-plugin-react-wrapper';

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
  plugins: [
    reactWrapper({
      /** If true, types will be created for your wrappers - default is "true" */
      typescript: true,
      /** The property name from the component object constructed by the CEM Analyzer */
      descriptionSrc: 'description',
      /** Displays the slot section of the element description */
      slotDocs: true,
      /** Displays the events section of the element description */
      eventDocs: true,
    }),
  ],
};
