import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Procedural",
      subpages: [
        {
          name: "Noise & Tiling",
          path: "/design/levels/advanced/procedural/noise-and-tiling"
        },
        {
          name: "Graph/Room Gen",
          path: "/design/levels/advanced/procedural/graph-room-generation"
        }
      ]
    },
    {
      name: "Dynamic",
      subpages: [
        {
          name: "Events & Scripts",
          path: "/design/levels/advanced/dynamic/events-and-scripts"
        },
        {
          name: "Reactive Worlds",
          path: "/design/levels/advanced/dynamic/reactive-worlds"
        }
      ]
    },
    {
      name: "Optimization",
      subpages: [
        {
          name: "Occlusion & Culling",
          path: "/design/levels/advanced/optimization/occlusion-and-culling"
        },
        {
          name: "Lighting & Bake",
          path: "/design/levels/advanced/optimization/lighting-and-bake"
        }
      ]
    }
  ]
};

export default Advanced;