import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const GodotNavigation: Subpage = {
  name: "Godot",
  subpages: [
    {
      name: "Basics",
      subpages: [
        { name: "Introduction", path: "/godot/basics/introduction" }, // Overview of Godot Engine
        { name: "Editor Basics", path: "/godot/basics/editor-basics" }, // Navigating the Godot Editor
        { name: "Project Setup", path: "/godot/basics/project-setup" }, // Setting up projects in Godot
        { name: "Node System", path: "/godot/basics/node-system" }, // Core Godot architecture
      ],
    },
    {
      name: "Scripting",
      subpages: [
        { name: "GDScript Basics", path: "/godot/scripting/gdscript-basics" }, // Godot's scripting language
        { name: "Visual Scripting", path: "/godot/scripting/visual-scripting" }, // Node-based scripting
        { name: "C# Integration in Godot", path: "/godot/scripting/csharp-integration" }, // How to integrate and use C# in Godot
        { name: "Signals and Events", path: "/godot/scripting/signals-events" }, // Event-driven architecture
      ],
    },
    {
      name: "Graphics",
      subpages: [
        { name: "Materials and Shaders", path: "/godot/graphics/materials-shaders" }, // Material system in Godot
        { name: "Lighting", path: "/godot/graphics/lighting" }, // 2D and 3D lighting systems
        { name: "Post-Processing Effects", path: "/godot/graphics/post-processing" }, // Effects in Godot
        { name: "Tilemaps and Sprites", path: "/godot/graphics/tilemaps-sprites" }, // 2D graphics features
      ],
    },
    {
      name: "Physics",
      subpages: [
        { name: "2D Physics", path: "/godot/physics/2d-physics" }, // Physics for 2D games
        { name: "3D Physics", path: "/godot/physics/3d-physics" }, // Physics for 3D games
        { name: "Rigid Bodies and Areas", path: "/godot/physics/rigid-bodies-areas" }, // Godot's physics nodes
      ],
    },
    {
      name: "AI",
      subpages: [
        { name: "Navigation Meshes", path: "/godot/ai/navigation-meshes" }, // AI navigation system
        { name: "Behavior Trees", path: "/godot/ai/behavior-trees" }, // Godot's AI tools
        { name: "Pathfinding", path: "/godot/ai/pathfinding" }, // Pathfinding systems in Godot
      ],
    },
    {
      name: "Audio",
      subpages: [
        { name: "AudioStreamPlayer", path: "/godot/audio/audiostreamplayer" }, // Core audio player in Godot
        { name: "Environmental Effects", path: "/godot/audio/environmental-effects" }, // Audio effects and reverb
        { name: "Dynamic Audio", path: "/godot/audio/dynamic-audio" }, // Procedural audio generation
      ],
    },
    {
      name: "Networking",
      subpages: [
        { name: "Multiplayer API", path: "/godot/networking/multiplayer-api" }, // Godot's networking API
        { name: "RPC System", path: "/godot/networking/rpc-system" }, // Remote Procedure Calls in Godot
        { name: "Dedicated Servers", path: "/godot/networking/dedicated-servers" }, // Hosting servers with Godot
      ],
    },
    {
      name: "UI Development",
      subpages: [
        { name: "Control Nodes", path: "/godot/ui/control-nodes" }, // Core of Godot's UI system
        { name: "Responsive UI Design", path: "/godot/ui/responsive-ui" }, // Adapting UI to different resolutions
        { name: "Custom Widgets", path: "/godot/ui/custom-widgets" }, // Creating custom UI components
      ],
    },
  ],
};

export default GodotNavigation;
