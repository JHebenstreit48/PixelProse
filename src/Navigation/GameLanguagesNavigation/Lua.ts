import { Subpage } from "@/Navigation/NavigationTypes";

const LuaNavigation: Subpage = {
  name: "Lua",
  subpages: [
    {
      name: "Basics",
      subpages: [
        { name: "Overview", path: "/lua/basics/overview" },
        { name: "Syntax", path: "/lua/basics/syntax" },
        { name: "Data Types", path: "/lua/basics/datatypes" },
        { name: "Control Flow", path: "/lua/basics/controlflow" },
        { name: "Functions", path: "/lua/basics/functions" },
      ],
    },
    {
      name: "Advanced",
      subpages: [
        { name: "Metatables", path: "/lua/advanced/metatables" },
        { name: "Coroutines", path: "/lua/advanced/coroutines" },
        { name: "Modules", path: "/lua/advanced/modules" },
        { name: "Garbage Collection", path: "/lua/advanced/garbagecollection" },
      ],
    },
    {
      name: "Testing",
      subpages: [
        { name: "Busted Framework", path: "/lua/testing/busted" },
        { name: "Debugging Best Practices", path: "/lua/testing/debugging" },
        { name: "Error Handling", path: "/lua/testing/error-handling" },
      ],
    },
    {
      name: "Tools & Libraries",
      subpages: [
        { name: "Standard Libraries", path: "/lua/tools/stdlib" },
        { name: "Popular Libraries", path: "/lua/tools/popularlibs" },
        { name: "Debugging Tools", path: "/lua/tools/debugging" },
        { name: "Luajit", path: "/lua/tools/luajit" },
        { name: "ZeroBrane Studio", path: "/lua/tools/zerobrane" },
      ],
    },
    {
      name: "Game Development",
      subpages: [
        { name: "Love2D", path: "/lua/gamedev/love2d" },
        { name: "Defold", path: "/lua/gamedev/defold" },
        { name: "Solar2D", path: "/lua/gamedev/solar2d" },
      ],
    },
  ],
};

export default LuaNavigation;
