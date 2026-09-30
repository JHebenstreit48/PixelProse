// Routes/MainTabs/Languages/CFamily/CSharp/Tools/Packages.tsx
import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const NuGet = lazy(
  () =>
    import(
      '@/pages/mainTabs/Languages/CFamily/CSharp/Tools/PackageManagement/NuGet'
    )
);
const Paket = lazy(
  () =>
    import(
      '@/pages/mainTabs/Languages/CFamily/CSharp/Tools/PackageManagement/Paket'
    )
);
const Chocolatey = lazy(
  () =>
    import(
      '@/pages/mainTabs/Languages/CFamily/CSharp/Tools/PackageManagement/Chocolatey'
    )
);
const MyGet = lazy(
  () =>
    import(
      '@/pages/mainTabs/Languages/CFamily/CSharp/Tools/PackageManagement/MyGet'
    )
);
const CentralPackage = lazy(
  () =>
    import(
      '@/pages/mainTabs/Languages/CFamily/CSharp/Tools/PackageManagement/CentralPackage'
    )
);

const PackageManagement: RouteObject[] = [
  {
    path: '/languages/c-family/c-sharp/tools/packages/nuget',
    element: <NuGet />,
  },
  {
    path: '/languages/c-family/c-sharp/tools/packages/paket',
    element: <Paket />,
  },
  {
    path: '/languages/c-family/c-sharp/tools/packages/chocolatey',
    element: <Chocolatey />,
  },
  {
    path: '/languages/c-family/c-sharp/tools/packages/myget',
    element: <MyGet />,
  },
  {
    path: '/languages/c-family/c-sharp/tools/packages/central-package-management',
    element: <CentralPackage />,
  },
];

export default PackageManagement;
