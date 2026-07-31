import type { Subpage } from '@/types/navigation';

const Workflow: Subpage = {
  name: 'Workflow',
  subpages: [
    {
      name: 'Version Control',
      subpages: [
        {
          name: 'Git Basics',
          path: '/development/workflow/version-control/git-basics'
        },
        {
          name: 'GitHub Integration',
          path: '/development/workflow/version-control/github-integration'
        },
      ],
    },
    {
      name: 'Asset Pipelines',
      subpages: [
        {
          name: 'Asset Management',
          path: '/development/workflow/asset-pipelines/management'
        },
        {
          name: 'Data Conversion Tools',
          path: '/development/workflow/asset-pipelines/data-conversion'
        },
      ],
    },
  ],
};

export default Workflow;