import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const AudioMixers = lazy(() => import('@/Pages/MainTabs/Engines/Unity/Advanced/Audio/AudioMixers'));
const SpatialAudio = lazy(() => import('@/Pages/MainTabs/Engines/Unity/Advanced/Audio/SpatialAudio'));

const Audio: RouteObject[] = [
  {
    path: '/unity/advanced/audio/audio-mixers',
    element: <AudioMixers />,
  },
  {
    path: '/unity/advanced/audio/spatial-audio',
    element: <SpatialAudio />,
  },
];

export default Audio;
