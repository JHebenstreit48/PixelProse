import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const CPlusPlusBasicsNavigation: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Introduction",
      subpages: [
        {
          name: "Overview",
          path: "/cplusplus/basics/intro/overview"
        },
        {
          name: "Syntax Differences from C",
          path: "/cplusplus/basics/intro/syntaxdiff"
        }
      ]
    },
    {
      name: "Core Concepts",
      subpages: [
        {
          name: "OOP Concepts",
          path: "/cplusplus/basics/core/oop"
        },
        {
          name: "STL Basics",
          path: "/cplusplus/basics/core/stl"
        }
      ]
    }
  ]
};

export default CPlusPlusBasicsNavigation;
