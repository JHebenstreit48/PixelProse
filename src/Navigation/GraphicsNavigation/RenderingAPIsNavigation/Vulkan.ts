import { Subpage } from "@/Navigation/NavigationTypes";

const VulkanNavigation: Subpage = {
  name: "Vulkan",
  subpages: [
    {
      name: "Basics",
      subpages: [
        { name: "Overview", path: "/rendering/vulkan/basics/overview" },
        { name: "SPIR-V", path: "/rendering/vulkan/basics/spirv" },
        { name: "Rendering Pipeline", path: "/rendering/vulkan/basics/pipeline" },
        { name: "Memory Management", path: "/rendering/vulkan/basics/memory" },
        { name: "Command Buffers", path: "/rendering/vulkan/basics/command-buffers" }, // Unique to Vulkan
        { name: "Synchronization Primitives", path: "/rendering/vulkan/basics/synchronization" }, // Fences, Semaphores
      ],
    },
    {
      name: "Rendering Techniques",
      subpages: [
        { name: "Deferred Rendering", path: "/rendering/vulkan/rendering/deferred" },
      ],
    },
    {
      name: "Advanced Topics",
      subpages: [
        { name: "Tessellation", path: "/rendering/vulkan/advanced/tessellation" },
        { name: "Compute Shaders", path: "/rendering/vulkan/advanced/computeshaders" },
        { name: "Multi-threaded Rendering", path: "/rendering/vulkan/advanced/multithreading" },
        { name: "Pipeline Barriers", path: "/rendering/vulkan/advanced/pipeline-barriers" }, // Resource transitions
        { name: "Descriptor Sets", path: "/rendering/vulkan/advanced/descriptor-sets" }, // Resource bindings
      ],
    },
    {
      name: "Tools & Frameworks",
      subpages: [
        { name: "Vulkan SDK", path: "/rendering/vulkan/tools/sdk" },
        { name: "Validation Layers", path: "/rendering/vulkan/tools/validation" },
        { name: "RenderDoc", path: "/rendering/vulkan/tools/renderdoc" },
        { name: "Vulkan Best Practices", path: "/rendering/vulkan/tools/best-practices" }, // Additional tool
      ],
    },
  ],
};

export default VulkanNavigation;
