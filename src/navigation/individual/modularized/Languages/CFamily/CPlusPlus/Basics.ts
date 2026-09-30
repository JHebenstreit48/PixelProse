import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Introduction",
          path: "/languages/c-family/c-plus-plus/basics/fundamentals/introduction"
        },
        {
          name: "Syntax Differences from C",
          path: "/languages/c-family/c-plus-plus/basics/fundamentals/syntax-differences-from-c"
        }
      ]
    },
    {
      name: "Core Concepts",
      subpages: [
        {
          name: "OOP Concepts",
          path: "/languages/c-family/c-plus-plus/basics/core/oop"
        },
        {
          name: "STL Basics",
          path: "/languages/c-family/c-plus-plus/basics/core/stl"
        }
      ]
    }
  ]
};

export default Basics;
