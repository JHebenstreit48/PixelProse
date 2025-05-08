import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const CBasicsNavigation: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Intro & Syntax",
      subpages: [
        {
          name: "Introduction to C",
          path: "/cfamily/c/basics/intro-syntax/introduction"
        },
        {
          name: "Basic Syntax",
          path: "/cfamily/c/basics/intro-syntax/syntax"
        }
      ]
    },
    {
      name: "Data Handling",
      subpages: [
        {
          name: "Data Types",
          path: "/cfamily/c/basics/data-handling/datatypes"
        },
        {
          name: "Variables & Constants",
          path: "/cfamily/c/basics/data-handling/variables"
        }
      ]
    },
    {
      name: "Program Flow",
      subpages: [
        {
          name: "Control Flow",
          path: "/cfamily/c/basics/program-flow/control"
        },
        {
          name: "Functions",
          path: "/cfamily/c/basics/program-flow/functions"
        }
      ]
    }
  ]
};

export default CBasicsNavigation;
