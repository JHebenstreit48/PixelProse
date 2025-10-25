import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Performance",
      subpages: [
        {
          name: "Object Count & Draw Calls",
          path: "/construct/advanced/performance/object-count-and-draw-calls"
        },
        {
          name: "Profiler & Debugger",
          path: "/construct/advanced/performance/profiler-and-debugger"
        }
      ]
    },
    {
      name: "Scripting & Extensibility",
      subpages: [
        {
          name: "JavaScript API",
          path: "/construct/advanced/scripting-and-extensibility/javascript-api"
        },
        {
          name: "Plugins & Extensions",
          path: "/construct/advanced/scripting-and-extensibility/plugins-and-extensions"
        }
      ]
    },
    {
      name: "Physics & Pathfinding",
      subpages: [
        {
          name: "Physics & Collisions",
          path: "/construct/advanced/physics-and-pathfinding/physics-and-collisions"
        },
        {
          name: "Pathfinding & Navigation",
          path: "/construct/advanced/physics-and-pathfinding/pathfinding-and-navigation"
        }
      ]
    },
    {
      name: "UI & Data",
      subpages: [
        {
          name: "HUD & Menus",
          path: "/construct/advanced/ui-and-data/hud-and-menus"
        },
        {
          name: "Save/Load & Storage",
          path: "/construct/advanced/ui-and-data/save-load-and-storage"
        }
      ]
    },
    {
      name: "Multiplayer",
      subpages: [
        {
          name: "Multiplayer Basics",
          path: "/construct/advanced/multiplayer/multiplayer-basics"
        },
        {
          name: "Sync & Lag Comp",
          path: "/construct/advanced/multiplayer/sync-and-lag-comp"
        }
      ]
    },
    {
      name: "Publish & Monetize",
      subpages: [
        {
          name: "Export & Packaging",
          path: "/construct/advanced/publish-and-monetize/export-and-packaging"
        },
        {
          name: "Ads & IAP",
          path: "/construct/advanced/publish-and-monetize/ads-and-iap"
        }
      ]
    }
  ]
};

export default Advanced;