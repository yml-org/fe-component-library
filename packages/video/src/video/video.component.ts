import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import videojs from 'video.js';
import Style from '../../../../packages/video/node_modules/video.js/dist/video-js.css';
import { TailwindElement } from '../shared/tailwind.element';
import { VideoStyle, Captions } from '../constants/video.component';

@customElement('video-component')
export class VideoComponent extends TailwindElement(Style) {
  @property()
  src: string;
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
      aspectRatio: this.videoStyle?.aspectRatio ?? '16:9',
      playbackRates: this.playbackRates,
      tracks:
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
          }),
      userActions: {
        hotkeys: true,
      },
      preload: 'auto',
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

  updated(changedProperties) {
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
