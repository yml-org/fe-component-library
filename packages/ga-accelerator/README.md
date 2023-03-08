## Get started

# ga-accelerator

This is a JavaScript module that provides a simple and efficient way to install and use Google Analytics on your website. It offers two different installation methods: one with cookies and one without. Additionally, it provides a wrapper function to simplify sending analytics events to Google Analytics.

## Install

```bash
yarn add ga-accelerator
```

```bash
npm i --save ga-accelerator
```

## Usage

To use gaAccelerator in your project, after installing, import it using the following command:

import { ymlGaAccelerator, ymlGaInstall, ymlGaCookieLessInstall } from 'ga-accelerator';

To install Google Analytics using gaAccelerator, you can use either ymlGaInstall or ymlGaCookieLessInstall depending on whether you want to use cookies or not. Both methods take the tracking ID for your Google Analytics account as their first argument. The second argument is an optional object that allows you to specify additional configuration options for Google Analytics.

// Install Google Analytics with cookies
// Substitute your tracking ID (begins with "G-", "UA-", "AW-" or "DC-")
ymlGaInstall('G-##########', {
  // additional configuration options here
});

To specify additional config info for the initialization (for instance to disable page view measurement):

ymlGaInstall('G-##########', { 'send_page_view': false });

// Install Google Analytics without cookies
// Substitute your tracking ID (begins with "G-", "UA-", "AW-" or "DC-")
ymlGaCookieLessInstall('G-##########');


// Send an event to Google Analytics
To send events to Google Analytics, you can use the ymlGaAccelerator function. 
To use ymlGaAccelerator to send an event to Google Analytics, you can call the function and pass three arguments.

The first argument is the string 'event', which specifies that this is an event. The second argument is the name of the event, in this case 'click'. The third argument is an object that contains any additional data associated with the event. In this example, the object contains a key-value pair of 'element': 'button', which specifies the value of the element dimension is 'button', which indicates that a button was clicked.

ymlGaAccelerator('event', 'click', { 'element': 'button' });

Refer Google's documentation for more specification and usage of ymlGaAccelerator() :
https://developers.google.com/tag-platform/gtagjs/configure
