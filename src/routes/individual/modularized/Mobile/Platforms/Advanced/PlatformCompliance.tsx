import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const IOSReviewEdgeCases = lazy(() => import('@/pages/mainTabs/Mobile/Platforms/Advanced/PlatformCompliance/IOSReviewEdgeCases'));
const PlayStorePolicies = lazy(() => import('@/pages/mainTabs/Mobile/Platforms/Advanced/PlatformCompliance/PlayStorePolicies'));

const PlatformCompliance: RouteObject[] = [
  {
    path: '/mobile/platforms/advanced/compliance/ios-review-edge-cases',
    element: <IOSReviewEdgeCases />,
  },
  {
    path: '/mobile/platforms/advanced/compliance/play-policies',
    element: <PlayStorePolicies />,
  },
];

export default PlatformCompliance;
