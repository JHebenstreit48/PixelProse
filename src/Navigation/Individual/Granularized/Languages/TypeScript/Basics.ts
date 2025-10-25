import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Introduction",
          path: "/typescript/game-dev/basics/fundamentals/introduction"
        },
        {
          name: "tsconfig (Games)",
          path: "/typescript/game-dev/basics/fundamentals/tsconfig-games"
        }
      ]
    },
    {
      name: "Types",
      subpages: [
        {
          name: "ECS",
          subpages: [
            {
              name: "EntityId (Branded)",
              path: "/typescript/game-dev/basics/types/ecs/entityid-branded"
            },
            {
              name: "Components & Systems",
              path: "/typescript/game-dev/basics/types/ecs/components-and-systems"
            }
          ]
        },
        {
          name: "Math",
          subpages: [
            {
              name: "Vec2/Vec3 Types",
              path: "/typescript/game-dev/basics/types/math/vec2-vec3-types"
            },
            {
              name: "Tuple vs Class",
              path: "/typescript/game-dev/basics/types/math/tuple-vs-class"
            }
          ]
        },
        {
          name: "Performance",
          subpages: [
            {
              name: "No-Cost Abstractions",
              path: "/typescript/game-dev/basics/types/performance/no-cost-abstractions"
            },
            {
              name: "Inline Data & Structs",
              path: "/typescript/game-dev/basics/types/performance/inline-data-and-structs"
            }
          ]
        }
      ]
    },
    {
      name: "Interop",
      subpages: [
        {
          name: "DOM & Workers",
          subpages: [
            {
              name: "DOM & Workers Types",
              path: "/typescript/game-dev/basics/interop/dom-and-workers/dom-and-workers-types"
            },
            {
              name: "Worker Message Types",
              path: "/typescript/game-dev/basics/interop/dom-and-workers/worker-message-types"
            }
          ]
        },
        {
          name: "Graphics & Audio",
          subpages: [
            {
              name: "WebGL/WebAudio Types",
              path: "/typescript/game-dev/basics/interop/graphics-and-audio/webgl-webaudio-types"
            },
            {
              name: "Canvas/WebGPU Types",
              path: "/typescript/game-dev/basics/interop/graphics-and-audio/canvas-webgpu-types"
            }
          ]
        }
      ]
    }
  ]
};

export default Basics;