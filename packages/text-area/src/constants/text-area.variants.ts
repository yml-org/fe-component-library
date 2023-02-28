import { TextAreaVariant } from '../types/text-area';

const withLabel: TextAreaVariant = {
  label: 'LABEL',
  textAreaId: 'default',
  textAreaName: 'default',
};

const withCustomRows: TextAreaVariant = {
  ...withLabel,
  textAreaRows: 5,
};

const withCustomCols: TextAreaVariant = {
  ...withCustomRows,
  textAreaCols: 40,
};

const disabledVariant: TextAreaVariant = {
  ...withCustomCols,
  isDisabled: true,
};

const autoFocusVariant: TextAreaVariant = {
  ...withCustomCols,
  isAutoFocus: true,
};

const withPlaceHolder: TextAreaVariant = {
  ...withCustomCols,
  textAreaPlaceHolder: 'Sample Place holder',
  label: '',
};

const withNoResize: TextAreaVariant = {
  ...withCustomCols,
  canResize: false,
};

export {
  withLabel,
  withCustomRows,
  withCustomCols,
  disabledVariant,
  autoFocusVariant,
  withPlaceHolder,
  withNoResize,
};
