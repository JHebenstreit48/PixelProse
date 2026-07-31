import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Rendering",
      subpages: [
        {
          name: "Nanite & Lumen",
          path: "/unreal/advanced/rendering/nanite-and-lumen"
        },
        {
          name: "Post-Processing",
          path: "/unreal/advanced/rendering/post-processing"
        }
      ]
    },
    {
      name: "Materials & Shaders",
      subpages: [
        {
          name: "Materials Workflow",
          path: "/unreal/advanced/materials-and-shaders/materials-workflow"
        },
        {
          name: "Shader Graph & HLSL",
          path: "/unreal/advanced/materials-and-shaders/shader-graph-and-hlsl"
        }
      ]
    },
    {
      name: "Physics",
      subpages: [
        {
          name: "Chaos & Ragdolls",
          path: "/unreal/advanced/physics/chaos-and-ragdolls"
        },
        {
          name: "Physical Materials",
          path: "/unreal/advanced/physics/physical-materials"
        }
      ]
    },
    {
      name: "AI",
      subpages: [
        {
          name: "Behavior Trees",
          path: "/unreal/advanced/ai/behavior-trees"
        },
        {
          name: "Blackboard & Perception",
          path: "/unreal/advanced/ai/blackboard-and-perception"
        }
      ]
    },
    {
      name: "Navigation",
      subpages: [
        {
          name: "NavMesh System",
          path: "/unreal/advanced/navigation/navmesh-system"
        },
        {
          name: "Pathfinding",
          path: "/unreal/advanced/navigation/pathfinding"
        }
      ]
    },
    {
      name: "Networking",
      subpages: [
        {
          name: "Replication",
          path: "/unreal/advanced/networking/replication"
        },
        {
          name: "Dedicated Servers",
          path: "/unreal/advanced/networking/dedicated-servers"
        }
      ]
    },
    {
      name: "Audio",
      subpages: [
        {
          name: "Audio Mixer",
          path: "/unreal/advanced/audio/audio-mixer"
        },
        {
          name: "Spatial Audio & Cues",
          path: "/unreal/advanced/audio/spatial-audio-and-cues"
        }
      ]
    },
    {
      name: "World & Streaming",
      subpages: [
        {
          name: "Level Streaming",
          path: "/unreal/advanced/world-and-streaming/level-streaming"
        },
        {
          name: "World Partition",
          path: "/unreal/advanced/world-and-streaming/world-partition"
        }
      ]
    },
    {
      name: "Performance",
      subpages: [
        {
          name: "Unreal Insights",
          path: "/unreal/advanced/performance/unreal-insights"
        },
        {
          name: "Stat Commands & Profilers",
          path: "/unreal/advanced/performance/stat-commands-and-profilers"
        }
      ]
    }
  ]
};

export default Advanced;