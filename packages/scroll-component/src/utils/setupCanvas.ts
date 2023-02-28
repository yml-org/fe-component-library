import breakpoints from "./breakpoints";

let lastViewport = '';

export const setupCanvas = async (canvas: HTMLCanvasElement) => {
  const { isLarge, isLandscape } = breakpoints;
  const isHorizontal = isLarge() || isLandscape();
  const newViewport = isHorizontal ? 'H' : 'V';

  if (lastViewport !== newViewport ) {
    lastViewport = newViewport;
    canvas.width = (isLarge() || isLandscape()) ? 1920 : 780;
    canvas.height = (isLarge() || isLandscape()) ? 1080 : 1387;
  }
}