import { Subpage } from "@/Navigation/NavigationTypes";

const OpenGLNavigation: Subpage = {
  name: "OpenGL",
  subpages: [
    {
      name: "Basics",
      subpages: [
        { name: "Overview", path: "/rendering/opengl/basics/overview" }, // Intro to OpenGL
        { name: "GLSL Integration", path: "/rendering/opengl/basics/glsl" }, // Using GLSL with OpenGL
        { name: "Rendering Pipeline", path: "/rendering/opengl/basics/pipeline" },
        { name: "Buffers and Objects", path: "/rendering/opengl/basics/buffers" },
      ],
    },
    {
      name: "Rendering Techniques",
      subpages: [
        { name: "Lighting Models", path: "/rendering/opengl/rendering/lighting" },
        { name: "Shadow Mapping", path: "/rendering/opengl/rendering/shadows" },
        { name: "Post-Processing Effects", path: "/rendering/opengl/rendering/postprocessing" },
      ],
    },
    {
      name: "Advanced Topics",
      subpages: [
        { name: "Tessellation", path: "/rendering/opengl/advanced/tessellation" },
        { name: "Compute Shaders", path: "/rendering/opengl/advanced/computeshaders" },
        { name: "Performance Optimization", path: "/rendering/opengl/advanced/optimization" },
      ],
    },
    {
      name: "Tools & Frameworks",
      subpages: [
        { name: "GLEW", path: "/rendering/opengl/tools/glew" },
        { name: "GLFW", path: "/rendering/opengl/tools/glfw" },
        { name: "Debugging Tools", path: "/rendering/opengl/tools/debugging" }, // Debugging OpenGL
      ],
    },
  ],
};

export default OpenGLNavigation;
