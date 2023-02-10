export const gaInstall = (trackingId, additionalConfig = {}) => {
  const scriptId = 'ga-accelerator';

  if (document.getElementById(scriptId)) return;

  const { head } = document;
  const script = document.createElement('script');
  script.id = scriptId;
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
  head.insertBefore(script, head.firstChild);

  window.dataLayer = window.dataLayer || [];
  gtag('js', new Date());
  gtag('config', trackingId, additionalConfig);
};

export const gaAccelerator = function (...args) {
  window.dataLayer.push(args);
};

export default gaAccelerator;
