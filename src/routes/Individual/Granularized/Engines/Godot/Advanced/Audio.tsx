import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const AudioStreamPlayer = lazy(() => import('@/Pages/MainTabs/Engines/Godot/Advanced/Audio/AudioStreamPlayer'));
const EnvironmentalFX = lazy(() => import('@/Pages/MainTabs/Engines/Godot/Advanced/Audio/EnvironmentalFX'));

const Audio: RouteObject[] = [
  {
    path: '/godot/advanced/audio/audiostreamplayer',
    element: <AudioStreamPlayer />,
  },
  {
    path: '/godot/advanced/audio/environmental-fx',
    element: <EnvironmentalFX />,
  },
];

export default Audio;
