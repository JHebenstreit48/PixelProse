import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const LuaBasicsNavigation: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Introduction",
      subpages: [
        { name: "Overview", path: "/lua/basics/overview" },
        { name: "Syntax", path: "/lua/basics/syntax" }
      ]
    },
    {
      name: "Language Fundamentals",
      subpages: [
        { name: "Data Types", path: "/lua/basics/datatypes" },
        { name: "Control Flow", path: "/lua/basics/controlflow" },
        { name: "Functions", path: "/lua/basics/functions" }
      ]
    }
  ]
};

export default LuaBasicsNavigation;
