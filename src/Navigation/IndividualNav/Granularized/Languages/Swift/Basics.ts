import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Introduction",
          path: "/swift/basics/fundamentals/introduction"
        },
        {
          name: "Syntax & Types",
          path: "/swift/basics/fundamentals/syntax-and-types"
        }
      ]
    },
    {
      name: "Value & OOP",
      subpages: [
        {
          name: "Structs & Enums",
          path: "/swift/basics/value-and-oop/structs-and-enums"
        },
        {
          name: "Classes & Inheritance",
          path: "/swift/basics/value-and-oop/classes-and-inheritance"
        }
      ]
    },
    {
      name: "Optionals & Errors",
      subpages: [
        {
          name: "Optionals",
          path: "/swift/basics/optionals-and-errors/optionals"
        },
        {
          name: "Error Handling",
          path: "/swift/basics/optionals-and-errors/error-handling"
        }
      ]
    },
    {
      name: "Collections",
      subpages: [
        {
          name: "Arrays & Dictionaries",
          path: "/swift/basics/collections/arrays-and-dictionaries"
        },
        {
          name: "Sequences & Iterators",
          path: "/swift/basics/collections/sequences-and-iterators"
        }
      ]
    },
    {
      name: "Concurrency (Basics)",
      subpages: [
        {
          name: "Async/Await",
          path: "/swift/basics/concurrency-basics/async-and-await"
        },
        {
          name: "Actors (Intro)",
          path: "/swift/basics/concurrency-basics/actors-intro"
        }
      ]
    },
    {
      name: "Memory Basics",
      subpages: [
        {
          name: "ARC Basics",
          path: "/swift/basics/memory-basics/arc-basics"
        },
        {
          name: "Value Semantics",
          path: "/swift/basics/memory-basics/value-semantics"
        }
      ]
    }
  ]
};

export default Basics;