import { Subpage } from "@/Navigation/NavigationTypes";

const RayTracingNavigation: Subpage = {
  name: "Ray Tracing",
  subpages: [
    {
      name: "Introduction to Ray Tracing",
      path: "/graphics/raytracing/intro",
    },
    {
      name: "Reflections & Refractions",
      path: "/graphics/raytracing/reflections",
    },
    {
      name: "Shadows & Caustics",
      path: "/graphics/raytracing/shadows",
    },
    {
      name: "Performance & APIs",
      path: "/graphics/raytracing/performance",
    },
  ],
};

export default RayTracingNavigation;
