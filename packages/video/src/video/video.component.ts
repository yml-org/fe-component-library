import { html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import videojs from 'video.js';
import Style from '../../../../node_modules/video.js/dist/video-js.css';
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
  @property()
  seekTo?: string = '';
  @property()
  customPlayEvent?: string = '';
  @property()
  customPauseEvent?: string = '';
  @property()
  customSeekEvent?: string = '';

  private player = null;

  @state() hasSeeked = false;

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

    this.player.on('play', () => {
      this.hasSeeked = false;
      if (this?.customPlayEvent) {
        this.dispatchEvent(new CustomEvent('handlePlay'));
      }
    });
    this.player.on('pause', () => {
      this.hasSeeked = false;
      if (this?.customPauseEvent) {
        this.dispatchEvent(new CustomEvent('handlePause'));
      }
    });

    this.player.on('seeked', () => {
      if (this?.customSeekEvent && !this.hasSeeked) {
        this.seek(Number(this.seekTo) + this.player.currentTime());
        this.dispatchEvent(new CustomEvent('handleSeek'));
        this.hasSeeked = true;
        setTimeout(() => {
          // work around approach to suspend continuous seeking
          this.hasSeeked = false;
        }, 1000);
      }
    });
  }

  protected seek(time: number) {
    this.player.currentTime(time);
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
