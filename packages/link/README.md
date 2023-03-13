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

# ymlwebcl-link

## Install

```bash
yarn add ymlwebcl-link
```

```bash
npm i ymlwebcl-link
```

## Usage

## With Vue

### With default value

```js
<template>
  <ymlwebcl-link>
  </ymlwebcl-link>
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
    <ymlwebcl-link
    text="Anchor tag with props"
    linkTitle="tool tip"
    href="https://www.w3schools.com/html/html_links.asp"
    target="_blank"
    rel="noopener noreferrer"
    type="button"
  ></ymlwebcl-link>
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

### With Slots

```js
<template>
    <ymlwebcl-link
    text="Anchor tag with props"
    linkTitle="tool tip"
    href="https://www.w3schools.com/html/html_links.asp"
    target="_blank"
    rel="noopener noreferrer"
    type="button"
    slotName="slot"
  >
    <div slot="slot">
      <img
        src="https://www.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg"
        alt=""
      />
    </div>
  </ymlwebcl-link>
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
  const LinkComponent = reactifyWc("ymlwebcl-link");
  return (
    <div className="App">
      <LinkComponent></LinkComponent>
    </div>
  );
}
export default App;
```

### With Props

```js
import reactifyWc from "reactify-wc";
function App() {
  const LinkComponent = reactifyWc("ymlwebcl-link");
  return (
    <div >
      <LinkComponent
        text="Anchor tag with props"
        linkTitle="tool tip"
        href="https://www.w3schools.com/html/html_links.asp"
        target="_blank"
        rel="noopener noreferrer"
        type="button" // by default type is link
      ></LinkComponent>
    </div>
  );
}
export default App;
```

### With Slots 
```js
import reactifyWc from "reactify-wc";
function App() {
  const LinkComponent = reactifyWc("ymlwebcl-link");
  return (
    <div >
      <LinkComponent
        text="Anchor tag with props"
        linkTitle="tool tip"
        href="https://www.w3schools.com/html/html_links.asp"
        target="_blank"
        rel="noopener noreferrer"
        type="button"
        slotName="slot"
      >
          <div slot="slot">
         <img
            src="https://www.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg"
            alt=""
          ></img>
        </div>
      </LinkComponent>
    </div>
  );
}
export default App;
```

### Styling the Custom Component
Ref: https://developer.mozilla.org/en-US/docs/Web/CSS/::part

```style.scss
//The ::part CSS pseudo-element represents any element within a shadow tree that has a matching part attribute.

ymlwebcl-link::part(custom-link) { /*Note : ymlwebcl-link is the custom component and custom-link is the name given to the the part attribute in element within ymlwebcl-links */
 color: black;
 text-decoration: none;
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
          <td>text</td>
          <td>String</td>
          <td>no</td>
          <td>Click Here</td>
          <td></td>
          <td>This will add text to the anchor tag</td>
        </tr>
        <tr>
          <td>linkTitle</td>
          <td>String</td>
          <td>no</td>
          <td></td>
          <td></td>
          <td>The title attribute specifies extra information about an element.
              The information is most often shown as a tooltip text when the mouse moves over the element.
          </td>
        </tr>		
        <tr>
          <td>href</td>
          <td>String</td>
          <td>no</td>
          <td>#</td>
          <td></td>
          <td>The most important attribute of the <a> element is the href attribute, which indicates the link's destination.</td>
        </tr>
        <tr>
          <td>rel</td>
          <td>String</td>
          <td>no</td>
          <td></td>
          <td>alternate | author | bookmark | external | help | license | next | nofollow | noopener | noreferrer | prev | search | tag | framename</td>
          <td>The rel attribute specifies the relationship between the current document and the linked document.
              Only used if the href attribute is present.
          </td>
        </tr>
        <tr>
          <td>target</td>
          <td>string</td>
          <td>no</td>
          <td>_self</td>
          <td>_blank | _self | _parent | _top | framename </td>
          <td>The target attribute specifies where to open the linked document.</td>
        </tr>
        <tr>
          <td>type</td>
          <td>String</td>
          <td>no</td>
          <td>link</td>
          <td>link | button</td>
          <td>by default anchor tag will just have a text without any styling, but if type is given as a button, UI changes to that of a button </td>
        </tr>
        <tr>
          <td>slotName</td>
          <td>String</td>
          <td>no</td>
          <td></td>
          <td></td>
          <td>A Slot which can render a HTMLElement or a component</td>
        </tr>
    </tbody>
</table>

## Accessibility

Throughout the development of this component proper a11y options are set. This means things like aria-expanded , aria-label, aria-current, aria-control are set and any user can use the link component easily.

## Localization

Link component supports localization, currently supports English[en], Spanish[es-419] and Chinese[zh-Hans]