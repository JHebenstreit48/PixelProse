import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Overview",
          path: "/lua/basics/fundamentals/overview"
        },
        {
          name: "Syntax",
          path: "/lua/basics/fundamentals/syntax"
        },
        {
          name: "Data Types",
          path: "/lua/basics/fundamentals/data-types"
        }
      ]
    },
    {
      name: "Data & Structures",
      subpages: [
        {
          name: "Tables",
          path: "/lua/basics/data-and-structures/tables"
        },
        {
          name: "Strings & Patterns",
          path: "/lua/basics/data-and-structures/strings-and-patterns"
        },
        {
          name: "Numbers & Math",
          path: "/lua/basics/data-and-structures/numbers-and-math"
        }
      ]
    },
    {
      name: "Flow & Functions",
      subpages: [
        {
          name: "Control Flow",
          path: "/lua/basics/flow-and-functions/control-flow"
        },
        {
          name: "Functions",
          path: "/lua/basics/flow-and-functions/functions"
        },
        {
          name: "Iterators & Loops",
          path: "/lua/basics/flow-and-functions/iterators-and-loops"
        }
      ]
    },
    {
      name: "Modules & IO",
      subpages: [
        {
          name: "Modules & require",
          path: "/lua/basics/modules-and-io/modules-and-require"
        },
        {
          name: "IO Basics",
          path: "/lua/basics/modules-and-io/io-basics"
        },
        {
          name: "Package Paths",
          path: "/lua/basics/modules-and-io/package-paths"
        }
      ]
    }
  ]
};

export default Basics;