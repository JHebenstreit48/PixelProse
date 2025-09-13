import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const CBasicsNavigation: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Introduction",
          path: "/cfamily/c/basics/fundamentals/introduction"
        },
        {
          name: "History",
          path: "/cfamily/c/basics/fundamentals/history"
        },
        {
          name: "Syntax",
          path: "/cfamily/c/basics/fundamentals/syntax"
        }
      ]
    },
    {
      name: "Data Handling",
      subpages: [
        {
          name: "Data Types",
          path: "/cfamily/c/basics/datahandling/datatypes"
        },
        {
          name: "Variables & Constants",
          path: "/cfamily/c/basics/datahandling/variables"
        }
      ]
    },
    {
      name: "Program Flow",
      subpages: [
        {
          name: "Control Flow",
          path: "/cfamily/c/basics/programflow/control"
        },
        {
          name: "Functions",
          path: "/cfamily/c/basics/programflow/functions"
        }
      ]
    }
  ]
};

export default CBasicsNavigation;
