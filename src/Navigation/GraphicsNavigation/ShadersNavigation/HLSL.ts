import { Subpage } from "@/Navigation/NavigationTypes";

const HLSLNavigation: Subpage = {
  name: "HLSL",
  subpages: [
    {
      name: "Basics",
      subpages: [
        { name: "Overview", path: "/shaders/hlsl/basics/overview" },
        { name: "Syntax", path: "/shaders/hlsl/basics/syntax" },
        { name: "Data Types", path: "/shaders/hlsl/basics/datatypes" },
        { name: "Compilation", path: "/shaders/hlsl/basics/compilation" },
      ],
    },
    {
      name: "Rendering Techniques",
      subpages: [
        { name: "Lighting Models", path: "/shaders/hlsl/rendering/lighting" },
        { name: "Post-Processing", path: "/shaders/hlsl/rendering/postprocessing" },
        { name: "Shadow Mapping", path: "/shaders/hlsl/rendering/shadows" },
      ],
    },
    {
      name: "Advanced Topics",
      subpages: [
        { name: "Tessellation Shaders", path: "/shaders/hlsl/advanced/tessellation" },
        { name: "Compute Shaders", path: "/shaders/hlsl/advanced/compute" },
        { name: "Optimization", path: "/shaders/hlsl/advanced/optimization" },
      ],
    },
    {
      name: "Tools",
      subpages: [
        { name: "DirectX Integration", path: "/shaders/hlsl/tools/directx" },
      ],
    },
  ],
};

export default HLSLNavigation;
