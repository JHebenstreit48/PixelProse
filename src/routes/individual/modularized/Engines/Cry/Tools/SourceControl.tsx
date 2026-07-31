import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const PerforceGit = lazy(() => import('@/Pages/MainTabs/Engines/Cry/Tools/SourceControl/PerforceGit'));
const LocksAndBranches = lazy(() => import('@/Pages/MainTabs/Engines/Cry/Tools/SourceControl/LocksAndBranches'));

const SourceControl: RouteObject[] = [
  {
    path: '/cry/tools/source-control/perforce-and-git',
    element: <PerforceGit />,
  },
  {
    path: '/cry/tools/source-control/locks-and-branches',
    element: <LocksAndBranches />,
  },
];

export default SourceControl;
