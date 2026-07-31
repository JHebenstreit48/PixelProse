import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const AdvancedLifetimes = lazy(() => import('@/Pages/MainTabs/Languages/Rust/Advanced/LifetimesAndTypes/AdvancedLifetimes'));
const TraitObjectsAndAssocTypes = lazy(() => import('@/Pages/MainTabs/Languages/Rust/Advanced/LifetimesAndTypes/TraitObjectsAndAssocTypes'));

const LifetimesAndTypes: RouteObject[] = [
  {
    path: '/rust/advanced/lifetimes-and-types/advanced-lifetimes',
    element: <AdvancedLifetimes />,
  },
  {
    path: '/rust/advanced/lifetimes-and-types/trait-objects-and-associated-types',
    element: <TraitObjectsAndAssocTypes />,
  },
];

export default LifetimesAndTypes;
