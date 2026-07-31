import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Generics = lazy(() => import('@/pages/mainTabs/Languages/Swift/Advanced/GenericsAndProtocols/Generics'));
const ProtocolsAndExtensions = lazy(() => import('@/pages/mainTabs/Languages/Swift/Advanced/GenericsAndProtocols/ProtocolsAndExtensions'));

const GenericsAndProtocols: RouteObject[] = [
  {
    path: '/swift/advanced/generics-and-protocols/generics',
    element: <Generics />,
  },
  {
    path: '/swift/advanced/generics-and-protocols/protocols-and-extensions',
    element: <ProtocolsAndExtensions />,
  },
];

export default GenericsAndProtocols;
