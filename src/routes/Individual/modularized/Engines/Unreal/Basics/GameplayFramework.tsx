import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ActorsAndComponents = lazy(() => import('@/Pages/MainTabs/Engines/Unreal/Basics/GameplayFramework/ActorsAndComponents'));
const PawnsAndControllers = lazy(() => import('@/Pages/MainTabs/Engines/Unreal/Basics/GameplayFramework/PawnsAndControllers'));

const GameplayFramework: RouteObject[] = [
  {
    path: '/unreal/basics/gameplay-framework/actors-and-components',
    element: <ActorsAndComponents />,
  },
  {
    path: '/unreal/basics/gameplay-framework/pawns-and-controllers',
    element: <PawnsAndControllers />,
  },
];

export default GameplayFramework;
