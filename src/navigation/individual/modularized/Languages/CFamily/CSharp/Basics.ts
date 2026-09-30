import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Introduction",
          path: "/languages/c-family/c-sharp/basics/fundamentals/introduction"
        },
        {
          name: "Syntax and Types",
          path: "/languages/c-family/c-sharp/basics/fundamentals/syntax"
        },

      ]
    },
    {
      name: "Core Concepts",
      subpages: [
        {
          name: "OOP in C#",
          path: "/languages/c-family/c-sharp/basics/core-concepts/oop"
        },
        {
          name: "Collections",
          path: "/languages/c-family/c-sharp/basics/core-concepts/collections"
        },
        {
          name: "Console",
          path: "/languages/c-family/c-sharp/basics/core-concepts/console"
        },
        {
          name: "Operators",
          path: "/languages/c-family/c-sharp/basics/core-concepts/operators"
        },
        {
          name: "Control Flow",
          path: "/languages/c-family/c-sharp/basics/core-concepts/control-flow"
        }
      ]
    }
  ]
};

export default Basics;