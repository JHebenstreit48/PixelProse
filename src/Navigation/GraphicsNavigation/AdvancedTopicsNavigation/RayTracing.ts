import { Subpage } from "@/Navigation/NavigationTypes";

const RayTracingNavigation: Subpage = {
  name: "Ray Tracing",
  subpages: [
    {
      name: "Introduction to Ray Tracing",
      subpages: [
        { name: "What is Ray Tracing?", path: "/graphics/raytracing/intro/what-is" },
        { name: "History and Evolution", path: "/graphics/raytracing/intro/history" },
        { name: "Comparison with Rasterization", path: "/graphics/raytracing/intro/comparison" },
      ],
    },
    {
      name: "Core Concepts",
      subpages: [
        { name: "Reflections & Refractions", path: "/graphics/raytracing/concepts/reflections" },
        { name: "Shadows & Caustics", path: "/graphics/raytracing/concepts/shadows" },
        { name: "Global Illumination with Ray Tracing", path: "/graphics/raytracing/concepts/global-illumination" },
      ],
    },
    {
      name: "Performance & Implementation",
      subpages: [
        { name: "Performance Optimization", path: "/graphics/raytracing/performance/optimization" },
        { name: "Hardware Acceleration", path: "/graphics/raytracing/performance/hardware" }, // e.g., NVIDIA RTX, AMD RDNA
        { name: "Ray Tracing APIs", path: "/graphics/raytracing/performance/apis" }, // DirectX Raytracing (DXR), Vulkan Ray Tracing
      ],
    },
    {
      name: "Advanced Techniques",
      subpages: [
        { name: "Denoising in Ray Tracing", path: "/graphics/raytracing/advanced/denoising" },
        { name: "Hybrid Rendering Techniques", path: "/graphics/raytracing/advanced/hybrid" }, // Combining ray tracing with rasterization
        { name: "Path Tracing", path: "/graphics/raytracing/advanced/path-tracing" },
      ],
    },
    {
      name: "Applications in Game Development",
      subpages: [
        { name: "Ray Tracing for Realistic Lighting", path: "/graphics/raytracing/applications/lighting" },
        { name: "Ray Tracing in Cinematics", path: "/graphics/raytracing/applications/cinematics" },
        { name: "Interactive Ray Tracing", path: "/graphics/raytracing/applications/interactive" },
      ],
    },
  ],
};

export default RayTracingNavigation;
