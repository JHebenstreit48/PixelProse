import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const StructuredConcurrency = lazy(() => import('@/pages/mainTabs/Languages/Kotlin/Advanced/Coroutines/StructuredConcurrency'));
const ChannelsAndSelect = lazy(() => import('@/pages/mainTabs/Languages/Kotlin/Advanced/Coroutines/ChannelsAndSelect'));

const Coroutines: RouteObject[] = [
  {
    path: '/kotlin/advanced/coroutines/structured-concurrency',
    element: <StructuredConcurrency />,
  },
  {
    path: '/kotlin/advanced/coroutines/channels-and-select',
    element: <ChannelsAndSelect />,
  },
];

export default Coroutines;
