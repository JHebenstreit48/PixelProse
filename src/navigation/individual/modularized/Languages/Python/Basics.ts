import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: 'Basics',
  subpages: [
    {
      name: 'Game Libraries & Frameworks',
      subpages: [
        {
          name: 'Pygame',
          path: '/languages/python/basics/game-libraries-and-frameworks/pygame',
        },
        {
          name: 'Arcade',
          path: '/languages/python/basics/game-libraries-and-frameworks/arcade',
        },
        {
          name: 'Panda3D',
          path: '/languages/python/basics/game-libraries-and-frameworks/panda3d',
        },
        {
          name: "Ren'Py",
          path: '/languages/python/basics/game-libraries-and-frameworks/renpy',
        },
      ],
    },
    {
      name: 'Debugging & Testing',
      subpages: [
        {
          name: 'Debugging Tools',
          path: '/languages/python/basics/debugging-and-testing/debugging-tools',
        },
        {
          name: 'Pytest for Games',
          path: '/languages/python/basics/debugging-and-testing/pytest-for-games',
        },
      ],
    },
  ],
};

export default Basics;