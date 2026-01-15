import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const AppStoreOptimization = lazy(() => import('@/Pages/MainTabs/Mobile/Platforms/Advanced/StoreStrategy/AppStoreOptimization'));
const RegionalizationAndAltStores = lazy(() => import('@/Pages/MainTabs/Mobile/Platforms/Advanced/StoreStrategy/RegionalizationAndAltStores'));

const StoreStrategy: RouteObject[] = [
  {
    path: '/mobile/platforms/advanced/store-strategy/aso',
    element: <AppStoreOptimization />,
  },
  {
    path: '/mobile/platforms/advanced/store-strategy/regions-alt-stores',
    element: <RegionalizationAndAltStores />,
  },
];

export default StoreStrategy;
