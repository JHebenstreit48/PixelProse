// Routes/MainTabs/Languages/CFamily/CSharp/Tools/IDEs.tsx
import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const VisualStudio = lazy(
  () =>
    import(
      '@/Pages/MainTabs/Languages/CFamily/CSharp/Tools/IDEs/VisualStudio'
    )
);
const JetBrainsRider = lazy(
  () =>
    import(
      '@/Pages/MainTabs/Languages/CFamily/CSharp/Tools/IDEs/JetBrainsRider'
    )
);
const ReSharper = lazy(
  () =>
    import(
      '@/Pages/MainTabs/Languages/CFamily/CSharp/Tools/IDEs/ReSharper'
    )
);

const IDEs: RouteObject[] = [
  {
    path: '/c-family/c-sharp/tools/ides/visual-studio',
    element: <VisualStudio />,
  },
  {
    path: '/c-family/c-sharp/tools/ides/rider',
    element: <JetBrainsRider />,
  },
  {
    path: '/c-family/c-sharp/tools/ides/resharper',
    element: <ReSharper />,
  },
];

export default IDEs;
