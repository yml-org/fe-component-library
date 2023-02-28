import breakpoints from "./breakpoints";
import  { getImages } from "./getImages";

const imagesMemCache = {
  mobile: [] as HTMLImageElement[],
  desktop: [] as HTMLImageElement[]
}

export const preload = async (desktopImages, mobileImages) : Promise<HTMLImageElement[]> => {
  const { isLarge, isLandscape } = breakpoints;
  const isDesktop = (isLarge() || isLandscape());
  const memKey = isDesktop ? 'desktop' : 'mobile';

  // if (!!imagesMemCache[memKey].length) {
  //   console.log("test")
  //   return imagesMemCache[memKey];
  // }

  const imagesToUse = await getImages(desktopImages, mobileImages);
  imagesMemCache[memKey] = Object.values(imagesToUse).map(url => loadImage(url as string));
  return imagesMemCache[memKey];
}

const loadImage = (url: string) : HTMLImageElement => {
  const img = new Image();
  const imageUrl = new URL(url, import.meta.url);
  img.src = imageUrl;
  return img;
}