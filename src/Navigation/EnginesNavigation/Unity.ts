import { Subpage } from "@/Navigation/NavigationTypes";

const UnityNavigation: Subpage = {
  name: "Unity",
  subpages: [
    {
      name: "Basics",
      subpages: [
        { name: "Introduction", path: "/unity/basics/introduction" },
        { name: "Unity Editor", path: "/unity/basics/editor" },
        { name: "Scene Management", path: "/unity/basics/scene-management" },
        { name: "GameObjects & Components", path: "/unity/basics/gameobjects-components" },
      ],
    },
    {
      name: "Graphics",
      subpages: [
        { name: "Materials and Shaders", path: "/unity/graphics/materials-shaders" },
        { name: "Lighting", path: "/unity/graphics/lighting" },
        { name: "Post-Processing", path: "/unity/graphics/post-processing" },
        { name: "Rendering Pipelines", path: "/unity/graphics/rendering-pipelines" },
      ],
    },
    {
      name: "Physics",
      subpages: [
        { name: "Rigidbody and Colliders", path: "/unity/physics/rigidbody-colliders" },
        { name: "Joints", path: "/unity/physics/joints" },
        { name: "Raycasting", path: "/unity/physics/raycasting" },
        { name: "Character Controllers", path: "/unity/physics/character-controllers" },
      ],
    },
    {
      name: "AI",
      subpages: [
        { name: "NavMesh Basics", path: "/unity/ai/navmesh-basics" },
        { name: "Pathfinding", path: "/unity/ai/pathfinding" },
        { name: "Behavior Trees", path: "/unity/ai/behavior-trees" },
        { name: "AI Tools and Plugins", path: "/unity/ai/tools-plugins" }, // Placeholder for future Unity-specific tools
      ],
    },
    {
      name: "Networking",
      subpages: [
        { name: "Netcode for GameObjects", path: "/unity/networking/netcode" },
      ],
    },
    {
      name: "Audio",
      subpages: [
        { name: "Audio Sources", path: "/unity/audio/audio-sources" },
        { name: "Audio Mixers", path: "/unity/audio/audio-mixers" },
        { name: "Spatial Audio", path: "/unity/audio/spatial-audio" },
      ],
    },
    {
      name: "UI Development",
      subpages: [
        { name: "Canvas Basics", path: "/unity/ui/canvas-basics" },
        { name: "UI Elements", path: "/unity/ui/ui-elements" },
        { name: "Responsive UI", path: "/unity/ui/responsive-ui" },
      ],
    },
    {
      name: "Tools & Plugins",
      subpages: [
        { name: "Asset Store", path: "/unity/tools/asset-store" },
        { name: "Version Control", path: "/unity/tools/version-control" },
        { name: "Third-Party Plugins", path: "/unity/tools/third-party-plugins" },
      ],
    },
  ],
};

export default UnityNavigation;
