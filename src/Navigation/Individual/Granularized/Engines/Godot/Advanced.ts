import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Rendering",
      subpages: [
        {
          name: "Materials & Shaders",
          path: "/godot/advanced/rendering/materials-and-shaders"
        },
        {
          name: "Lighting & PostFX",
          path: "/godot/advanced/rendering/lighting-and-postfx"
        }
      ]
    },
    {
      name: "Physics",
      subpages: [
        {
          name: "2D & 3D Bodies",
          path: "/godot/advanced/physics/2d-and-3d-bodies"
        },
        {
          name: "Areas & Layers",
          path: "/godot/advanced/physics/areas-and-layers"
        }
      ]
    },
    {
      name: "AI & Navigation",
      subpages: [
        {
          name: "Navigation Meshes",
          path: "/godot/advanced/ai-and-navigation/navigation-meshes"
        },
        {
          name: "Pathfinding",
          path: "/godot/advanced/ai-and-navigation/pathfinding"
        }
      ]
    },
    {
      name: "Networking",
      subpages: [
        {
          name: "Multiplayer API",
          path: "/godot/advanced/networking/multiplayer-api"
        },
        {
          name: "RPC & Sync",
          path: "/godot/advanced/networking/rpc-and-sync"
        }
      ]
    },
    {
      name: "Audio",
      subpages: [
        {
          name: "AudioStreamPlayer",
          path: "/godot/advanced/audio/audiostreamplayer"
        },
        {
          name: "Environmental FX",
          path: "/godot/advanced/audio/environmental-fx"
        }
      ]
    },
    {
      name: "UI",
      subpages: [
        {
          name: "Custom Widgets",
          path: "/godot/advanced/ui/custom-widgets"
        },
        {
          name: "Themes & Styling",
          path: "/godot/advanced/ui/themes-and-styling"
        }
      ]
    }
  ]
};

export default Advanced;