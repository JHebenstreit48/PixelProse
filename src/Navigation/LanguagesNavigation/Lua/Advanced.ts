import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const LuaAdvancedNavigation: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Powerful Features",
      subpages: [
        { name: "Metatables", path: "/lua/advanced/metatables" },
        { name: "Coroutines", path: "/lua/advanced/coroutines" }
      ]
    },
    {
      name: "Structure & Performance",
      subpages: [
        { name: "Modules", path: "/lua/advanced/modules" },
        { name: "Garbage Collection", path: "/lua/advanced/garbagecollection" },
        { name: "Performance Optimizations", path: "/lua/advanced/performance-optimizations" }
      ]
    }
  ]
};

export default LuaAdvancedNavigation;
