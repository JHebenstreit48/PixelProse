import { Subpage } from "@/Navigation/NavigationTypes";

const HLSLNavigation: Subpage = {
  name: "HLSL",
  subpages: [
    {
      name: "Basics",
      subpages: [
        { name: "Overview", path: "/shaders/hlsl/basics/overview" }, // Intro to HLSL
        { name: "Syntax", path: "/shaders/hlsl/basics/syntax" }, // HLSL-specific syntax
        { name: "Data Types", path: "/shaders/hlsl/basics/datatypes" }, // Vector, matrix types
        { name: "Compilation", path: "/shaders/hlsl/basics/compilation" }, // Shader compilation
      ],
    },
    {
      name: "Rendering Techniques",
      subpages: [
        { name: "Lighting Models", path: "/shaders/hlsl/rendering/lighting" }, // Phong, Blinn-Phong
        { name: "Post-Processing", path: "/shaders/hlsl/rendering/postprocessing" }, // Bloom, blur
        { name: "Shadow Mapping", path: "/shaders/hlsl/rendering/shadows" }, // Techniques for shadows
      ],
    },
    {
      name: "Advanced Topics",
      subpages: [
        { name: "Tessellation Shaders", path: "/shaders/hlsl/advanced/tessellation" }, // Detailed surfaces
        { name: "Compute Shaders", path: "/shaders/hlsl/advanced/compute" }, // Parallel processing
        { name: "Optimization", path: "/shaders/hlsl/advanced/optimization" }, // Performance tips
      ],
    },
    {
      name: "Tools",
      subpages: [
        { name: "Shader Debugging", path: "/shaders/hlsl/tools/debugging" }, // Debugging HLSL shaders
        { name: "DirectX Integration", path: "/shaders/hlsl/tools/directx" }, // Using HLSL with DirectX
      ],
    },
  ],
};

export default HLSLNavigation;
