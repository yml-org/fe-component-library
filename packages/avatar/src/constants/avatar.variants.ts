import { AvatarVariant } from 'types/avatar';

const roundedVariant: AvatarVariant = {
  isRounded: true,
  defaultBgColor: 'bg-slate-200',
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

const withRoundedBorderAvatar: AvatarVariant = {
  ...withDefaultIcon,
  ...roundedVariant,
  hasBorder: true,
};

const withShadow: AvatarVariant = {
  ...withRoundedBorderAvatar,
  hasShadow: true,
};

const withSlot: AvatarVariant = {
  isRounded: true,
  hasBorder: true,
  hasShadow: true,
  slotName: 'avatar-slot',
};
export {
  roundedVariant,
  withDefaultIcon,
  withCustomHeightWidth,
  withRoundedBorderAvatar,
  withShadow,
  withSlot,
};
