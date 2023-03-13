# Tailwind web components starter kit

This is a starter kit to develop web components using Tailwind CSS.

Tailwind and web components do not play well together.

We managed to find a way to make them work without hacks or weird tech: just common technologies combined in a elegant way.

No dependencies, based on [lit-element](https://lit.dev/docs/).

## How will you create a tailwind component?

Here is a sample code:

```typescript
import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { TailwindElement } from "../shared/tailwind.element";

import style from "./test.component.scss?inline"; // #1

@customElement("test-component")
export class TestComponent extends TailwindElement(style) {
  // #2

  @property()
  name?: string = "World";

  render() {
    return html`
      <p>
        Hello,
        <b>${this.name}</b>
        !
      </p>
      <button class="bg-blue-200 text-yellow-200 p-2 rounded-full text-2xl">
        Hello world!
      </button>
    `;
  }
}
```

It is based on the [lit element](https://lit.dev/docs/) technology: if you wrote a lit component before, you'll find it familiar.

There are only two differences to a standard _LitElement_:

1. You must import your styles from a separate file. And this is good for two reasons:
   - it separates the CSS from the logic
   - you can decide to use CSS or SCSS
   - note the `?inline` at the end of the file path: if you don't add it, then vite will add the style to the head of the html. If you add it, the style is scoped into the component only
2. the class extends a _TailwindElement_ rather than a LitElement

A _TailwindElement_ extends a _LitElement_ (see below) and adds the logic to integrate tailwind and your styles.

## Get started

To run the project:

1. `pnpm install` (only the first time)
2. `pnpm start` to run the server
3. to develop the library, run `pnpm build` and copy the static assets where you need them.

You may clone this repo and start developing your components by looking at the _test.component_ as reference.

As an alternative, and if you like to have control over every piece, do the following:

1. copy the files in the shared folder:
   - _tailwind.element.ts_ extends LitElement by adding the tailwind support
   - _tailwind.global.css_ includes tha Tailwind base classes into each component
   - _globals.d.ts_ is used to avoid TypeScript errors when importing CSS/Scss files in typescript files (thanks [@emaant96](https://github.com/emaant96))
2. copy the _package.json_ or the devDependencies inside into your own _package.json_ (**there are no dependencies**)
3. copy _postcss.config.js_, _tailwind.config.js_ and _tsconfig.js_

That's all.

## Show me the pieces

If you want to understand how it works, it's simple:

- the **package.json** integrates these technologies:

```json
"autoprefixer": "^10.4.12",
"postcss": "^8.4.18",
"lit": "^2.4.0",
"tailwindcss": "^3.2.0",
"typescript": "^4.8.4",
"vite": "^3.1.8",
"sass": "^1.55.0"
```

- **vite** does almost all the work automatically
- to integrate tailwind, the most important file is in _src/shared/tailwind.element.ts_

```typescript
import { LitElement, unsafeCSS } from "lit";

import style from "./tailwind.global.css";

const tailwindElement = unsafeCSS(style);

export const TailwindElement = (style) =>
  class extends LitElement {
    static styles = [tailwindElement, unsafeCSS(style)];
  };
```

It extends a _LitElement_ class at runtime and adds the component tailwind classes.

The _style_ variable comes from your component, where it is imported from an external CSS (or SCSS) file.

Then it is combined with the default tailwind classes.

If you add more components, the common parts are reused.

## Who uses it?

We developed this starter kit to implement a web session player for our open source SaaS [browserbot](https://browserbot.io/).

If you want to contribute or share some thoughts, just get in touch with us.

Enjoy.

# ymlwebcl-header

## Install

```bash
yarn add ymlwebcl-header
```

```bash
npm i ymlwebcl-header
```

## Usage

## With Vue

### With default value

```js
<template>
  <ymlwebcl-header>
  </ymlwebcl-header>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
}
</style>
```

### With Props

```js
<template>
  <ymlwebcl-header
    :navOptions="navOptions"
  >
  <button slot="notification">Notification</button>
  </ymlwebcl-header>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      navOptions: {
        mode: "dark",
        logo: "https://ymedialabs.atlassian.net/s/1jmxwi/b/8/d35727372e299c952e88a10ef82bbaf6/_/jira-logo-scaled.png",
        logoAltText: "Logo",
        headerText: "YML",
        menuLinks: [
          {
            label: "Home",
            type: "link",
            url: "home",
          },
          {
            label: "Company",
            type: "link",
            url: "company",
          },
          {
            label: "Team",
            type: "link",
            url: "team",
          },
          {
            label: "Map",
            type: "button",
            eventName: "map-click",
          },
        ],
        topRightSlot: {
          slotName: "notification",
        },
      },
    };
  }
};
</script>

<style>
#app {
}
</style>
```

### With Slots and custom events

```js
<template>
  <ymlwebcl-header
    :navOptions="navOptions"
    @handle-setting="handleSetting" /*custom event*/
  >
  /*user defined component passing slot name as a prop*/
  <svg slot="open" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path
        d="M61.1 224C45 224 32 211 32 194.9c0-1.9 .2-3.7 .6-5.6C37.9 168.3 78.8 32 256 32s218.1 136.3 223.4 157.3c.5 1.9 .6 3.7 .6 5.6c0 16.1-13 29.1-29.1 29.1H61.1zM144 128c0-8.8-7.2-16-16-16s-16 7.2-16 16s7.2 16 16 16s16-7.2 16-16zm240 16c8.8 0 16-7.2 16-16s-7.2-16-16-16s-16 7.2-16 16s7.2 16 16 16zM272 96c0-8.8-7.2-16-16-16s-16 7.2-16 16s7.2 16 16 16s16-7.2 16-16zM16 304c0-26.5 21.5-48 48-48H448c26.5 0 48 21.5 48 48s-21.5 48-48 48H64c-26.5 0-48-21.5-48-48zm16 96c0-8.8 7.2-16 16-16H464c8.8 0 16 7.2 16 16v16c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V400z"
      />
    </svg>

    <svg slot="close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path
        d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
      />
    </svg>

    <svg
      slot="notification-icon" /* name of the slot*/
      xmlns="http://www.w3.org/2000/svg"
      fill="white"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      aria-hidden="true"
      @click="handleNotification"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
      />
    </svg>
  </ymlwebcl-header>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      navOptions: {
      openMenuIcon: {
      slotName: 'open',
    },
    closeMenuIcon: {
      slotName: 'close',
    },
      menuLinks: [
      {
        label: 'Setting',
        type: 'button',
        eventName: 'handle-setting', /*Note : event name should be in all lowercase letter or in kebab case format */
      }
      ],

        topRightSlot: {
          slotName: "notification-icon",
        },
      },
    };
  },
  methods: {
    handleNotification() {
      //define method
    },
     handleSetting() {
      //define method
    },
  },
};
</script>

<style>
#app {
}
</style>
```
## With React
React can render Web Components, but it cannot easily pass React props to custom element properties or event listeners. 
This Web-Component wrapper package- (https://www.npmjs.com/package/reactify-wc) correctly passes React props to properties accepted by the custom element and listens for events dispatched by the custom element.

```bash
npm i reactify-wc
```

### With default value
```js
import reactifyWc from "reactify-wc";
function App() {
  const HeaderComponent = reactifyWc("ymlwebcl-header");
  return (
    <div className="App">
      <HeaderComponent></HeaderComponent>
    </div>
  );
}
export default App;
```
### With Props
```js
import reactifyWc from "reactify-wc";
import { useState } from "react";
function App() {
  const HeaderComponent = reactifyWc("ymlwebcl-header");
  const [navOption, setNavOption] = useState({
    mode: "dark",
    logo: "https://ymedialabs.atlassian.net/s/1jmxwi/b/8/d35727372e299c952e88a10ef82bbaf6/_/jira-logo-scaled.png",
    logoAltText: "Logo",
    headerText: "YML",
    menuLinks: [
      {
        label: "Home",
        type: "link",
        url: "home",
      },
      {
        label: "Company",
        type: "link",
        url: "company",
      },
      {
        label: "Team",
        type: "link",
        url: "team",
      },
      {
        label: "Map",
        type: "button",
        eventName: "map-click",
      },
    ]
  });
  return (
    <div className="App">
      <HeaderComponent navOptions={navOption}>
      </HeaderComponent>
    </div>
  );
}
export default App;
```
### With Slots and custom events
```js
import reactifyWc from "reactify-wc";
import { useState } from "react";
function App() {
  const HeaderComponent = reactifyWc("ymlwebcl-header");
  const [navOption, setNavOption] = useState({
    mode: "dark",
    logo: "https://ymedialabs.atlassian.net/s/1jmxwi/b/8/d35727372e299c952e88a10ef82bbaf6/_/jira-logo-scaled.png",
    logoAltText: "Logo",
    headerText: "YML",
     openMenuIcon: {
      slotName: 'open',
    },
    closeMenuIcon: {
      slotName: 'close',
    },
    menuLinks: [
      {
        label: "Home",
        type: "link",
        url: "home",
      },
      {
        label: "Company",
        type: "link",
        url: "company",
      },
      {
        label: "Team",
        type: "link",
        url: "team",
      },
      {
        label: "Map",
        type: "button",
        eventName: "map-click", //custom-event
      },
    ],
    topRightSlot: {
      slotName: "notification",
    },
  });
  const handleMap = () => {
    //define method
  };
  const handleNotification = () => {
    //define method
  };
  return (
    <div className="App">
      {/* Note: prefix 'on-' should be added to custom events */}
      <HeaderComponent on-map-click={handleMap} navOptions={navOption}> 
          <svg slot="open" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path
        d="M61.1 224C45 224 32 211 32 194.9c0-1.9 .2-3.7 .6-5.6C37.9 168.3 78.8 32 256 32s218.1 136.3 223.4 157.3c.5 1.9 .6 3.7 .6 5.6c0 16.1-13 29.1-29.1 29.1H61.1zM144 128c0-8.8-7.2-16-16-16s-16 7.2-16 16s7.2 16 16 16s16-7.2 16-16zm240 16c8.8 0 16-7.2 16-16s-7.2-16-16-16s-16 7.2-16 16s7.2 16 16 16zM272 96c0-8.8-7.2-16-16-16s-16 7.2-16 16s7.2 16 16 16s16-7.2 16-16zM16 304c0-26.5 21.5-48 48-48H448c26.5 0 48 21.5 48 48s-21.5 48-48 48H64c-26.5 0-48-21.5-48-48zm16 96c0-8.8 7.2-16 16-16H464c8.8 0 16 7.2 16 16v16c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V400z"
      />
    </svg>
    <svg slot="close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path
        d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
      />
    </svg>
        <button onClick={handleNotification} slot="notification">
          Notification
        </button>
      </HeaderComponent>
    </div>
  );
}
export default App;
```
## Styling

### Styling the Custom Component
Ref: https://developer.mozilla.org/en-US/docs/Web/CSS/::part

```style.scss
//The ::part CSS pseudo-element represents any element within a shadow tree that has a matching part attribute.
ymlwebcl-header::part(nav) { /*Note : ymlwebcl-header is the custom component and nav is the name given to the the part attribute in element within ymlwebcl-headers */
background: yellow ;
//add css properties
 }
 ymlwebcl-header::part(menu-icon-container) { /*Note : ymlwebcl-header is the custom component and menu-icon-container is the name given to the the part attribute in element within ymlwebcl-headers */
background: yellow ;
//add css properties
 }
```
## Compatibility

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Safari  
| --- | --- | --- | --- |

## Props

<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th>prop</th>
        <th>type</th>
        <th>required</th>
        <th>default</th>
        <th>possible values</th>
        <th>description</th>
    </tr>
    </thead>
    <tbody>
        <tr>
          <td>mode</td>
          <td>String</td>
          <td>no</td>
          <td>dark</td>
          <td>dark, light</td>
          <td>This will apply dark or light theme to header component</td>
        </tr>
        <tr>
          <td>logo</td>
          <td>Url</td>
          <td>no</td>
          <td>https://example.png</td>
          <td></td>
          <td>Brand / Company logo</td>
        </tr>		
        <tr>
          <td>logoAltText</td>
          <td>String</td>
          <td>no</td>
          <td>Company Logo</td>
          <td></td>
          <td>Adds "alt" text to logo</td>
        </tr>
        <tr>
          <td>headerText</td>
          <td>String</td>
          <td>no</td>
          <td>YML</td>
          <td></td>
          <td>Brand / company name</td>
        </tr>
        <tr>
          <td>openMenuIcon.slotName</td>
          <td>String</td>
          <td>no</td>
          <td></td>
          <td></td>
          <td>A Slot which can render a HTMLElement or a component</td>
        </tr>
        <tr>
          <td>closeMenuIcon.slotName</td>
          <td>String</td>
          <td>no</td>
          <td></td>
          <td></td>
          <td>A Slot which can render a HTMLElement or a component</td>
        </tr>
         <tr>
          <td>menuLinks</td>
          <td>Array[object]</td>
          <td>no</td>
          <td></td>
          <td></td>
          <td>An Array of object that allows user to pass menu links</td>
        </tr>
        <tr>
          <td>isMenuOpen</td>
          <td>Boolean</td>
          <td>no</td>
          <td>false</td>
          <td></td>
          <td>To keep menulinks open on mobile view by default.</td>
        </tr>
        <tr>
          <td>topRightSlot.slotName</td>
          <td>String</td>
          <td>no</td>
          <td></td>
          <td></td>
          <td>A Slot which can render a HTMLElement or a component</td>
        </tr>
    </tbody>
</table>

## Menu Links Props

<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th>name</th>
        <th>type</th>
        <th>required</th>
        <th>possible values</th>
        <th>description</th>
    </tr>
    </thead>
    <tbody>
        <tr>
          <td>label</td>
          <td>String</td>
          <td>yes</td>
          <td></td>
          <td>Name of the menu link</td>
        </tr>
        <tr>
          <td>type</td>
          <td>String</td>
          <td>yes</td>
          <td>link | button</td>
          <td>If given 'link', user must provide an url. If given 'button', user must provide an custom event name ('eventName')  </td>
        </tr>
        <tr>
            <td>url</td>
            <td>String</td>
            <td>If type='link', yes else no</td>
            <td></td>
            <td>url</td>
        </tr>
        <tr>
            <td>eventName</td>
            <td>String</td>
            <td>If type='button', yes else no</td>
            <td></td>
            <td>custom event name triggered on click of a button</td>
      </tr>
    </tbody>
</table>

## Accessibility

Throughout the development of this component proper a11y options are set. This means things like aria-expanded , aria-label, aria-current, aria-control are set and any user can use the header component easily.

## Theming

User has the option to select dark or light mode of our header component by passing a 'mode' prop. By default the header component is using dark mode. 

## Localization

Header component supports localization, currently supports English[en], Spanish[es-419] and Chinese[zh-Hans]

