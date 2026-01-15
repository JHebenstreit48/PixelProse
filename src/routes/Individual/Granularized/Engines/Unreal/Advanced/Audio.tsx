import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const AudioMixer = lazy(() => import('@/Pages/MainTabs/Engines/Unreal/Advanced/Audio/AudioMixer'));
const SpatialAudioAndCues = lazy(() => import('@/Pages/MainTabs/Engines/Unreal/Advanced/Audio/SpatialAudioAndCues'));

const Audio: RouteObject[] = [
  {
    path: '/unreal/advanced/audio/audio-mixer',
    element: <AudioMixer />,
  },
  {
    path: '/unreal/advanced/audio/spatial-audio-and-cues',
    element: <SpatialAudioAndCues />,
  },
];

export default Audio;
