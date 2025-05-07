import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const LuaGameDevNavigation: Subpage = {
  name: "Game Development",
  subpages: [
    {
      name: "Game Frameworks",
      subpages: [
        { name: "Love2D", path: "/lua/gamedev/love2d" },
        { name: "Defold", path: "/lua/gamedev/defold" },
        { name: "Solar2D", path: "/lua/gamedev/solar2d" },
        { name: "LÖVR", path: "/lua/gamedev/lovr" }
      ]
    },
    {
      name: "Optimization",
      subpages: [
        { name: "Optimizing Lua in Games", path: "/lua/gamedev/optimization" },
        { name: "Performance Tips", path: "/lua/gamedev/performance-tips" }
      ]
    }
  ]
};

export default LuaGameDevNavigation;
