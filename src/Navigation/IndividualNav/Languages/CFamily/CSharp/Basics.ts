import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const CSharpBasicsNavigation: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Introduction",
          path: "/cfamily/csharp/basics/fundamentals/intro"
        },
        {
          name: "Syntax and Types",
          path: "/cfamily/csharp/basics/fundamentals/syntax"
        },

      ]
    },
    {
      name: "Core Concepts",
      subpages: [
        {
          name: "OOP in C#",
          path: "/cfamily/csharp/basics/coreconcepts/oop"
        },
        {
          name: "Collections",
          path: "/cfamily/csharp/basics/coreconcepts/collections"
        },
        {
          name: "Console",
          path: "/cfamily/csharp/basics/coreconcepts/console"
        },
        {
          name: "Operators",
          path: "/cfamily/csharp/basics/coreconcepts/operators"
        },
        {
          name: "Control Flow",
          path: "/cfamily/csharp/basics/coreconcepts/controlflow"
        }
      ]
    }
  ]
};

export default CSharpBasicsNavigation;
