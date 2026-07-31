import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Marketplace = lazy(() => import('@/Pages/MainTabs/Engines/Unreal/Tools/MarketplaceAndPlugins/Marketplace'));
const ThirdPartyPlugins = lazy(() => import('@/Pages/MainTabs/Engines/Unreal/Tools/MarketplaceAndPlugins/ThirdPartyPlugins'));

const MarketplaceAndPlugins: RouteObject[] = [
  {
    path: '/unreal/tools/marketplace-and-plugins/marketplace',
    element: <Marketplace />,
  },
  {
    path: '/unreal/tools/marketplace-and-plugins/third-party-plugins',
    element: <ThirdPartyPlugins />,
  },
];

export default MarketplaceAndPlugins;
