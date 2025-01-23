import { Subpage } from "@/Navigation/NavigationTypes";

const PythonNavigation: Subpage = {
  name: "Python",
  subpages: [
    {
      name: "Game Libraries",
      subpages: [
        { name: "Pygame", path: "/python/game-libraries/pygame" },
        { name: "Arcade Library", path: "/python/game-libraries/arcade" },
        { name: "Panda3D", path: "/python/game-libraries/panda3d" },
      ],
    },
    {
      name: "AI and Machine Learning",
      subpages: [
        { name: "Pathfinding Algorithms", path: "/python/ai-ml/pathfinding" },
        { name: "Procedural Generation", path: "/python/ai-ml/procedural-gen" },
        { name: "Neural Networks in Games", path: "/python/ai-ml/neural-networks" },
      ],
    },
    {
      name: "Tools",
      subpages: [
        { name: "Level Editors", path: "/python/tools/level-editors" },
        { name: "Asset Pipelines", path: "/python/tools/asset-pipelines" },
        { name: "Data Conversion Tools", path: "/python/tools/data-conversion" },
        { name: "Debugging Tools", path: "/python/tools/debugging" },
        { name: "Performance Profiling Tools", path: "/python/tools/performance-profiling" },
      ],
    },
    {
      name: "Testing",
      subpages: [
        { name: "Pytest for Games", path: "/python/testing/pytest" },
        { name: "Integration Testing in Game Development", path: "/python/testing/integration" },
        { name: "Performance Testing for Games", path: "/python/testing/performance" },
      ],
    },
    {
      name: "Graphics Programming",
      subpages: [
        { name: "2D & 3D Rendering", path: "/python/graphics/rendering" },
      ],
    },
    {
      name: "Integrations",
      subpages: [
        { name: "Blender Scripting", path: "/python/integrations/blender" },
        { name: "Custom Game Engines", path: "/python/integrations/custom-engines" },
      ],
    },
    {
      name: "Game Frameworks",
      subpages: [
        { name: "Ren'Py", path: "/python/game-frameworks/renpy" },
        { name: "Godot with Python", path: "/python/game-frameworks/godot" },
        { name: "Kivy", path: "/python/game-frameworks/kivy" },
      ],
    },
  ],
};

export default PythonNavigation;
