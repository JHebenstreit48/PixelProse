import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const GIAndLightmapping = lazy(() => import('@/pages/mainTabs/Engines/Unity/Advanced/Lighting/GIAndLightmapping'));
const ReflectionProbes = lazy(() => import('@/pages/mainTabs/Engines/Unity/Advanced/Lighting/ReflectionProbes'));

const Lighting: RouteObject[] = [
  {
    path: '/unity/advanced/lighting/gi-and-lightmapping',
    element: <GIAndLightmapping />,
  },
  {
    path: '/unity/advanced/lighting/reflection-probes',
    element: <ReflectionProbes />,
  },
];

export default Lighting;
