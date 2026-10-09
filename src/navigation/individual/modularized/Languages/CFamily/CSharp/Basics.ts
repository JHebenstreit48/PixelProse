import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: 'Basics',
  subpages: [
    {
      name: 'Fundamentals',
      subpages: [
        {
          name: 'Introduction',
          path: '/languages/c-family/c-sharp/basics/fundamentals/introduction',
        },
        {
          name: 'Syntax & Structure',
          path: '/languages/c-family/c-sharp/basics/fundamentals/syntax-and-structure',
        },
        {
          name: 'Variables and Data Types',
          path: '/languages/c-family/c-sharp/basics/fundamentals/variables-and-data-types',
        },
      ],
    },
    {
      name: 'Core Concepts',
      subpages: [
        {
          name: 'OOP in C#',
          path: '/languages/c-family/c-sharp/basics/core-concepts/oop',
        },
        {
          name: 'Collections',
          path: '/languages/c-family/c-sharp/basics/core-concepts/collections',
        },
        {
          name: 'Console',
          path: '/languages/c-family/c-sharp/basics/core-concepts/console',
        },
        {
          name: 'Operators',
          path: '/languages/c-family/c-sharp/basics/core-concepts/operators',
        },
      ],
    },
    {
      name: 'Control Flow',
      subpages: [
        {
          name: 'Conditions & Comparisons',
          path: '/languages/c-family/c-sharp/basics/control-flow/conditions-and-comparisons',
        },
        {
          name: 'If Statements',
          path: '/languages/c-family/c-sharp/basics/control-flow/if-statements',
        },
        {
          name: 'Switch Statements',
          path: '/languages/c-family/c-sharp/basics/control-flow/switch-statements',
        },
        {
          name: 'Loops',
          path: '/languages/c-family/c-sharp/basics/control-flow/loops',
        },
      ],
    },
  ],
};

export default Basics;