import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const CSharpBasicsNavigation: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Introduction",
      subpages: [
        {
          name: "Overview",
          path: "/cfamily/csharp/basics/introduction"
        },
        {
          name: "Syntax and Types",
          path: "/cfamily/csharp/basics/syntax"
        }
      ]
    },
    {
      name: "Core Concepts",
      subpages: [
        {
          name: "OOP in C#",
          path: "/cfamily/csharp/basics/oop"
        },
        {
          name: "Collections",
          path: "/cfamily/csharp/basics/collections"
        }
      ]
    }
  ]
};

export default CSharpBasicsNavigation;
