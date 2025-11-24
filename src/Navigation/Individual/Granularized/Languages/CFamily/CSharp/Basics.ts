import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Introduction",
          path: "/c-family/c-sharp/basics/fundamentals/introduction"
        },
        {
          name: "Syntax and Types",
          path: "/c-family/c-sharp/basics/fundamentals/syntax"
        },

      ]
    },
    {
      name: "Core Concepts",
      subpages: [
        {
          name: "OOP in C#",
          path: "/c-family/c-sharp/basics/core-concepts/oop"
        },
        {
          name: "Collections",
          path: "/c-family/c-sharp/basics/core-concepts/collections"
        },
        {
          name: "Console",
          path: "/c-family/c-sharp/basics/core-concepts/console"
        },
        {
          name: "Operators",
          path: "/c-family/c-sharp/basics/core-concepts/operators"
        },
        {
          name: "Control Flow",
          path: "/c-family/c-sharp/basics/core-concepts/control-flow"
        }
      ]
    }
  ]
};

export default Basics;