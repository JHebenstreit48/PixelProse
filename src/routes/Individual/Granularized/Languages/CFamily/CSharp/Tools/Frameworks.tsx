import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const DotNet = lazy(
  () =>
    import(
      '@/Pages/MainTabs/Languages/CFamily/CSharp/Tools/FrameworksAndEngines/DotNet'
    )
);
const MonoGame = lazy(
  () =>
    import(
      '@/Pages/MainTabs/Languages/CFamily/CSharp/Tools/FrameworksAndEngines/MonoGame'
    )
);
const StrideEngine = lazy(
  () =>
    import(
      '@/Pages/MainTabs/Languages/CFamily/CSharp/Tools/FrameworksAndEngines/Stride'
    )
);
const UnityHub = lazy(
  () =>
    import(
      '@/Pages/MainTabs/Languages/CFamily/CSharp/Tools/FrameworksAndEngines/UnityHub'
    )
);

const Frameworks: RouteObject[] = [
  {
    path: '/c-family/c-sharp/tools/frameworks/dotnet',
    element: <DotNet />,
  },
  {
    path: '/c-family/c-sharp/tools/frameworks/monogame',
    element: <MonoGame />,
  },
  {
    path: '/c-family/c-sharp/tools/frameworks/stride',
    element: <StrideEngine />,
  },
  {
    path: '/c-family/c-sharp/tools/frameworks/unity-hub',
    element: <UnityHub />,
  },
];

export default Frameworks;