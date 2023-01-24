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

A _TailwindElement_ extends a _LitElmement_ (see below) and adds the logic to integrate tailwind and your styles.

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
   - _globals.d.ts_ is used to avoid TypeScript errors whe nimporting CSS/Scss files in typescript files (thanks [@emaant96](https://github.com/emaant96))
2. copy the _package.json_ or the devDependencies inside into your own _package.json_ (**there are no dependencies**)
3. copy _postcss.config.js_, _tailwind.config.js_ and _tsconfig.js_

That's all.

## Show me the pieces

If you want to understand how it works, it's simple:

- the **package.json** integrates these technolgies:

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

If you want to contribute or share soem thoughts, just get in touch with us.

Enjoy.


# image-component

## Install

```bash
yarn add image-component
```

```bash
npm i image-component
```

## Usage

## With Vue

### With default value

```js
<template>
  <image-component :src="src">    
  </image-component>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
    src:"https://mdbootstrap.com/img/new/standard/city/047.jpg",
    };
}
};
</script>

```

### With Props

```js
<template>
  <image-component
    :src="src"
    :altText="altText"
    :placeholderImg="placeholderImg"
    :size="size"
  >
  </image-component>
  <router-view />
</template>

<script>
export default {
  name: "App",
  data() {
    return {
    src:"https://mdbootstrap.com/img/new/standard/city/047.jpg",
      placeholderImg:"https://mdbootstrap.com/img/new/standard/city/047.jpg",
      altText:"my image",
      size:{
    width:'500px',
    height:'500px',
    rounded:true,
    border:{
      type:'solid',
      color:'#000',
      width:'2px'
    },
    objectFit:'fill',
    minWidth:'100px',
    maxHeight:'100%'
  }
  };
}
 
};
</script>
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
  const ImageComponent = reactifyWc("image-component");
  return (
    <div className="App">
      <ImageComponent 
      src="https://mdbootstrap.com/img/new/standard/city/047.jpg">
      </ImageComponent>
    </div>
  );
}
export default App;
```
### With Props
```js
import reactifyWc from "reactify-wc";
import "./index.css";

function App() {
  const ImageComponent = reactifyWc("image-component");
  const size = {
    width: "500px",
    height: "500px",
    rounded: true,
    border: {
      type: "solid",
      color: "#000",
      width: "2px",
    },
    objectFit: "fill",
    minWidth: "100px",
    maxHeight: "100%",
  };

  return (
    <div className="App">
      <ImageComponent
        src="https://mdbootstrap.com/img/new/standard/city/047.jpg"
        placeholderImg="https://mdbootstrap.com/img/new/standard/city/047.jpg"
        altText="my image"
        size={size}
      ></ImageComponent>
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
image-component::part(custom-image) { /*Note : image-component is the custom component and custom-image is the name given to the the part attribute for 'img' tag within image-components */
border: 5px solid red;
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
          <td>src</td>
          <td>String</td>
          <td>yes</td>
          <td></td>
          <td></td>
          <td>This will the source path for image</td>
        </tr>
        <tr>
          <td>placeholderImg</td>
          <td>String</td>
          <td>no</td>
          <td></td>
          <td></td>
          <td>image, used to display before the load of actual source image on screen</td>
        </tr>		
        <tr>
          <td>altText</td>
          <td>String</td>
          <td>no</td>
          <td>image</td>
          <td></td>
          <td>Adds "alt" text to image</td>
        </tr>
        <tr>
          <td>size.width</td>
          <td>String</td>
          <td>no</td>
          <td></td>
          <td></td>
          <td>Adds width to the image</td>
        </tr>
        <tr>
          <td>size.height</td>
          <td>String</td>
          <td>no</td>
          <td>auto</td>
          <td></td>
          <td>Adds height to the image</td>
        </tr>
        <tr>
          <td>size.maxWidth</td>
          <td>String</td>
          <td>no</td>
          <td></td>
          <td></td>
          <td>Adds max width to the image</td>
        </tr>
         <tr>
          <td>size.maxHeight</td>
          <td>String</td>
          <td>no</td>
          <td></td>
          <td></td>
          <td>Adds max Height to the image</td>
        </tr>
        <tr>
          <td>size.rounded</td>
          <td>Boolean</td>
          <td>no</td>
          <td>false</td>
          <td></td>
          <td>Adds border-radius to the image.</td>
        </tr>
        <tr>
          <td>size.objectFit</td>
          <td>String</td>
          <td>no</td>
          <td></td>
          <td></td>
          <td>Adds object-fit styling to the image</td>
        </tr>
        <tr>
          <td>size.border.type</td>
          <td>String</td>
          <td>no</td>
          <td></td>
          <td>| 'dotted' | 'dashed' | 'double' | 'none' | 'groove' | 'ridge' | 'inset' | 'outset'</td>
          <td>Adds border-type styling to the image</td>
        </tr>
        <tr>
          <td>size.border.color</td>
          <td>String</td>
          <td>no</td>
          <td></td>
          <td>'contain' | 'fill' | 'scale-down' | 'fit' | 'none' | 'cover'</td>
          <td>Adds border-color styling to the image</td>
        </tr>
        <tr>
          <td>size.border.width</td>
          <td>String</td>
          <td>no</td>
          <td></td>
          <td></td>
          <td>Adds border-width styling to the image</td>
        </tr>
    </tbody>
</table>


## Accessibility

Throughout the development of this component proper a11y options are set. This means things like role, type are set and any user can use the image component easily.

## Localization

Image component supports localization, currently supports English[en], Spanish[es-419] and Chinese[zh-Hans]




