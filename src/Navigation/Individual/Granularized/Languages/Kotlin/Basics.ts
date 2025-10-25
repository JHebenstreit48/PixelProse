import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Introduction",
          path: "/kotlin/basics/fundamentals/introduction"
        },
        {
          name: "Syntax & Types",
          path: "/kotlin/basics/fundamentals/syntax-and-types"
        }
      ]
    },
    {
      name: "Functions & OOP",
      subpages: [
        {
          name: "Functions & Lambdas",
          path: "/kotlin/basics/functions-and-oop/functions-and-lambdas"
        },
        {
          name: "Classes & Inheritance",
          path: "/kotlin/basics/functions-and-oop/classes-and-inheritance"
        }
      ]
    },
    {
      name: "Type Safety",
      subpages: [
        {
          name: "Null Safety",
          path: "/kotlin/basics/type-safety/null-safety"
        },
        {
          name: "Smart Casts",
          path: "/kotlin/basics/type-safety/smart-casts"
        }
      ]
    },
    {
      name: "Collections",
      subpages: [
        {
          name: "Collections Basics",
          path: "/kotlin/basics/collections/collections-basics"
        },
        {
          name: "Sequences & Lazy",
          path: "/kotlin/basics/collections/sequences-and-lazy"
        }
      ]
    },
    {
      name: "Coroutines (Basics)",
      subpages: [
        {
          name: "Suspend & Launch",
          path: "/kotlin/basics/coroutines-basics/suspend-and-launch"
        },
        {
          name: "Flows (Intro)",
          path: "/kotlin/basics/coroutines-basics/flows-intro"
        }
      ]
    }
  ]
};

export default Basics;