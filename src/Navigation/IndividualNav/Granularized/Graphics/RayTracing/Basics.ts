import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Introduction",
          path: "/ray-tracing/basics/fundamentals/introduction"
        },
        {
          name: "Raster vs Ray",
          path: "/ray-tracing/basics/fundamentals/raster-vs-ray"
        }
      ]
    },
    {
      name: "Core Ideas",
      subpages: [
        {
          name: "Reflections & Refractions",
          path: "/ray-tracing/basics/core-ideas/reflections-and-refractions"
        },
        {
          name: "Shadows & Caustics",
          path: "/ray-tracing/basics/core-ideas/shadows-and-caustics"
        }
      ]
    },
    {
      name: "APIs Overview",
      subpages: [
        {
          name: "DXR vs Vulkan RT",
          path: "/ray-tracing/basics/apis-overview/dxr-vs-vulkan-rt"
        },
        {
          name: "Hardware Accel",
          path: "/ray-tracing/basics/apis-overview/hardware-accel"
        }
      ]
    }
  ]
};

export default Basics;