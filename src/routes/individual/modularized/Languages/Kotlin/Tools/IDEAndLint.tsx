import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const IntelliJSetup = lazy(() => import('@/Pages/MainTabs/Languages/Kotlin/Tools/IDEAndLint/IntelliJSetup'));
const KtlintAndDetekt = lazy(() => import('@/Pages/MainTabs/Languages/Kotlin/Tools/IDEAndLint/KtlintAndDetekt'));

const IDEAndLint: RouteObject[] = [
  {
    path: '/kotlin/tools/ide-and-lint/intellij-setup',
    element: <IntelliJSetup />,
  },
  {
    path: '/kotlin/tools/ide-and-lint/ktlint-and-detekt',
    element: <KtlintAndDetekt />,
  },
];

export default IDEAndLint;
