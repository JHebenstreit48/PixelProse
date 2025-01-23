import { Subpage } from "@/Navigation/NavigationTypes";

const SpecializedEnginesNavigation: Subpage = {
  name: "Specialized Engines",
  subpages: [
    {
      name: "GameMaker Studio",
      subpages: [
        { name: "Overview", path: "/specialized/gamemaker/overview" },
        { name: "Visual Scripting", path: "/specialized/gamemaker/visual-scripting" },
        { name: "GML Basics", path: "/specialized/gamemaker/gml-basics" },
        { name: "Asset Management", path: "/specialized/gamemaker/asset-management" },
      ],
    },
    {
      name: "RPG Maker",
      subpages: [
        { name: "Overview", path: "/specialized/rpgmaker/overview" },
        { name: "Event System", path: "/specialized/rpgmaker/event-system" },
        { name: "Mapping and Tilesets", path: "/specialized/rpgmaker/mapping-tilesets" },
        { name: "Plugins and Scripting", path: "/specialized/rpgmaker/plugins-scripting" },
      ],
    },
    {
      name: "Construct",
      subpages: [
        { name: "Overview", path: "/specialized/construct/overview" },
        { name: "Event Sheets", path: "/specialized/construct/event-sheets" },
        { name: "Asset Integration", path: "/specialized/construct/asset-integration" },
        { name: "Publishing Games", path: "/specialized/construct/publishing" },
      ],
    },
    {
      name: "Ren'Py",
      subpages: [
        { name: "Overview", path: "/specialized/renpy/overview" },
        { name: "Scripting Basics", path: "/specialized/renpy/scripting-basics" },
        { name: "Visual Novel Features", path: "/specialized/renpy/visual-novel-features" },
        { name: "Distributing Games", path: "/specialized/renpy/distributing" },
      ],
    },
  ],
};

export default SpecializedEnginesNavigation;
