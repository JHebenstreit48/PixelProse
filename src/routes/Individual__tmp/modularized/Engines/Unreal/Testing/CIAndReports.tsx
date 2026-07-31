import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const GauntletAndCommandlets = lazy(() => import('@/Pages/MainTabs/Engines/Unreal/Testing/CIAndReports/GauntletAndCommandlets'));
const ReportsAndCoverage = lazy(() => import('@/Pages/MainTabs/Engines/Unreal/Testing/CIAndReports/ReportsAndCoverage'));

const CIAndReports: RouteObject[] = [
  {
    path: '/unreal/testing/ci-and-reports/gauntlet-and-commandlets',
    element: <GauntletAndCommandlets />,
  },
  {
    path: '/unreal/testing/ci-and-reports/reports-and-coverage',
    element: <ReportsAndCoverage />,
  },
];

export default CIAndReports;
