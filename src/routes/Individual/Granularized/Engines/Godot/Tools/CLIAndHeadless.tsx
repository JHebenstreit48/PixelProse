import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const GodotCLIBasics = lazy(() => import('@/Pages/MainTabs/Engines/Godot/Tools/CLIAndHeadless/GodotCLIBasics'));
const HeadlessAndServer = lazy(() => import('@/Pages/MainTabs/Engines/Godot/Tools/CLIAndHeadless/HeadlessAndServer'));

const CLIAndHeadless: RouteObject[] = [
  {
    path: '/godot/tools/cli-and-headless/godot-cli-basics',
    element: <GodotCLIBasics />,
  },
  {
    path: '/godot/tools/cli-and-headless/headless-and-server',
    element: <HeadlessAndServer />,
  },
];

export default CLIAndHeadless;
