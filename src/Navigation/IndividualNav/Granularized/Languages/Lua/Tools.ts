import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const Tools: Subpage = {
  name: "Tools",
  subpages: [
    {
      name: "Libraries",
      subpages: [
        {
          name: "Standard Library",
          path: "/lua/tools/libraries/standard-library"
        },
        {
          name: "Popular Libraries",
          path: "/lua/tools/libraries/popular-libraries"
        }
      ]
    },
    {
      name: "Dev Tools",
      subpages: [
        {
          name: "Debugging Tools",
          path: "/lua/tools/dev-tools/debugging-tools"
        },
        {
          name: "Profiler",
          path: "/lua/tools/dev-tools/profiler"
        },
        {
          name: "LuaJIT",
          path: "/lua/tools/dev-tools/luajit"
        },
        {
          name: "ZeroBrane Studio",
          path: "/lua/tools/dev-tools/zerobrane-studio"
        }
      ]
    }
  ]
};

export default Tools;