import { Subpage } from "@/Navigation/NavigationTypes";

const LuaNavigation: Subpage = {
  name: "Lua",
  subpages: [
    {
      name: "Basics",
      subpages: [
        { name: "Overview", path: "/lua/basics/overview" }, // Introduction and history of Lua
        { name: "Syntax", path: "/lua/basics/syntax" }, // Basic syntax structure
        { name: "Data Types", path: "/lua/basics/datatypes" }, // Numbers, strings, tables, etc.
        { name: "Control Flow", path: "/lua/basics/controlflow" }, // if, for, while, repeat-until
        { name: "Functions", path: "/lua/basics/functions" }, // Defining and using functions
      ],
    },
    {
      name: "Advanced",
      subpages: [
        { name: "Metatables", path: "/lua/advanced/metatables" }, // Customizing table behavior
        { name: "Coroutines", path: "/lua/advanced/coroutines" }, // Managing concurrency
        { name: "Modules", path: "/lua/advanced/modules" }, // Creating and using modules
        { name: "Garbage Collection", path: "/lua/advanced/garbagecollection" }, // Memory management
      ],
    },
    {
      name: "Tools & Libraries",
      subpages: [
        { name: "Standard Libraries", path: "/lua/tools/stdlib" }, // String, math, I/O, table
        { name: "Popular Libraries", path: "/lua/tools/popularlibs" }, // LuaSocket, Penlight, etc.
        { name: "Debugging Tools", path: "/lua/tools/debugging" }, // Debug library, LuaInspect
        { name: "Luajit", path: "/lua/tools/luajit" }, // Just-in-time compiler for Lua
      ],
    },
    {
      name: "Game Development",
      subpages: [
        { name: "Love2D", path: "/lua/gamedev/love2d" }, // Framework for 2D games
        { name: "Defold", path: "/lua/gamedev/defold" }, // Free game engine for Lua
        { name: "Solar2D", path: "/lua/gamedev/solar2d" }, // Formerly Corona SDK
        { name: "Integration with Engines", path: "/lua/gamedev/integration" }, // Unity, Unreal, custom engines
      ],
    },
  ],
};

export default LuaNavigation;
