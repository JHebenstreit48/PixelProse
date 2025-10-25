import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Rendering",
      subpages: [
        {
          name: "Renderer & Pipeline",
          path: "/cry/advanced/rendering/renderer-and-pipeline"
        },
        {
          name: "Post-Processing",
          path: "/cry/advanced/rendering/post-processing"
        }
      ]
    },
    {
      name: "World & Environment",
      subpages: [
        {
          name: "Terrain & Vegetation",
          path: "/cry/advanced/world-and-environment/terrain-and-vegetation"
        },
        {
          name: "World Streaming",
          path: "/cry/advanced/world-and-environment/world-streaming"
        }
      ]
    },
    {
      name: "Physics",
      subpages: [
        {
          name: "Soft Bodies",
          path: "/cry/advanced/physics/soft-bodies"
        },
        {
          name: "Vehicles & Destruction",
          path: "/cry/advanced/physics/vehicles-and-destruction"
        }
      ]
    },
    {
      name: "AI",
      subpages: [
        {
          name: "Behavior Trees",
          path: "/cry/advanced/ai/behavior-trees"
        },
        {
          name: "Navigation Meshes",
          path: "/cry/advanced/ai/navigation-meshes"
        }
      ]
    },
    {
      name: "Networking",
      subpages: [
        {
          name: "Replication",
          path: "/cry/advanced/networking/replication"
        },
        {
          name: "Dedicated Servers",
          path: "/cry/advanced/networking/dedicated-servers"
        }
      ]
    },
    {
      name: "Audio",
      subpages: [
        {
          name: "Audio Translation Layer",
          path: "/cry/advanced/audio/audio-translation-layer"
        },
        {
          name: "Environmental Audio",
          path: "/cry/advanced/audio/environmental-audio"
        }
      ]
    },
    {
      name: "Performance",
      subpages: [
        {
          name: "Console & CVars",
          path: "/cry/advanced/performance/console-and-cvars"
        },
        {
          name: "Profiling & Optimization",
          path: "/cry/advanced/performance/profiling-and-optimization"
        }
      ]
    }
  ]
};

export default Advanced;