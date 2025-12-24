import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ByteBufferAndMappedFiles = lazy(() => import('@/Pages/MainTabs/Languages/Java/Advanced/NIOAndBinary/ByteBufferAndMappedFiles'));
const ChannelsAndSelectors = lazy(() => import('@/Pages/MainTabs/Languages/Java/Advanced/NIOAndBinary/ChannelsAndSelectors'));

const NIOAndBinary: RouteObject[] = [
  {
    path: '/java/advanced/nio-and-binary/bytebuffer-and-mapped-files',
    element: <ByteBufferAndMappedFiles />,
  },
  {
    path: '/java/advanced/nio-and-binary/channels-and-selectors',
    element: <ChannelsAndSelectors />,
  },
];

export default NIOAndBinary;
