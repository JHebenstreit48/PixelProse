import { Subpage } from "@/Navigation/NavigationTypes";

const OpenGLNavigation: Subpage = {
  name: "OpenGL",
  subpages: [
    {
      name: "Getting Started",
      subpages: [
        { name: "Installation", path: "/rendering/opengl/getting-started/installation" },
        { name: "Setting Up OpenGL", path: "/rendering/opengl/getting-started/setup" },
        { name: "Hello Triangle Tutorial", path: "/rendering/opengl/getting-started/hello-triangle" },
      ],
    },
    {
      name: "Basics",
      subpages: [
        { name: "Overview", path: "/rendering/opengl/basics/overview" },
        { name: "Rendering Pipeline", path: "/rendering/opengl/basics/pipeline" },
        { name: "Buffers and Objects", path: "/rendering/opengl/basics/buffers" },
      ],
    },
    {
      name: "Rendering Techniques",
      subpages: [
        { name: "Lighting Models", path: "/rendering/opengl/rendering/lighting" },
        { name: "Shadow Mapping", path: "/rendering/opengl/rendering/shadows" },
        { name: "Post-Processing (Reference)", path: "/graphics/postprocessing/intro" }, // Reference only
      ],
    },
    {
      name: "Advanced Topics",
      subpages: [
        { name: "Tessellation", path: "/rendering/opengl/advanced/tessellation" },
        { name: "Compute Shaders", path: "/rendering/opengl/advanced/computeshaders" },
        { name: "Performance Optimization", path: "/rendering/opengl/advanced/optimization" },
        { name: "Debugging Techniques", path: "/rendering/opengl/advanced/debugging" },
        { name: "Error Handling in OpenGL", path: "/rendering/opengl/advanced/error-handling" },
      ],
    },
    {
      name: "Tools & Frameworks",
      subpages: [
        { name: "GLEW", path: "/rendering/opengl/tools/glew" },
        { name: "GLFW", path: "/rendering/opengl/tools/glfw" },
        { name: "Debugging Tools", path: "/rendering/opengl/tools/debugging" },
      ],
    },
  ],
};

export default OpenGLNavigation;
