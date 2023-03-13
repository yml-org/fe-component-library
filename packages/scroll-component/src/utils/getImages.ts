import breakpoints from './breakpoints';

export const getImages = async (
  desktopImages,
  mobileImages
): Promise<string[]> => {
  const { isLarge, isLandscape } = breakpoints;
  const isDesktop = isLarge() || isLandscape();
  const imagesToUse = isDesktop ? desktopImages : mobileImages;
  return imagesToUse;
};
