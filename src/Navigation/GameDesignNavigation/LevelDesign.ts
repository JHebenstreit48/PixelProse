import { Subpage } from "@/Navigation/NavigationTypes";

const LevelDesignNavigation: Subpage = {
  name: "Level Design",
  subpages: [
    {
      name: "Basics",
      subpages: [
        { name: "Overview", path: "/gamedesign/leveldesign/basics/overview" },
        { name: "Level Design Principles", path: "/gamedesign/leveldesign/basics/principles" },
        { name: "Environmental Storytelling", path: "/gamedesign/leveldesign/basics/storytelling" },
      ],
    },
    {
      name: "Tools and Techniques",
      subpages: [
        { name: "Tile-based Design", path: "/gamedesign/leveldesign/tools/tile-based" },
        { name: "Open World Design", path: "/gamedesign/leveldesign/tools/open-world" },
        { name: "Puzzle Design", path: "/gamedesign/leveldesign/tools/puzzle-design" },
      ],
    },
    {
      name: "Advanced Topics",
      subpages: [
        { name: "Procedural Generation", path: "/gamedesign/leveldesign/advanced/procedural-generation" },
        { name: "Dynamic Environments", path: "/gamedesign/leveldesign/advanced/dynamic-environments" },
      ],
    },
  ],
};

export default LevelDesignNavigation;
