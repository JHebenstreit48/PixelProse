import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const ConstructNavigation: Subpage = {
  name: "Construct",
  subpages: [
    { name: "Overview", path: "/specialized/rpgmaker/overview" },
    { name: "Event System", path: "/specialized/rpgmaker/event-system" },
    {
      name: "Mapping and Tilesets",
      path: "/specialized/rpgmaker/mapping-tilesets",
    },
    {
      name: "Plugins and Scripting",
      path: "/specialized/rpgmaker/plugins-scripting",
    },
  ],
};

export default ConstructNavigation;
