import { AvatarVariant } from '../types/avatar';

const roundedVariant: AvatarVariant = {
  isRounded: true,
};

const withDefaultIcon: AvatarVariant = {
  showDefaultIcon: true,
  defaultImage:
    'https://cdn3.iconfinder.com/data/icons/office-485/100/ICON_BASIC-11-512.png',
};

const withCustomHeightWidth: AvatarVariant = {
  ...withDefaultIcon,
  width: 100,
  height: 100,
};

const withSlot: AvatarVariant = {
  isRounded: true,
  slotName: 'avatar-slot',
};

const withRoundedBorderAvatar: AvatarVariant = {
  ...withDefaultIcon,
  isRounded: true,
  hasBorder: true,
};

const withShadow: AvatarVariant = {
  ...withRoundedBorderAvatar,
  hasShadow: true,
};
export {
  roundedVariant,
  withDefaultIcon,
  withCustomHeightWidth,
  withSlot,
  withRoundedBorderAvatar,
  withShadow,
};
