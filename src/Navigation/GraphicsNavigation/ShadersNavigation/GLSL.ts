import { Subpage } from "@/Navigation/NavigationTypes";

const GLSLNavigation: Subpage = {
  name: "GLSL",
  subpages: [
    {
      name: "Basics",
      subpages: [
        { name: "Overview", path: "/shaders/glsl/basics/overview" },
        { name: "Syntax", path: "/shaders/glsl/basics/syntax" },
        { name: "Data Types", path: "/shaders/glsl/basics/datatypes" },
        { name: "Compilation", path: "/shaders/glsl/basics/compilation" },
        { name: "Uniforms & Attributes", path: "/shaders/glsl/basics/uniforms-attributes" },
      ],
    },
    {
      name: "Rendering Techniques",
      subpages: [
        { name: "Deferred Shading", path: "/shaders/glsl/rendering/deferred" },
        { name: "Screen-Space Effects", path: "/shaders/glsl/rendering/screen-space" },
        { name: "Shadow Mapping", path: "/shaders/glsl/rendering/shadows" },
      ],
    },
    {
      name: "Advanced Topics",
      subpages: [
        { name: "Tessellation Shaders", path: "/shaders/glsl/advanced/tessellation" },
        { name: "Compute Shaders", path: "/shaders/glsl/advanced/compute" },
        { name: "Ray Marching", path: "/shaders/glsl/advanced/ray-marching" },
        { name: "Optimization", path: "/shaders/glsl/advanced/optimization" },
      ],
    },
    {
      name: "Tools",
      subpages: [
        { name: "ShaderToy", path: "/shaders/glsl/tools/shadertoy" },
        { name: "OpenGL Integration", path: "/shaders/glsl/tools/opengl" },
      ],
    },
  ],
};

export default GLSLNavigation;
