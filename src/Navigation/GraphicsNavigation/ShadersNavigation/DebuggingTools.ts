import { Subpage } from "@/Navigation/NavigationTypes";

const DebuggingToolsNavigation: Subpage = {
  name: "Debugging Tools",
  subpages: [
    {
      name: "Shader Debugging",
      subpages: [
        { name: "GLSL Debugging", path: "/graphics/debugging/shaders/glsl" },
        { name: "HLSL Debugging", path: "/graphics/debugging/shaders/hlsl" },
        { name: "Python Shaders Debugging", path: "/graphics/debugging/shaders/python" },
      ],
    },
    {
      name: "General Graphics Debugging",
      subpages: [
        { name: "RenderDoc", path: "/graphics/debugging/general/renderdoc" },
        { name: "Vulkan Validation Layers", path: "/graphics/debugging/general/vulkan-validation" },
        { name: "PIX for Windows", path: "/graphics/debugging/general/pix" },
        { name: "OpenGL Debugging Techniques", path: "/graphics/debugging/general/opengl" },
      ],
    },
    {
      name: "Performance Analysis",
      subpages: [
        { name: "Profiling Shaders", path: "/graphics/debugging/performance/profiling-shaders" },
        { name: "Identifying Bottlenecks", path: "/graphics/debugging/performance/bottlenecks" },
        { name: "Optimization Tools", path: "/graphics/debugging/performance/optimization-tools" },
      ],
    },
    {
      name: "Error Handling",
      subpages: [
        { name: "Shader Compilation Errors", path: "/graphics/debugging/errors/shader-compilation" },
        { name: "Runtime Errors", path: "/graphics/debugging/errors/runtime" },
        { name: "Validation Tools", path: "/graphics/debugging/errors/validation" },
      ],
    },
  ],
};

export default DebuggingToolsNavigation;
