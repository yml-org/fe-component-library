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



# ymlwebcl-video

## Install

```bash
yarn add ymlwebcl-video
```

```bash
npm i ymlwebcl-video
```

## Usage

## With Vue

### With default value

```js
<template>
  <ymlwebcl-video :src="src">    
  </ymlwebcl-video>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
    src:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    };
}
};
</script>

```

### With Props

```js
<template>
  <ymlwebcl-video
    :src="src"
    :poster="poster"
    :playbackRates="playbackRates"
    :captions="captions"
    :aspectRatio="aspectRatio"
    :seekTo="seekTo"
    :customSeekEvent="customSeekEvent""
    @handleSeek="handleSeek"
  >
  </ymlwebcl-video>
  <router-view />
</template>

<script>
export default {
  methods: {
    handleSeek() {
        console.log("Inside seek")
    }
  },
  name: "App",
  data() {
    return {
        src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        poster:
        'https://upload.wikimedia.org/wikipedia/commons/6/69/Big_Buck_Bunny_-_forest.jpg',
        playbackRates: [0.25, 0.5, 1, 1.5, 2, 2.5, 3],
        aspectRatio: '16:9',
        captions: [
            {
            srcTrack:
                'https://gist.githubusercontent.com/samdutton/ca37f3adaf4e23679957b8083e061177/raw/e19399fbccbc069a2af4266e5120ae6bad62699a/sample.vtt',
            kind: 'captions',
            srcLang: 'en',
            label: 'English',
            },
        ],
        seekTo: '60',
        customSeekEvent: 'handleSeek',
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
  const VideoComponent = reactifyWc("ymlwebcl-video");
  return (
    <div className="App">
      <VideoComponent 
      src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4">
      </VideoComponent>
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
  const VideoComponent = reactifyWc("ymlwebcl-video");
  const captions = [
    {
        srcTrack:
            'https://gist.githubusercontent.com/samdutton/ca37f3adaf4e23679957b8083e061177/raw/e19399fbccbc069a2af4266e5120ae6bad62699a/sample.vtt',
        kind: 'captions',
        srcLang: 'en',
        label: 'English',
    },
  ]

  const customSeekEvent = () => {
  console.log('Seek event fired');
  }

  return (
    <div className="App">
      <VideoComponent
        src= 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
      poster=
        'https://upload.wikimedia.org/wikipedia/commons/6/69/Big_Buck_Bunny_-_forest.jpg'
      aspectRatio= '16:9'
      captions={captions}
      seekTo= '60'
      customSeekEvent={customSeekEvent}
      on-seek={(event) => handleSeek(event, customSeekEvent)}
      ></VideoComponent>
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
ymlwebcl-video::part(video) { /*Note : ymlwebcl-video is the custom component and video is the name given to the the part attribute for 'div' tag wrapping the video-components */
width: 500px;
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
          <td>The source path for the video</td>
        </tr>
        <tr>
          <td>preload</td>
          <td>String</td>
          <td>no</td>
          <td>auto</td>
          <td></td>
          <td>To preload the video</td>
        </tr>		
        <tr>
          <td>autoplay</td>
          <td>String or Boolean</td>
          <td>no</td>
          <td>false</td>
          <td>true, false, muted</td>
          <td>To play/not play video on load</td>
        </tr>
        <tr>
          <td>poster</td>
          <td>String</td>
          <td>no</td>
          <td></td>
          <td></td>
          <td>Adds poster to the video</td>
        </tr>
        <tr>
          <td>videoStyle.width</td>
          <td>String</td>
          <td>no</td>
          <td></td>
          <td></td>
          <td>Adds width to the video</td>
        </tr>
         <tr>
          <td>videoStyle.height</td>
          <td>String</td>
          <td>no</td>
          <td></td>
          <td></td>
          <td>Adds height to the video</td>
        </tr>
         <tr>
          <td>videoStyle.aspectRatio</td>
          <td>String</td>
          <td>no</td>
          <td>16:9</td>
          <td></td>
          <td>Adds aspect ratio to the video</td>
        </tr>
        <tr>
          <td>loop</td>
          <td>Boolean</td>
          <td>no</td>
          <td></td>
          <td></td>
          <td>Replay the video once ended</td>
        </tr>
         <tr>
          <td>playbackRates</td>
          <td>Array<number></td>
          <td>no</td>
          <td></td>
          <td></td>
          <td>Adds playbackRates to the video</td>
        </tr>
          <tr>
          <td>seekTo</td>
          <td>String</td>
          <td>no</td>
          <td></td>
          <td></td>
          <td>Adds seek value while seeking</td>
        </tr>
        <tr>
            <td>customPlayEvent</td>
            <td>String</td>
            <td></td>
            <td></td>
            <td></td>
            <td>custom play event triggered on video play</td>
      </tr>
      <tr>
            <td>customPauseEvent</td>
            <td>String</td>
            <td></td>
            <td></td>
            <td></td>
            <td>custom pause event triggered on video pause</td>
      </tr>
      <tr>
            <td>customSeekEvent</td>
            <td>String</td>
            <td></td>
            <td></td>
            <td></td>
            <td>custom seek event triggered on video seek</td>
      </tr>
    </tbody>
</table>


## Accessibility

This component is made on top of videojs library with handles a11y completely. Throughout the development of this component proper a11y options are set. This means things like role, type are set and any user can use the video component easily.
