import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const CryEngineNavigation: Subpage = {
  name: "CryEngine",
  subpages: [
    {
      name: "Basics",
      subpages: [
        { name: "Introduction", path: "/cryengine/basics/introduction" },
        { name: "Sandbox Editor", path: "/cryengine/basics/sandbox-editor" },
        { name: "Project Setup", path: "/cryengine/basics/project-setup" },
        { name: "Entities & Components", path: "/cryengine/basics/entities-components" },
      ],
    },
    {
      name: "Scripting",
      subpages: [
        { name: "Flow Graph", path: "/cryengine/scripting/flow-graph" },
        { name: "Lua Scripting", path: "/cryengine/scripting/lua" },
        { name: "CryEntity System", path: "/cryengine/scripting/cryentity-system" },
      ],
    },
    {
      name: "Graphics",
      subpages: [
        { name: "Materials", path: "/cryengine/graphics/materials" },
        { name: "Lighting", path: "/cryengine/graphics/lighting" },
        { name: "CryRenderer", path: "/cryengine/graphics/renderer" },
        { name: "Terrain & Vegetation", path: "/cryengine/graphics/terrain-vegetation" },
      ],
    },
    {
      name: "Physics",
      subpages: [
        { name: "Rigid Bodies", path: "/cryengine/physics/rigid-bodies" },
        { name: "Soft Bodies", path: "/cryengine/physics/soft-bodies" },
        { name: "Vehicles & Destruction", path: "/cryengine/physics/vehicles-destruction" },
      ],
    },
    {
      name: "AI",
      subpages: [
        { name: "AI System Overview", path: "/cryengine/ai/overview" },
        { name: "Pathfinding", path: "/cryengine/ai/pathfinding" },
        { name: "Behavior Trees", path: "/cryengine/ai/behavior-trees" },
        { name: "Navigation Meshes", path: "/cryengine/ai/navigation-meshes" },
      ],
    },
    {
      name: "Audio",
      subpages: [
        { name: "Audio Translation Layer", path: "/cryengine/audio/audio-translation-layer" },
        { name: "Triggering Sounds", path: "/cryengine/audio/triggering-sounds" },
        { name: "Environmental Audio", path: "/cryengine/audio/environmental-audio" },
      ],
    },
    {
      name: "Networking",
      subpages: [
        { name: "Multiplayer Basics", path: "/cryengine/networking/multiplayer-basics" },
        { name: "Replication", path: "/cryengine/networking/replication" },
        { name: "Dedicated Servers", path: "/cryengine/networking/dedicated-servers" },
      ],
    },
    {
      name: "UI Development",
      subpages: [
        { name: "UI System Overview", path: "/cryengine/ui/overview" },
        { name: "UI Actions & Events", path: "/cryengine/ui/actions-events" },
        { name: "Custom HUDs", path: "/cryengine/ui/custom-huds" },
      ],
    },
    {
      name: "Tools & Plugins",
      subpages: [
        { name: "CryEngine Marketplace", path: "/cryengine/tools/marketplace" },
        { name: "Third-Party Plugins", path: "/cryengine/tools/third-party-plugins" },
        { name: "Source Control", path: "/cryengine/tools/source-control" },
      ],
    },
  ],
};

export default CryEngineNavigation;
