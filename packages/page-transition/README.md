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

# flick-to-transition-component

## Install

```bash
yarn add transition-component
```

```bash
npm i transition-component
```

## Usage

## With Vue

### With default value and slot

```js
<template>
  <!-- Note: User can give any name to the slot but make sure to add the same name in the componentArray prop -->
  <transition-component :componentArray="['slot1', 'slot2', 'slot3']">
    <!-- Note: Wrap the component within container element containing the slot attribute -->
    <div slot="slot1">
      <div style="width: 100vw; height: 100vh">
        <p>company</p>
        <img
          style="width: 100vw; height: 90vh"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png"
          alt=""
        />
      </div>
    </div>
    <div slot="slot2">
      <div style="width: 100vw; height: 100vh">
        <p>team</p>
        <img
          style="width: 100vw; height: 90vh"
          src="https://www.w3schools.com/css/img_forest.jpg"
          alt=""
        />
      </div>
    </div>
    <div slot="slot3">
      <div style="width: 100vw; height: 100vh">
        <p>home</p>
        <img
          style="width: 100vw; height: 90vh"
          src="https://static.toiimg.com/thumb/msid-44945486,width-1070,height-580,resizemode-75,imgsize-44945486,pt-32,y_pad-40/44945486.jpg"
          alt=""
        />
      </div>
    </div>
  </transition-component>
</template>
<script>
export default {
  name: "App",
};
</script>
<style >
</style>
```

### With Props

```js
<template>
  <transition-component 
    :componentArray="['slot1', 'slot2', 'slot3']" 
    :allowCircularSwipe="true" 
    :animationDuration=3 
    :animationDelay=2 
    backgroundColor="#ececec">
      <div slot="slot1">
      <div style="width: 100vw; height: 100vh">
        <p>company</p>
        <img
          style="width: 100vw; height: 90vh"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png"
          alt=""
        />
      </div>
    </div>
    <div slot="slot2">
      <div style="width: 100vw; height: 100vh">
        <p>team</p>
        <img
          style="width: 100vw; height: 90vh"
          src="https://www.w3schools.com/css/img_forest.jpg"
          alt=""
        />
      </div>
    </div>
    <div slot="slot3">
      <div style="width: 100vw; height: 100vh">
        <p>home</p>
        <img
          style="width: 100vw; height: 90vh"
          src="https://static.toiimg.com/thumb/msid-44945486,width-1070,height-580,resizemode-75,imgsize-44945486,pt-32,y_pad-40/44945486.jpg"
          alt=""
        />
      </div>
    </div>
  </transition-component>
</template>
<script>
export default {
  name: "App",
};
</script>
<style>
</style>
```

### With custom event

```js
<template>
    <!-- Note: User can give any name to the callbackEvent but it need to be in kebab-case and same name should be used while using the custom event as shown in the example below. -->
  <transition-component :componentArray="['slot1', 'slot2', 'slot3']"  callbackEvent="on-custom-callback" @on-custom-callback="handleCallBack">
    <div slot="slot1">
      <div style="width: 100vw; height: 100vh">
        <p>company</p>
        <img
          style="width: 100vw; height: 90vh"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png"
         alt=""
        />
      </div>
    </div>
    <div slot="slot2">
      <div style="width: 100vw; height: 100vh">
        <p>team</p>
        <img
          style="width: 100vw; height: 90vh"
          src="https://www.w3schools.com/css/img_forest.jpg"
          alt=""
        />
      </div>
    </div>
    <div slot="slot3">
      <div style="width: 100vw; height: 100vh">
        <p>home</p>
        <img
          style="width: 100vw; height: 90vh"
          src="https://static.toiimg.com/thumb/msid-44945486,width-1070,height-580,resizemode-75,imgsize-44945486,pt-32,y_pad-40/44945486.jpg"
          alt=""
        />
      </div>
    </div>
  </transition-component>
</template>
<script>
export default {
  name: "App",
  methods : {
    handleCallBack() {
     //define function
    }
  }
};
</script>
<style >
</style>
```

