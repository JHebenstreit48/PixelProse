import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const AudioTranslationLayer = lazy(() => import('@/Pages/MainTabs/Engines/Cry/Advanced/Audio/AudioTranslationLayer'));
const EnvironmentalAudio = lazy(() => import('@/Pages/MainTabs/Engines/Cry/Advanced/Audio/EnvironmentalAudio'));

const Audio: RouteObject[] = [
  {
    path: '/cry/advanced/audio/audio-translation-layer',
    element: <AudioTranslationLayer />,
  },
  {
    path: '/cry/advanced/audio/environmental-audio',
    element: <EnvironmentalAudio />,
  },
];

export default Audio;
