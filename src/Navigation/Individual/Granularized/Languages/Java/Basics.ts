import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Introduction",
          path: "/java/basics/fundamentals/introduction"
        },
        {
          name: "Syntax & Types",
          path: "/java/basics/fundamentals/syntax-and-types"
        }
      ]
    },
    {
      name: "OOP",
      subpages: [
        {
          name: "Classes & Objects",
          path: "/java/basics/oop/classes-and-objects"
        },
        {
          name: "Interfaces & Generics",
          path: "/java/basics/oop/interfaces-and-generics"
        }
      ]
    },
    {
      name: "Collections",
      subpages: [
        {
          name: "Collections & Streams",
          path: "/java/basics/collections/collections-and-streams"
        },
        {
          name: "Optional & Null",
          path: "/java/basics/collections/optional-and-null"
        }
      ]
    },
    {
      name: "Exceptions",
      subpages: [
        {
          name: "Exceptions Basics",
          path: "/java/basics/exceptions/exceptions-basics"
        },
        {
          name: "Try-with-Resources",
          path: "/java/basics/exceptions/try-with-resources"
        }
      ]
    },
    {
      name: "Concurrency (Basics)",
      subpages: [
        {
          name: "Threads & Executors",
          path: "/java/basics/concurrency-basics/threads-and-executors"
        },
        {
          name: "Futures & CompletableFuture",
          path: "/java/basics/concurrency-basics/futures-and-completablefuture"
        }
      ]
    },
    {
      name: "I/O Basics",
      subpages: [
        {
          name: "IO vs NIO",
          path: "/java/basics/io-basics/io-vs-nio"
        },
        {
          name: "Files & Paths",
          path: "/java/basics/io-basics/files-and-paths"
        }
      ]
    }
  ]
};

export default Basics;