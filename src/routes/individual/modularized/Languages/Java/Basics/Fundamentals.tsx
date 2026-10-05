import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/pages/mainTabs/Languages/Java/Basics/Fundamentals/Introduction'));
const SetupAndRunning = lazy(() => import('@/pages/mainTabs/Languages/Java/Basics/Fundamentals/SetupAndRunning'));
const SyntaxAndTypes = lazy(() => import('@/pages/mainTabs/Languages/Java/Basics/Fundamentals/SyntaxAndStructure'));

const Fundamentals: RouteObject[] = [
  {
    path: '/languages/java/basics/fundamentals/introduction',
    element: <Introduction />,
  },
  {
    path: '/languages/java/basics/fundamentals/setup-and-running',
    element: <SetupAndRunning />
  },
  {
    path: '/languages/java/basics/fundamentals/syntax-and-structure',
    element: <SyntaxAndTypes />,
  },
];

export default Fundamentals;