import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Rendering",
      subpages: [
        {
          name: "URP/HDRP & Built-in",
          path: "/unity/advanced/rendering/urp-hdrp-and-built-in"
        },
        {
          name: "Materials & Shaders",
          path: "/unity/advanced/rendering/materials-and-shaders"
        }
      ]
    },
    {
      name: "Lighting",
      subpages: [
        {
          name: "GI & Lightmapping",
          path: "/unity/advanced/lighting/gi-and-lightmapping"
        },
        {
          name: "Reflection Probes",
          path: "/unity/advanced/lighting/reflection-probes"
        }
      ]
    },
    {
      name: "Physics",
      subpages: [
        {
          name: "Character Controllers",
          path: "/unity/advanced/physics/character-controllers"
        },
        {
          name: "Raycasting",
          path: "/unity/advanced/physics/raycasting"
        }
      ]
    },
    {
      name: "AI & Navigation",
      subpages: [
        {
          name: "NavMesh",
          path: "/unity/advanced/ai-and-navigation/navmesh"
        },
        {
          name: "Behavior Trees",
          path: "/unity/advanced/ai-and-navigation/behavior-trees"
        }
      ]
    },
    {
      name: "Networking",
      subpages: [
        {
          name: "Netcode for GameObjects",
          path: "/unity/advanced/networking/netcode-for-gameobjects"
        },
        {
          name: "Relay & Lobby",
          path: "/unity/advanced/networking/relay-and-lobby"
        }
      ]
    },
    {
      name: "Audio",
      subpages: [
        {
          name: "Audio Mixers",
          path: "/unity/advanced/audio/audio-mixers"
        },
        {
          name: "Spatial Audio",
          path: "/unity/advanced/audio/spatial-audio"
        }
      ]
    },
    {
      name: "DOTS & Jobs",
      subpages: [
        {
          name: "ECS Basics",
          path: "/unity/advanced/dots-and-jobs/ecs-basics"
        },
        {
          name: "Jobs & Burst",
          path: "/unity/advanced/dots-and-jobs/jobs-and-burst"
        }
      ]
    }
  ]
};

export default Advanced;