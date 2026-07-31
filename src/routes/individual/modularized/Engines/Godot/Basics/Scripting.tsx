import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const GDScriptBasics = lazy(() => import('@/pages/mainTabs/Engines/Godot/Basics/Scripting/GDScriptBasics'));
const CBasics = lazy(() => import('@/pages/mainTabs/Engines/Godot/Basics/Scripting/CBasics'));

const Scripting: RouteObject[] = [
  {
    path: '/godot/basics/scripting/gdscript-basics',
    element: <GDScriptBasics />,
  },
  {
    path: '/godot/basics/scripting/csharp-basics',
    element: <CBasics />,
  },
];

export default Scripting;
