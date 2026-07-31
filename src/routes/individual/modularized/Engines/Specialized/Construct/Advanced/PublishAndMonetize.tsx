import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ExportAndPackaging = lazy(() => import('@/pages/mainTabs/Engines/Specialized/Construct/Advanced/PublishAndMonetize/ExportAndPackaging'));
const AdsAndIAP = lazy(() => import('@/pages/mainTabs/Engines/Specialized/Construct/Advanced/PublishAndMonetize/AdsAndIAP'));

const PublishAndMonetize: RouteObject[] = [
  {
    path: '/construct/advanced/publish-and-monetize/export-and-packaging',
    element: <ExportAndPackaging />,
  },
  {
    path: '/construct/advanced/publish-and-monetize/ads-and-iap',
    element: <AdsAndIAP />,
  },
];

export default PublishAndMonetize;
