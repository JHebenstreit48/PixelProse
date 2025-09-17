import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Procedural",
      subpages: [
        {
          name: "Noise & Tiling",
          path: "/gamedesign/levels/advanced/procedural/noise-and-tiling"
        },
        {
          name: "Graph/Room Gen",
          path: "/gamedesign/levels/advanced/procedural/graph-room-generation"
        }
      ]
    },
    {
      name: "Dynamic",
      subpages: [
        {
          name: "Events & Scripts",
          path: "/gamedesign/levels/advanced/dynamic/events-and-scripts"
        },
        {
          name: "Reactive Worlds",
          path: "/gamedesign/levels/advanced/dynamic/reactive-worlds"
        }
      ]
    },
    {
      name: "Optimization",
      subpages: [
        {
          name: "Occlusion & Culling",
          path: "/gamedesign/levels/advanced/optimization/occlusion-and-culling"
        },
        {
          name: "Lighting & Bake",
          path: "/gamedesign/levels/advanced/optimization/lighting-and-bake"
        }
      ]
    }
  ]
};

export default Advanced;