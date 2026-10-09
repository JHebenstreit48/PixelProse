// Routes/MainTabs/Languages/CFamily/CSharp/Tools/IDEs.tsx
import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const JetBrainsRider = lazy(
  () =>
    import(
      '@/pages/mainTabs/Languages/CFamily/CSharp/Tools/IDEs/JetBrainsRider'
    )
);
const ReSharper = lazy(
  () =>
    import(
      '@/pages/mainTabs/Languages/CFamily/CSharp/Tools/IDEs/ReSharper'
    )
);

const IDEs: RouteObject[] = [
  {
    path: '/languages/c-family/c-sharp/tools/ides/rider',
    element: <JetBrainsRider />,
  },
  {
    path: '/languages/c-family/c-sharp/tools/ides/resharper',
    element: <ReSharper />,
  },
];

export default IDEs;
