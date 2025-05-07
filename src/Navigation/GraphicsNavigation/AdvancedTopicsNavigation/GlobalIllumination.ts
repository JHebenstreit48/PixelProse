import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const GlobalIlluminationNavigation: Subpage = {
  name: "Global Illumination",
  subpages: [
    {
      name: "Introduction to GI",
      path: "/graphics/gi/intro",
    },
    {
      name: "Techniques",
      subpages: [
        { name: "Lightmaps", path: "/graphics/gi/techniques/lightmaps" },
        { name: "Voxel-Based GI", path: "/graphics/gi/techniques/voxels" },
        { name: "Screen Space GI", path: "/graphics/gi/techniques/screenspace" },
      ],
    },
    {
      name: "Baked GI",
      subpages: [
        { name: "Static Light Baking", path: "/graphics/gi/baked/static" },
        { name: "Dynamic Light Baking", path: "/graphics/gi/baked/dynamic" },
      ],
    },
    {
      name: "Real-Time GI",
      subpages: [
        { name: "Dynamic Light Propagation", path: "/graphics/gi/realtime/propagation" },
      ],
    },
    {
      name: "Performance",
      subpages: [
        { name: "Optimization Techniques", path: "/graphics/gi/performance/optimization" },
        { name: "Trade-Offs", path: "/graphics/gi/performance/tradeoffs" },
      ],
    },
    {
      name: "Tools",
      subpages: [
        { name: "NVIDIA Nsight", path: "/graphics/gi/tools/nsight" },
        { name: "RenderDoc", path: "/graphics/gi/tools/renderdoc" },
      ],
    },
  ],
};

export default GlobalIlluminationNavigation;
