import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import videojs from 'video.js';
import Style from '../../../../packages/video/node_modules/video.js/dist/video-js.css';
import { TailwindElement } from '../shared/tailwind.element';
import {
  VideoStyle,
  Captions,
  AspectRatioDefault,
} from '../constants/video.component';

@customElement('video-component')
export class VideoComponent extends TailwindElement(Style) {
  @property()
  src: string;
  @property()
  preload?: string = 'auto';
  @property()
  autoplay?: boolean | string = false;
  @property()
  controls?: boolean = true;
  @property()
  fluid?: boolean = false;
  @property()
  responsive?: boolean = true;
  @property()
  muted?: boolean = false;
  @property()
  loop?: boolean = false;
  @property()
  playbackRates? = [];
  @property()
  poster?: string;
  @property()
  videoStyle?: VideoStyle | null;
  @property()
  captions?: Captions[];

  private player = null;

  protected getTrackOptions() {
    return (
      this.captions &&
      this.captions
        .filter((c) => c.srcTrack)
        .map((caption) => {
          return {
            src: caption.srcTrack,
            kind: caption.kind,
            srclang: caption.srcLang,
            label: caption.label,
          };
        })
    );
  }

  firstUpdated() {
    const defaultsStyleEl = this.shadowRoot?.querySelector(
      '.vjs-styles-defaults'
    );
    this.shadowRoot.appendChild(
      defaultsStyleEl ? defaultsStyleEl.nextSibling : document.head.firstChild
    );
    this.player = videojs(this.shadowRoot.querySelector('video'), {
      autoplay: this.autoplay,
      controls: this.controls,
      fluid: this.fluid,
      responsive: this.responsive,
      muted: this.muted,
      poster: this.poster,
      loop: this.loop,
      aspectRatio: this.videoStyle?.aspectRatio ?? AspectRatioDefault,
      playbackRates: this.playbackRates,
      tracks: this.getTrackOptions(),
      userActions: {
        hotkeys: true,
      },
      preload: this.preload,
    });
  }

  render() {
    return html`
      <div
        data-vjs-player
        style="${this.videoStyle &&
        `width:${this.videoStyle.width}; height:${this.videoStyle.height}`}"
        part="video"
      >
        <video id="my-video" class="video-js vjs-big-play-centered"></video>
      </div>
    `;
  }

  updated(changedProperties: Map<keyof this, string | boolean | undefined>) {
    if (changedProperties.has('src')) {
      this.player.src(this.src);
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'video-component': VideoComponent;
  }
}