## With React
React can render Web Components, but it cannot easily pass React props to custom element properties or event listeners. 
This Web-Component wrapper package- (https://www.npmjs.com/package/reactify-wc) correctly passes React props to properties accepted by the custom element and listens for events dispatched by the custom element.

```bash
npm i reactify-wc
```

### With default value and slot
```js
import reactifyWc from "reactify-wc";
function App() {
  const TransitionComponent = reactifyWc("transition-component");
  const compArray = ["slot1", "slot2", "slot3"];
  return (
    <div className="App">
      <TransitionComponent compArray={compArray}>
        <div slot="slot1">
          <div style={{ width: "100vw", height: "100vh" }}>
            <p>company</p>
            <img
              style={{ width: "100vw", height: "90vh" }}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png"
              alt=""
            />
          </div>
        </div>
        <div slot="slot2">
          <div style={{ width: "100vw", height: "100vh" }}>
            <p>team</p>
            <img
              style={{ width: "100vw", height: "90vh" }}
              src="https://www.w3schools.com/css/img_forest.jpg"
              alt=""
            />
          </div>
        </div>
        <div slot="slot3">
          <div style={{ width: "100vw", height: "100vh" }}>
            <p>home</p>
            <img
              style={{ width: "100vw", height: "90vh" }}
              src="https://static.toiimg.com/thumb/msid-44945486,width-1070,height-580,resizemode-75,imgsize-44945486,pt-32,y_pad-40/44945486.jpg"
              alt=""
            />
          </div>
        </div>
      </TransitionComponent>
    </div>
  );
}
export default App;

```

### With Props

```js
import reactifyWc from "reactify-wc";
function App() {
  const TransitionComponent = reactifyWc("transition-component");
  const compArray = ["slot1", "slot2", "slot3"];
  return (
    <div className="App">
      <TransitionComponent
        compArray={compArray}
        animationDuration={3}
        animationDelay={2}
        allowCircularSwipe={true}
        backgroundColor={"#ececec"}
      >
        <div slot="slot1">
          <div style={{ width: "100vw", height: "100vh" }}>
            <p>company</p>
            <img
              style={{ width: "100vw", height: "90vh" }}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png"
              alt=""
            />
          </div>
        </div>
        <div slot="slot2">
          <div style={{ width: "100vw", height: "100vh" }}>
            <p>team</p>
            <img
              style={{ width: "100vw", height: "90vh" }}
              src="https://www.w3schools.com/css/img_forest.jpg"
              alt=""
            />
          </div>
        </div>
        <div slot="slot3">
          <div style={{ width: "100vw", height: "100vh" }}>
            <p>home</p>
            <img
              style={{ width: "100vw", height: "90vh" }}
              src="https://static.toiimg.com/thumb/msid-44945486,width-1070,height-580,resizemode-75,imgsize-44945486,pt-32,y_pad-40/44945486.jpg"
              alt=""
            />
          </div>
        </div>
      </TransitionComponent>
    </div>
  );
}
export default App;
```

### With custom event 
```js
import reactifyWc from "reactify-wc";
function App() {
  const TransitionComponent = reactifyWc("transition-component");
  const compArray = ["slot1", "slot2", "slot3"];
  const handleCallback = () => {
    //define the function
  };
  return (
    <div className="App">
      <TransitionComponent
        compArray={compArray}
        //Note: User can give any name to the callbackEvent but need to use same name while using the custom event with prefix 'on-' as shown in the example below.
        callbackEvent={"callbackFunction"}
        on-callbackFunction={handleCallback}
      >
        <div slot="slot1">
          <div style={{ width: "100vw", height: "100vh" }}>
            <p>company</p>
            <img
              style={{ width: "100vw", height: "90vh" }}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png"
              alt=""
            />
          </div>
        </div>
        <div slot="slot2">
          <div style={{ width: "100vw", height: "100vh" }}>
            <p>team</p>
            <img
              style={{ width: "100vw", height: "90vh" }}
              src="https://www.w3schools.com/css/img_forest.jpg"
              alt=""
            />
          </div>
        </div>
        <div slot="slot3">
          <div style={{ width: "100vw", height: "100vh" }}>
            <p>home</p>
            <img
              style={{ width: "100vw", height: "90vh" }}
              src="https://static.toiimg.com/thumb/msid-44945486,width-1070,height-580,resizemode-75,imgsize-44945486,pt-32,y_pad-40/44945486.jpg"
              alt=""
            />
          </div>
        </div>
      </TransitionComponent>
    </div>
  );
}
export default App;
```

### Styling the Custom Component
Ref: https://developer.mozilla.org/en-US/docs/Web/CSS/::part

```style.scss
//The ::part CSS pseudo-element represents any element within a shadow tree that has a matching part attribute.

transition-component::part(flick-to-transition-container){ /*Note : transition-component is the custom component and flick-to-transition-container is the name given to the the part attribute in element within transition-component */
background: black;
//add css properties
 }
```

## Compatibility

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Safari  
| --- | --- | --- |


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
          <td>componentArray</td>
          <td>Array</td>
          <td>yes</td>
          <td>['slot1','slot2','slot3']</td>
          <td></td>
          <td>This is an array containing slot names given to the container element of each components</td>
        </tr>
        <tr>
          <td>disableSwipeNext</td>
          <td>boolean</td>
          <td>no</td>
          <td>false</td>
          <td>true | false</td>
          <td>Flag to disable swipe next function 
          </td>
        </tr>		
        <tr>
          <td>disableSwipePrev</td>
          <td>boolean</td>
          <td>no</td>
          <td>false</td>
          <td>true | false</td>
          <td>Flag to disable swipe previous function</td>
        </tr>
        <tr>
          <td>animationDuration</td>
          <td>number</td>
          <td>no</td>
          <td>1</td>
          <td></td>
          <td>Speed at which new component should appear </td>
        </tr>
        <tr>
          <td>animationDelay</td>
          <td>number</td>
          <td>no</td>
          <td>1</td>
          <td></td>
          <td>time to delay the animation in which new component appears </td>
        </tr>
        <tr>
          <td>allowCircularSwipe</td>
          <td>boolean</td>
          <td>no</td>
          <td>false</td>
          <td>true | false</td>
          <td>Flag to determine whether the components should form a loop or not</td>
        </tr>
        <tr>
          <td>callbackEvent</td>
          <td>string</td>
          <td>no</td>
          <td></td>
          <td></td>
          <td>Custom event that gets fired on swipe next function</td>
        </tr>
            <tr>
          <td>scrollDirection</td>
          <td>string</td>
          <td>no</td>
          <td>vertical</td>
          <td> vertical | horizontal</td>
          <td>The direction in which transition should occur</td>
        </tr>
            <tr>
          <td>backgroundColor</td>
          <td>string</td>
          <td>no</td>
          <td>#ffffff</td>
          <td></td>
          <td>background for the parent container element</td>
        </tr>
    </tbody>
</table>
