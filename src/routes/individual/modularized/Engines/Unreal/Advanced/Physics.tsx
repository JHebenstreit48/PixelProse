import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ChaosAndRagdolls = lazy(() => import('@/pages/mainTabs/Engines/Unreal/Advanced/Physics/ChaosAndRagdolls'));
const PhysicalMaterials = lazy(() => import('@/pages/mainTabs/Engines/Unreal/Advanced/Physics/PhysicalMaterials'));

const Physics: RouteObject[] = [
  {
    path: '/unreal/advanced/physics/chaos-and-ragdolls',
    element: <ChaosAndRagdolls />,
  },
  {
    path: '/unreal/advanced/physics/physical-materials',
    element: <PhysicalMaterials />,
  },
];

export default Physics;
