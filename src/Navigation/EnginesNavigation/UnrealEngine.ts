import { Subpage } from "@/Navigation/NavigationTypes";

const UnrealEngineNavigation: Subpage = {
  name: "Unreal Engine",
  subpages: [
    {
      name: "Basics",
      subpages: [
        { name: "Introduction", path: "/unreal/basics/introduction" },
        { name: "Editor Basics", path: "/unreal/basics/editor-basics" },
        { name: "Blueprint System", path: "/unreal/basics/blueprint-system" },
        { name: "Project Setup", path: "/unreal/basics/project-setup" },
      ],
    },
    {
      name: "Scripting",
      subpages: [
        { name: "Gameplay Framework", path: "/unreal/scripting/gameplay-framework" }, // Unreal-specific C++ structure
        { name: "Blueprint Integration", path: "/unreal/scripting/blueprint-integration" }, // Connecting C++ and Blueprints
      ],
    },
    {
      name: "Graphics",
      subpages: [
        { name: "Materials and Shaders", path: "/unreal/graphics/materials-shaders" },
        { name: "Lighting", path: "/unreal/graphics/lighting" },
        { name: "Post-Processing Effects", path: "/unreal/graphics/post-processing" },
        { name: "Nanite and Lumen", path: "/unreal/graphics/nanite-lumen" },
      ],
    },
    {
      name: "Physics",
      subpages: [
        { name: "Physical Materials", path: "/unreal/physics/physical-materials" },
        { name: "Ragdolls and Constraints", path: "/unreal/physics/ragdolls-constraints" },
        { name: "Chaos Physics", path: "/unreal/physics/chaos" },
      ],
    },
    {
      name: "AI",
      subpages: [
        { name: "Behavior Trees", path: "/unreal/ai/behavior-trees" },
        { name: "NavMesh System", path: "/unreal/ai/navmesh-system" },
        { name: "Blackboard System", path: "/unreal/ai/blackboard" },
      ],
    },
    {
      name: "Networking",
      subpages: [
        { name: "Multiplayer Basics", path: "/unreal/networking/multiplayer-basics" },
        { name: "Replication", path: "/unreal/networking/replication" },
        { name: "Dedicated Servers", path: "/unreal/networking/dedicated-servers" },
      ],
    },
    {
      name: "Audio",
      subpages: [
        { name: "Audio Mixer", path: "/unreal/audio/audio-mixer" },
        { name: "Spatial Audio", path: "/unreal/audio/spatial-audio" },
        { name: "Sound Cues", path: "/unreal/audio/sound-cues" },
      ],
    },
    {
      name: "UI Development",
      subpages: [
        { name: "UMG Basics", path: "/unreal/ui/umg-basics" },
        { name: "Widget Blueprints", path: "/unreal/ui/widget-blueprints" },
        { name: "Responsive UI", path: "/unreal/ui/responsive-ui" },
      ],
    },
    {
      name: "Tools & Plugins",
      subpages: [
        { name: "Marketplace", path: "/unreal/tools/marketplace" },
        { name: "Third-Party Plugins", path: "/unreal/tools/third-party-plugins" },
        { name: "Source Control", path: "/unreal/tools/source-control" },
      ],
    },
  ],
};

export default UnrealEngineNavigation;
