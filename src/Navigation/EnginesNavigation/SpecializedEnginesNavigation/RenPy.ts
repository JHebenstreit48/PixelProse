import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const RenPyNavigation: Subpage = {
  name: "Ren'Py",
  subpages: [
    { name: "Overview", path: "/specialized/renpy/overview" },
    { name: "Scripting Basics", path: "/specialized/renpy/scripting-basics" },
    {
      name: "Visual Novel Features",
      path: "/specialized/renpy/visual-novel-features",
    },
    { name: "Distributing Games", path: "/specialized/renpy/distributing" },
  ],
};

export default RenPyNavigation;
