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

# media-component

## Install

```bash
yarn add media-component
```

```bash
npm i media-component
```

## Usage

## With Vue

### With default value

```js
<template>
  <media-component >
  </media-component>
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
  <media-component mediaTitle="media Component" >
  </media-component>
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

### With Slot

```js
 <template>
  <media-component
    mediaTitle="Chip Component"
    imageSlotName="imageSlot"
    staticContentSlotName="staticContent"
    iconSlotName="iconSlot"
  >
    <div slot="imageSlot">
      <svg
        width="80px"
        height="80px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 22H22"
          stroke="#292D32"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M2.94995 22L2.99995 9.96999C2.99995 9.35999 3.28995 8.78004 3.76995 8.40004L10.77 2.95003C11.49 2.39003 12.5 2.39003 13.23 2.95003L20.23 8.39003C20.72 8.77003 21 9.34999 21 9.96999V22"
          stroke="#292D32"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <div slot="staticContent">
      <p>Emotion</p>
      <p>Time</p>
    </div>
    <div slot="iconSlot">
      <svg
        width="20px"
        height="20px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17 3C18.1046 3 19 3.89543 19 5L19 19.0536C19 20.5893 17.341 21.552 16.0077 20.7901L12.9923 19.067C12.3774 18.7157 11.6226 18.7157 11.0077 19.067L7.99228 20.7901C6.65897 21.552 5 20.5893 5 19.0536L5 5C5 3.89543 5.89543 3 7 3L17 3Z"
          stroke="#323232"
          stroke-width="2"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  </media-component>
</template>

<script>
export default {
  name: "App",
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
  const MediaComponent = reactifyWc("media-component");

  return (
    <div className="App">
      <MediaComponent/>
    </div>
  );
}
export default App;
```

### With Props
```js
import reactifyWc from "reactify-wc";
function App() {
  const MediaComponent = reactifyWc("media-component");

  return (
    <div className="App">
      <MediaComponent mediaTitle="Media Component"/>
    </div>
  );
}
export default App;
```

### With Slots
```js
import reactifyWc from "reactify-wc";
function App() {
  const MediaComponent = reactifyWc("media-component");

  return (
    <div className="App">
      <MediaComponent
        mediaTitle={"Chip Component"}
        imageSlotName={"imageSlot"}
        staticContentSlotName={"staticContent"}
        iconSlotName={"iconSlot"}
      >
        <div slot="imageSlot">
          <svg
            width="80px"
            height="80px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 22H22"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M2.94995 22L2.99995 9.96999C2.99995 9.35999 3.28995 8.78004 3.76995 8.40004L10.77 2.95003C11.49 2.39003 12.5 2.39003 13.23 2.95003L20.23 8.39003C20.72 8.77003 21 9.34999 21 9.96999V22"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div slot="staticContent">
          <p>Emotion</p>
          <p>Time</p>
        </div>
        <div slot="iconSlot">
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 3C18.1046 3 19 3.89543 19 5L19 19.0536C19 20.5893 17.341 21.552 16.0077 20.7901L12.9923 19.067C12.3774 18.7157 11.6226 18.7157 11.0077 19.067L7.99228 20.7901C6.65897 21.552 5 20.5893 5 19.0536L5 5C5 3.89543 5.89543 3 7 3L17 3Z"
              stroke="#323232"
              stroke-width="2"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </MediaComponent>
    </div>
  );
}
export default App;
```

### Styling the Custom Component
Ref: https://developer.mozilla.org/en-US/docs/Web/CSS/::part

```style.scss
//The ::part CSS pseudo-element represents any element within a shadow tree that has a matching part attribute.

media-component::part(webcl-media) { /*Note : media-component is the custom component and webcl-media is the name given to the the part attribute in element within webcl-component */
 padding: 1rem;
 gap: 1.5rem;
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
          <td>mediaTitle</td>
          <td>String</td>
          <td>no</td>
          <td>Title</td>
          <td></td>
          <td>to add title  </td>
        </tr>
        <tr>
          <td>imageSlotName</td>
          <td>String</td>
          <td>no</td>
          <td></td>
          <td></td>
          <td>the slot name for image slot </td>
        </tr>		
        <tr>
          <td>staticContentSlotName</td>
          <td>String</td>
          <td>no</td>
          <td></td>
          <td></td>
          <td>the slot name for static content slot</td>
        </tr>
          <tr>
          <td>iconSlotName</td>
          <td>String</td>
          <td>no</td>
          <td></td>
          <td></td>
          <td>the slot name for icon slot   </td>
        </tr>
         <tr>
          <td>mediaPartAttribute</td>
          <td>String</td>
          <td>no</td>
          <td>webcl-media</td>
          <td></td>
          <td>The part name for media component</td>
        </tr>
           <tr>
          <td>textPartAttribute</td>
          <td>String</td>
          <td>no</td>
          <td>media-text-container</td>
          <td></td>
          <td>The part name for text container</td>
        </tr>
          <tr>
          <td>titlePartAttribute</td>
          <td>String</td>
          <td>no</td>
          <td>media-title-container</td>
          <td></td>
          <td>The part name for title </td>
        </tr>
    </tbody>
</table>

## Accessibility

Throughout the development of this component proper a11y options are set. This means things like aria-expanded , aria-label, aria-current, aria-control are set and any user can use the media component easily.

## Localization

media component supports localization, currently supports English[en], Spanish[es-419] and Chinese[zh-Hans]