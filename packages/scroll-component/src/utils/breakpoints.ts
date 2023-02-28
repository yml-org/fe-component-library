const doesItMatch = (query: string) => {
  return () => (window.matchMedia(query).matches);
}

export default {
  isMobile: doesItMatch('(max-width: 767px)'),
  isTablet: doesItMatch('(min-width: 768px) and (max-width: 1024px)'),
  isLarge: doesItMatch('(min-width: 1024px) and (max-width: 1640px)'),
  isDesktopLarge: doesItMatch('(min-width: 1640px)'),
  isLandscape: doesItMatch('(orientation: landscape)'),
  isPortrait: doesItMatch('(orientation: portrait)')
}