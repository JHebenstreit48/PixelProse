import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const PerforceGit = lazy(() => import('@/Pages/MainTabs/Engines/Unreal/Tools/SourceControl/PerforceGit'));
const LocksAndBranches = lazy(() => import('@/Pages/MainTabs/Engines/Unreal/Tools/SourceControl/LocksAndBranches'));

const SourceControl: RouteObject[] = [
  {
    path: '/unreal/tools/source-control/perforce-and-git',
    element: <PerforceGit />,
  },
  {
    path: '/unreal/tools/source-control/locks-and-branches',
    element: <LocksAndBranches />,
  },
];

export default SourceControl;
