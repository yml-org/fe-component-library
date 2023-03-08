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

# ymlwebcl-scroll

## Install

```bash
yarn add ymlwebcl-scroll
```

```bash
npm i ymlwebcl-scroll
```

## Usage

## With Vue

### With Props

```js
<template>
  <ymlwebcl-scroll
    :desktopImages="desktopImages"
    :mobileImages="mobileImages"
  >
  </ymlwebcl-scroll>
</template>

<script >
export default {
  name: "App",
  data() {
    return {

      //Add images as an object
      desktopImages: {
        "desktopImage-1": require("./assets/desktop/desktopImage-1.avif"),
        "desktopImage-2": require("./assets/desktop/desktopImage-1.avif"),
      },

      mobileImages: {
        "mobileImages-1": require("./assets/mobile/desktopImage-1.avif"),
        "mobileImages-2": require("./assets/mobile/desktopImage-1.avif"),
      },
    };
  },
};
</script>

<style>
</style>
```

### With Slot

```js
<template>
  <ymlwebcl-scroll
    :dataSlot="dataSlot"
    :desktopImages="desktopImages"
    :mobileImages="mobileImages"
  >
    <div slot="slot1">
       <p>The Scroll Transition Component</p>
    </div>

    <div slot="slot2">
      <h5>OUR LIGHTEST BOTTLE YET</h5>
    </div>
  </ymlwebcl-scroll>
  <router-view />
</template>

<script >
export default {
  name: "App",
  data() {
    return {
      desktopImages: {
        "desktopImage-1": require("./assets/desktop/desktopImage-1.avif"),
        "desktopImage-2": require("./assets/desktop/desktopImage-2.avif"),
        "desktopImage-3": require("./assets/desktop/desktopImage-3.avif"),
        "desktopImage-4": require("./assets/desktop/desktopImage-4.avif"),
      },

      mobileImages: {
        "mobileImages-1": require("./assets/mobile/mobileImages-1.avif"),
        "mobileImages-2": require("./assets/mobile/mobileImages-2.avif"),
        "mobileImages-3": require("./assets/mobile/mobileImages-3.avif"),
        "mobileImages-4": require("./assets/mobile/mobileImages-4.avif"),  
      },
         dataSlot: [
        {
          dataStart: 1,
          dataEnd: 2,
          slotName: "slot1",
        },
        {
          dataStart: 3,
          dataEnd: 4,
          slotName: "slot2",
        },
      ],
    };
  },
};
</script>

<style>
</style>
```

## With React
React can render Web Components, but it cannot easily pass React props to custom element properties or event listeners. 
This Web-Component wrapper package- (https://www.npmjs.com/package/reactify-wc) correctly passes React props to properties accepted by the custom element and listens for events dispatched by the custom element.

```bash
npm i reactify-wc
```

### With Props

```js
import reactifyWc from "reactify-wc";

function App() {
  const ScrollComponent = reactifyWc("ymlwebcl-scroll");

  const desktopImages = {
    "desktopImage-1": require("./assets/desktop/desktopImage-1.avif"),
    "desktopImage-2": require("./assets/desktop/desktopImage-2.avif"),
  };

  const mobileImages = {
    "mobileImages-1": require("./assets/mobile/mobileImages-1.avif"),
    "mobileImages-2": require("./assets/mobile/mobileImages-2.avif"),
  };

  return (
    <div className="App">
      <ScrollComponent
        desktopImages={desktopImages}
        mobileImages={mobileImages}
      >
      </ScrollComponent>
    </div>
  );
}
export default App;
```

### With Slot

```js
import reactifyWc from "reactify-wc";

function App() {
  const ScrollComponent = reactifyWc("ymlwebcl-scroll");

  const desktopImages = {
    "desktopImage-1": require("./assets/desktop/desktopImage-1.avif"),
    "desktopImage-2": require("./assets/desktop/desktopImage-2.avif"),
    "desktopImage-3": require("./assets/desktop/desktopImage-3.avif"),
    "desktopImage-4": require("./assets/desktop/desktopImage-4.avif"),
  };

  const mobileImages = {
    "mobileImages-1": require("./assets/mobile/mobileImages-1.avif"),
    "mobileImages-2": require("./assets/mobile/mobileImages-2.avif"),
    "mobileImages-3": require("./assets/mobile/mobileImages-3.avif"),
    "mobileImages-4": require("./assets/mobile/mobileImages-4.avif"),  
  };

  const dadaSlot = [
    {
      dataStart: 1,
      dataEnd: 2,
      slotName: "slot1",
    },
    {
      dataStart: 3,
      dataEnd: 4,
      slotName: "slot2",
    },   
  ]

  return (
    <div className="App">
      <ScrollComponent
        desktopImages={desktopImages}
        mobileImages={mobileImages}
        dataSlot={dadaSlot}
      >
        <div slot="slot1">
         <p>The Scroll Transition Component</p>
        </div>
        <div slot="slot2">
        <p>For cool image transition</p>
        </div>
      </ScrollComponent>
    </div>
  );
}
export default App;
```

### Styling the Custom Component
Ref: https://developer.mozilla.org/en-US/docs/Web/CSS/::part

```style.scss
//The ::part CSS pseudo-element represents any element within a shadow tree that has a matching part attribute.

ymlwebcl-scroll::part(slot1){ /*Note : ymlwebcl-scroll is the custom component and slot1 is the name given to the the part attribute in element within ymlwebcl-scroll by the user in the dataSlot slotName */
font-size: 50px;
top: 25vh;
//add css properties
 }

ymlwebcl-scroll::part(slot2){
  font-size: 40px;
  top: 70vh;
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
        <th>description</th>
    </tr>
    </thead>
    <tbody>	
        <tr>
          <td>desktopImages</td>
          <td>Object</td>
          <td>yes</td>
          <td></td>
          <td>The object having key value pair of image name and it's path for desktop</td>
        </tr>
        <tr>
          <td>mobileImages</td>
          <td>Object</td>
          <td>yes</td>
          <td></td>
          <td>The object having key value pair of image name and it's path for mobile </td>
        </tr>
        </tr>
         <tr>
          <td>textSlot</td>
          <td>Array[object]</td>
          <td>no</td>
          <td></td>
          <td>Slot provided to the user to insert custom elements</td>
        </tr>
    </tbody>
</table>

## Text Slot Props

<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th>name</th>
        <th>type</th>
        <th>required</th>
        <th>description</th>
    </tr>
    </thead>
    <tbody>
        <tr>
          <td>dataStart</td>
          <td>Number</td>
          <td>yes</td>
          <td>From which image number, the custom element should start coming up on screen while scrolling</td>
        </tr>
        <tr>
            <td>dataEnd</td>
            <td>Number</td>
            <td>yes</td>
            <td>From which image number, the custom element should go off the screen while scrolling </td>
        </tr>
        <tr>
            <td>slotName</td>
            <td>String</td>
            <td>yes</td>
            <td>The name of the slot which renders a HTMLElement or a component</td>
      </tr>
    </tbody>
</table>
