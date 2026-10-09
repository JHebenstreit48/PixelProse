import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: 'Basics',
  subpages: [
    {
      name: 'Game Project Setup',
      subpages: [
        {
          name: 'Repo Structure',
          path: '/tools-and-testing/tools/version-control/basics/game-project-setup/repo-structure',
        },
        {
          name: '.gitignore for Game Engines',
          path: '/tools-and-testing/tools/version-control/basics/game-project-setup/gitignore-for-game-engines',
        },
      ],
    },
    {
      name: 'Large Files',
      subpages: [
        {
          name: 'Binary vs Text Assets',
          path: '/tools-and-testing/tools/version-control/basics/large-files/binary-vs-text-assets',
        },
        {
          name: 'Git LFS Basics',
          path: '/tools-and-testing/tools/version-control/basics/large-files/git-lfs-basics',
        },
        {
          name: 'Versioning Design Assets',
          path: '/tools-and-testing/tools/version-control/basics/large-files/versioning-design-assets',
        },
      ],
    },
  ],
};

export default Basics;