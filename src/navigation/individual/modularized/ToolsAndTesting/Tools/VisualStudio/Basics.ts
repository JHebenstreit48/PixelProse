import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: 'Basics',
  subpages: [
    {
      name: 'Fundamentals',
      subpages: [
        {
          name: 'Creating & Running a Project',
          path: '/tools-and-testing/tools/visual-studio/basics/fundamentals/creating-and-running-a-project',
        },
        {
          name: 'Solution Explorer',
          path: '/tools-and-testing/tools/visual-studio/basics/fundamentals/solution-explorer',
        },
      ],
    },
    {
      name: 'Editor Features',
      subpages: [
        {
          name: 'IntelliSense',
          path: '/tools-and-testing/tools/visual-studio/basics/editor-features/intellisense',
        },
        {
          name: 'Error List & Error Indicators',
          path: '/tools-and-testing/tools/visual-studio/basics/editor-features/error-list',
        },
      ],
    },
  ],
};

export default Basics;