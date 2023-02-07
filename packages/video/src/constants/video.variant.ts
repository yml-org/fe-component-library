import { Video } from '../constants/video.component';

export const videoConfig: Video = {
  src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  preload: 'auto',
  autoplay: false,
  controls: true,
  fluid: false,
  responsive: true,
  muted: false,
  loop: false,
  playbackRates: [0.25, 0.5, 1, 1.5, 2, 2.5, 3],
  poster:
    'https://upload.wikimedia.org/wikipedia/commons/6/69/Big_Buck_Bunny_-_forest.jpg',
  videoStyle: {
    width: '600px',
    height: '400px',
    aspectRatio: '4:3',
  },

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
};
