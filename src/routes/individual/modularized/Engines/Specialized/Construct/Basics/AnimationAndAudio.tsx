import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const SpriteAnimations = lazy(() => import('@/pages/mainTabs/Engines/Specialized/Construct/Basics/AnimationAndAudio/SpriteAnimations'));
const AudioBasics = lazy(() => import('@/pages/mainTabs/Engines/Specialized/Construct/Basics/AnimationAndAudio/AudioBasics'));

const AnimationAndAudio: RouteObject[] = [
  {
    path: '/construct/basics/animation-and-audio/sprite-animations',
    element: <SpriteAnimations />,
  },
  {
    path: '/construct/basics/animation-and-audio/audio-basics',
    element: <AudioBasics />,
  },
];

export default AnimationAndAudio;
