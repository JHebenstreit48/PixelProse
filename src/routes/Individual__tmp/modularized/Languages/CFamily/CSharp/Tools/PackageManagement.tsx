// Routes/MainTabs/Languages/CFamily/CSharp/Tools/Packages.tsx
import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const NuGet = lazy(
  () =>
    import(
      '@/Pages/MainTabs/Languages/CFamily/CSharp/Tools/PackageManagement/NuGet'
    )
);
const Paket = lazy(
  () =>
    import(
      '@/Pages/MainTabs/Languages/CFamily/CSharp/Tools/PackageManagement/Paket'
    )
);
const Chocolatey = lazy(
  () =>
    import(
      '@/Pages/MainTabs/Languages/CFamily/CSharp/Tools/PackageManagement/Chocolatey'
    )
);
const MyGet = lazy(
  () =>
    import(
      '@/Pages/MainTabs/Languages/CFamily/CSharp/Tools/PackageManagement/MyGet'
    )
);
const CentralPackage = lazy(
  () =>
    import(
      '@/Pages/MainTabs/Languages/CFamily/CSharp/Tools/PackageManagement/CentralPackage'
    )
);

const PackageManagement: RouteObject[] = [
  {
    path: '/c-family/c-sharp/tools/packages/nuget',
    element: <NuGet />,
  },
  {
    path: '/c-family/c-sharp/tools/packages/paket',
    element: <Paket />,
  },
  {
    path: '/c-family/c-sharp/tools/packages/chocolatey',
    element: <Chocolatey />,
  },
  {
    path: '/c-family/c-sharp/tools/packages/myget',
    element: <MyGet />,
  },
  {
    path: '/c-family/c-sharp/tools/packages/central-package-management',
    element: <CentralPackage />,
  },
];

export default PackageManagement;
