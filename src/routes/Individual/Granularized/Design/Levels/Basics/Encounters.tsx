import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const EnemiesAndTraps = lazy(() => import('@/Pages/MainTabs/Design/Levels/Basics/Encounters/EnemiesAndTraps'));
const CheckpointsAndSaves = lazy(() => import('@/Pages/MainTabs/Design/Levels/Basics/Encounters/CheckpointsAndSaves'));

const Encounters: RouteObject[] = [
  {
    path: '/gamedesign/levels/basics/encounters/enemies-and-traps',
    element: <EnemiesAndTraps />,
  },
  {
    path: '/gamedesign/levels/basics/encounters/checkpoints-and-saves',
    element: <CheckpointsAndSaves />,
  },
];

export default Encounters;
