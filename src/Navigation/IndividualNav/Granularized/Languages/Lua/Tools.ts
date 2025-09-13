import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const LuaToolsNavigation: Subpage = {
  name: "Tools",
  subpages: [
    {
      name: "Libraries",
      subpages: [
        { name: "Standard Libraries", path: "/lua/tools/stdlib" },
        { name: "Popular Libraries", path: "/lua/tools/popularlibs" }
      ]
    },
    {
      name: "Development Tools",
      subpages: [
        { name: "Debugging Tools", path: "/lua/tools/debugging" },
        { name: "Code Profiler", path: "/lua/tools/profiler" },
        { name: "Luajit", path: "/lua/tools/luajit" },
        { name: "ZeroBrane Studio", path: "/lua/tools/zerobrane" }
      ]
    }
  ]
};

export default LuaToolsNavigation;
