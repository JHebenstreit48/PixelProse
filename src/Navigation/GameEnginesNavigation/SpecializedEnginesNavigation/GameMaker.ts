import { Subpage } from "@/Navigation/NavigationTypes";

const GameMakerNavigation: Subpage = {
  name: "GameMaker",
  subpages: [
    { name: "Overview", path: "/specialized/gamemaker/overview" },
    {
      name: "Visual Scripting",
      path: "/specialized/gamemaker/visual-scripting",
    },
    { name: "GML Basics", path: "/specialized/gamemaker/gml-basics" },
    {
      name: "Asset Management",
      path: "/specialized/gamemaker/asset-management",
    },
  ],
};

export default GameMakerNavigation;
