import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Marketplace = lazy(() => import('@/pages/mainTabs/Engines/Cry/Tools/MarketplaceAndPlugins/Marketplace'));
const ThirdPartyPlugins = lazy(() => import('@/pages/mainTabs/Engines/Cry/Tools/MarketplaceAndPlugins/ThirdPartyPlugins'));

const MarketplaceAndPlugins: RouteObject[] = [
  {
    path: '/cry/tools/marketplace-and-plugins/marketplace',
    element: <Marketplace />,
  },
  {
    path: '/cry/tools/marketplace-and-plugins/third-party-plugins',
    element: <ThirdPartyPlugins />,
  },
];

export default MarketplaceAndPlugins;
