import { Subpage } from "@/Navigation/NavigationTypes";

const PythonNavigation: Subpage = {
  name: "Python",
  subpages: [
    {
      name: "Game Libraries",
      subpages: [
        { name: "Pygame", path: "/python/game-libraries/pygame" }, // Framework for 2D games
        { name: "Arcade Library", path: "/python/game-libraries/arcade" }, // 2D game library
        { name: "Panda3D", path: "/python/game-libraries/panda3d" }, // 3D game engine
      ],
    },
    {
      name: "AI and Machine Learning",
      subpages: [
        { name: "Pathfinding Algorithms", path: "/python/ai-ml/pathfinding" }, // A*, Dijkstra
        { name: "Procedural Generation", path: "/python/ai-ml/procedural-gen" }, // Maps, levels
        { name: "Neural Networks in Games", path: "/python/ai-ml/neural-networks" }, // Reinforcement learning
      ],
    },
    {
      name: "Game Tools Development",
      subpages: [
        { name: "Level Editors", path: "/python/tools/level-editors" }, // Tools for creating levels
        { name: "Asset Pipelines", path: "/python/tools/asset-pipelines" }, // Managing assets
        { name: "Data Conversion Tools", path: "/python/tools/data-conversion" }, // File format conversion
      ],
    },
    {
      name: "Graphics Programming",
      subpages: [
        { name: "OpenGL Integration", path: "/python/graphics/opengl" }, // OpenGL with Python
        { name: "Shaders in Python", path: "/python/graphics/shaders" }, // Using GLSL or custom shaders
        { name: "2D & 3D Rendering", path: "/python/graphics/rendering" }, // Rendering concepts
      ],
    },
    {
      name: "Integrations",
      subpages: [
        { name: "Blender Scripting", path: "/python/integrations/blender" }, // Blender Python API
        { name: "Unity Integration", path: "/python/integrations/unity" }, // Scripting Python in Unity
        { name: "Custom Game Engines", path: "/python/integrations/custom-engines" }, // Embedding Python
      ],
    },
    {
      name: "Game Frameworks",
      subpages: [
        { name: "Ren'Py", path: "/python/game-frameworks/renpy" }, // Visual novel engine
        { name: "Godot with Python", path: "/python/game-frameworks/godot" }, // Python support in Godot
        { name: "Kivy", path: "/python/game-frameworks/kivy" }, // Cross-platform UI and games
      ],
    },
  ],
};

export default PythonNavigation;
