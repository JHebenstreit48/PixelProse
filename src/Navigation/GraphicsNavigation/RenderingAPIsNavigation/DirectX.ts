import { Subpage } from "@/Navigation/NavigationTypes";

const DirectXNavigation: Subpage = {
  name: "DirectX",
  subpages: [
    {
      name: "Basics",
      subpages: [
        { name: "Overview", path: "/rendering/directx/basics/overview" },
        { name: "Direct3D", path: "/rendering/directx/basics/direct3d" },
        { name: "Direct2D", path: "/rendering/directx/basics/direct2d" },
        { name: "DirectWrite", path: "/rendering/directx/basics/directwrite" },
        { name: "DirectInput", path: "/rendering/directx/basics/directinput" },
        { name: "DirectSound", path: "/rendering/directx/basics/directsound" },
      ],
    },
    {
      name: "Getting Started",
      subpages: [
        { name: "Development Setup", path: "/rendering/directx/getting-started/setup" },
        { name: "Hello, DirectX", path: "/rendering/directx/getting-started/hello" },
      ],
    },
    {
      name: "Rendering Techniques",
      subpages: [
        { name: "Rasterization", path: "/rendering/directx/rendering/rasterization" },
        {
          name: "Ray Tracing (DirectX Specific)",
          subpages: [
            { name: "Introduction to DXR", path: "/rendering/directx/rendering/raytracing/intro" },
            { name: "DXR Pipeline", path: "/rendering/directx/rendering/raytracing/pipeline" },
            { name: "DXR Performance Optimization", path: "/rendering/directx/rendering/raytracing/performance" },
          ],
        },
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
        { name: "PIX for Windows", path: "/rendering/directx/tools/pix" },
      ],
    },
  ],
};

export default DirectXNavigation;
