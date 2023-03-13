export const ymlGaInstall = (trackingId, additionalConfig = {}) => {
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

export const ymlGaCookieLessInstall = (trackingId) => {
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
  gtag('config', trackingId, {
    anonymize_ip: true,
    client_storage: 'none',
  });
};

export const ymlGaAccelerator = function (...args) {
  window.dataLayer.push(args);
};

export default ymlGaAccelerator;
