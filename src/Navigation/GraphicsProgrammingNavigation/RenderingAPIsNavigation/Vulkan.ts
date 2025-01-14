import { Subpage } from "@/Navigation/NavigationTypes";

const VulkanNavigation: Subpage = {
  name: "Vulkan",
  subpages: [
    {
      name: "Basics",
      subpages: [
        { name: "Overview", path: "/rendering/vulkan/basics/overview" }, // Intro to Vulkan
        { name: "SPIR-V", path: "/rendering/vulkan/basics/spirv" }, // Vulkan's shading language
        { name: "Rendering Pipeline", path: "/rendering/vulkan/basics/pipeline" },
        { name: "Memory Management", path: "/rendering/vulkan/basics/memory" }, // GPU memory handling
      ],
    },
    {
      name: "Rendering Techniques",
      subpages: [
        { name: "Deferred Rendering", path: "/rendering/vulkan/rendering/deferred" },
        { name: "Ray Tracing", path: "/rendering/vulkan/rendering/raytracing" }, // Real-time ray tracing
        { name: "Post-Processing Effects", path: "/rendering/vulkan/rendering/postprocessing" },
      ],
    },
    {
      name: "Advanced Topics",
      subpages: [
        { name: "Tessellation", path: "/rendering/vulkan/advanced/tessellation" },
        { name: "Compute Shaders", path: "/rendering/vulkan/advanced/computeshaders" },
        { name: "Multi-threaded Rendering", path: "/rendering/vulkan/advanced/multithreading" },
      ],
    },
    {
      name: "Tools & Frameworks",
      subpages: [
        { name: "Vulkan SDK", path: "/rendering/vulkan/tools/sdk" },
        { name: "Validation Layers", path: "/rendering/vulkan/tools/validation" }, // Debugging and validation
        { name: "RenderDoc", path: "/rendering/vulkan/tools/renderdoc" }, // Debugging Vulkan apps
      ],
    },
  ],
};

export default VulkanNavigation;
