import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Introduction",
          path: "/rust/basics/fundamentals/introduction"
        },
        {
          name: "Syntax & Types",
          path: "/rust/basics/fundamentals/syntax-and-types"
        }
      ]
    },
    {
      name: "Ownership",
      subpages: [
        {
          name: "Ownership & Moves",
          path: "/rust/basics/ownership/ownership-and-moves"
        },
        {
          name: "Borrowing & References",
          path: "/rust/basics/ownership/borrowing-and-references"
        }
      ]
    },
    {
      name: "Lifetimes & Errors",
      subpages: [
        {
          name: "Lifetimes (Intro)",
          path: "/rust/basics/lifetimes-and-errors/lifetimes-intro"
        },
        {
          name: "Result & Error Handling",
          path: "/rust/basics/lifetimes-and-errors/result-and-error-handling"
        }
      ]
    },
    {
      name: "Collections & I/O",
      subpages: [
        {
          name: "Vec & HashMap",
          path: "/rust/basics/collections-and-io/vec-and-hashmap"
        },
        {
          name: "Files & Paths",
          path: "/rust/basics/collections-and-io/files-and-paths"
        }
      ]
    },
    {
      name: "Traits & Generics",
      subpages: [
        {
          name: "Traits (Basics)",
          path: "/rust/basics/traits-and-generics/traits-basics"
        },
        {
          name: "Generics",
          path: "/rust/basics/traits-and-generics/generics"
        }
      ]
    },
    {
      name: "Concurrency (Basics)",
      subpages: [
        {
          name: "Threads & Channels",
          path: "/rust/basics/concurrency-basics/threads-and-channels"
        },
        {
          name: "Async (Intro)",
          path: "/rust/basics/concurrency-basics/async-intro"
        }
      ]
    }
  ]
};

export default Basics;