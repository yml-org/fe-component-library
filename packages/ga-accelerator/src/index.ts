import { uuid } from 'uuidv4';

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

export const gaCookieLessInstall = (trackingId) => {
  const scriptId = 'ga-accelerator';

  if (document.getElementById(scriptId)) return;

  const { head } = document;
  const script = document.createElement('script');
  script.id = scriptId;
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
  head.insertBefore(script, head.firstChild);

  window.dataLayer = window.dataLayer || [];
  const GA_LOCAL_STORAGE_KEY = 'ga-clientId';

  // checks if localstorage is available
  if (window.localStorage) {
    // checks if user was already connected and loads client_id from localstorage
    if (localStorage.getItem(GA_LOCAL_STORAGE_KEY)) {
      // creates new tracker with same client_id as the last time the user visited
      gtag('js', new Date());
      gtag('config', trackingId, {
        send_page_view: true,
        client_storage: 'none',
        client_id: localStorage.getItem(GA_LOCAL_STORAGE_KEY),
      });
    } else {
      // creates client_id and saves it in localStorage -> currently random number better would be a uuid
      window.localStorage.setItem(GA_LOCAL_STORAGE_KEY, uuid());
      // creates new tracker with the new client_id
      gtag('js', new Date());
      gtag('config', trackingId, {
        send_page_view: true,
        client_storage: 'none',
        client_id: localStorage.getItem(GA_LOCAL_STORAGE_KEY),
      });
    }
  }
};

export const gaAccelerator = function (...args) {
  window.dataLayer.push(args);
};

export default gaAccelerator;
