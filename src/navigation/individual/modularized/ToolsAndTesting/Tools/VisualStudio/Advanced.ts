import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: 'Advanced',
  subpages: [
    {
      name: 'Workflow & Shortcuts',
      subpages: [
        {
          name: 'Startup Projects & Multi-Project Solutions',
          path: '/tools-and-testing/tools/visual-studio/advanced/workflow-and-shortcuts/startup-projects',
        },
        {
          name: 'Commenting Shortcuts',
          path: '/tools-and-testing/tools/visual-studio/advanced/workflow-and-shortcuts/commenting-shortcuts',
        },
      ],
    },
    {
      name: 'Debugging Tools',
      subpages: [
        {
          name: 'Breakpoints & Step Debugging',
          path: '/tools-and-testing/tools/visual-studio/advanced/debugging-tools/breakpoints-and-step-debugging',
        },
        {
          name: 'Watch & Autos Windows',
          path: '/tools-and-testing/tools/visual-studio/advanced/debugging-tools/watch-and-autos-windows',
        },
      ],
    },
  ],
};

export default Advanced;