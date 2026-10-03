import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: 'Advanced',
  subpages: [
    {
      name: 'Merge Conflicts',
      subpages: [
        {
          name: 'Scene & Prefab Merging',
          path: '/tools-and-testing/tools/version-control/advanced/merge-conflicts/scene-and-prefab-merging',
        },
        {
          name: 'Smart Merge Tools',
          path: '/tools-and-testing/tools/version-control/advanced/merge-conflicts/smart-merge-tools',
        },
      ],
    },
    {
      name: 'Hosting & Remotes',
      subpages: [
        {
          name: 'GitHub for Game Projects',
          path: '/tools-and-testing/tools/version-control/advanced/hosting-and-remotes/github-for-game-projects',
        },
        {
          name: 'GitLab for Game Projects',
          path: '/tools-and-testing/tools/version-control/advanced/hosting-and-remotes/gitlab-for-game-projects',
        },
      ],
    },
  ],
};

export default Advanced;