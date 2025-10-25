import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Compute & Tessellation",
      subpages: [
        {
          name: "Compute Shaders",
          path: "/direct3d/advanced/compute-and-tessellation/compute-shaders"
        },
        {
          name: "Tessellation",
          path: "/direct3d/advanced/compute-and-tessellation/tessellation"
        }
      ]
    },
    {
      name: "DXR",
      subpages: [
        {
          name: "DXR Intro",
          path: "/direct3d/advanced/dxr/dxr-intro"
        },
        {
          name: "Pipeline & Perf",
          path: "/direct3d/advanced/dxr/pipeline-and-performance"
        }
      ]
    },
    {
      name: "Performance",
      subpages: [
        {
          name: "Descriptor Heaps",
          path: "/direct3d/advanced/performance/descriptor-heaps"
        },
        {
          name: "PIX Profiling",
          path: "/direct3d/advanced/performance/pix-profiling"
        }
      ]
    }
  ]
};

export default Advanced;