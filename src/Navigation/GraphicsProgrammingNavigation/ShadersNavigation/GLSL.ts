import { Subpage } from "@/Navigation/NavigationTypes";

const GLSLNavigation: Subpage = {
  name: "GLSL",
  subpages: [
    {
      name: "Basics",
      subpages: [
        { name: "Overview", path: "/shaders/glsl/basics/overview" }, // Intro to GLSL
        { name: "Syntax", path: "/shaders/glsl/basics/syntax" }, // GLSL-specific syntax
        { name: "Data Types", path: "/shaders/glsl/basics/datatypes" }, // Vector, matrix types
        { name: "Compilation", path: "/shaders/glsl/basics/compilation" }, // Shader compilation
      ],
    },
    {
      name: "Rendering Techniques",
      subpages: [
        { name: "Lighting Models", path: "/shaders/glsl/rendering/lighting" }, // Phong, Blinn-Phong
        { name: "Post-Processing", path: "/shaders/glsl/rendering/postprocessing" }, // Bloom, blur
        { name: "Shadow Mapping", path: "/shaders/glsl/rendering/shadows" }, // Techniques for shadows
      ],
    },
    {
      name: "Advanced Topics",
      subpages: [
        { name: "Tessellation Shaders", path: "/shaders/glsl/advanced/tessellation" }, // Detailed surfaces
        { name: "Compute Shaders", path: "/shaders/glsl/advanced/compute" }, // Parallel processing
        { name: "Optimization", path: "/shaders/glsl/advanced/optimization" }, // Performance tips
      ],
    },
    {
      name: "Tools",
      subpages: [
        { name: "Shader Debugging", path: "/shaders/glsl/tools/debugging" }, // Debugging GLSL shaders
        { name: "OpenGL Integration", path: "/shaders/glsl/tools/opengl" }, // Using GLSL with OpenGL
      ],
    },
  ],
};

export default GLSLNavigation;
