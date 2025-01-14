import { Subpage } from "@/Navigation/NavigationTypes";

const DirectXNavigation: Subpage = {
  name: "DirectX",
  subpages: [
    {
      name: "Basics",
      subpages: [
        { name: "Overview", path: "/rendering/directx/basics/overview" }, // Intro to DirectX
        { name: "Direct3D", path: "/rendering/directx/basics/direct3d" }, // Overview of Direct3D
        { name: "Direct2D", path: "/rendering/directx/basics/direct2d" }, // Overview of Direct2D
        { name: "DirectWrite", path: "/rendering/directx/basics/directwrite" }, // Text rendering
      ],
    },
    {
      name: "Rendering Techniques",
      subpages: [
        { name: "Rasterization", path: "/rendering/directx/rendering/rasterization" },
        { name: "Ray Tracing", path: "/rendering/directx/rendering/raytracing" }, // Real-time ray tracing
        { name: "Post-Processing Effects", path: "/rendering/directx/rendering/postprocessing" },
      ],
    },
    {
      name: "Advanced Topics",
      subpages: [
        { name: "Compute Shaders", path: "/rendering/directx/advanced/computeshaders" },
        { name: "Tessellation", path: "/rendering/directx/advanced/tessellation" },
        { name: "Multi-threaded Rendering", path: "/rendering/directx/advanced/multithreading" },
      ],
    },
    {
      name: "Tools & Frameworks",
      subpages: [
        { name: "DirectX Toolkit", path: "/rendering/directx/tools/toolkit" },
        { name: "PIX for Windows", path: "/rendering/directx/tools/pix" }, // Debugging and profiling
      ],
    },
  ],
};

export default DirectXNavigation;
