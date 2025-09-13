import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const PBRNavigation: Subpage = {
  name: "Physically Based Rendering",
  subpages: [
    {
      name: "Introduction to PBR",
      path: "/graphics/pbr/intro",
    },
    {
      name: "Material Creation",
      subpages: [
        { name: "Base Color (Albedo)", path: "/graphics/pbr/materials/basecolor" },
        { name: "Metallic Workflow", path: "/graphics/pbr/materials/metallic" },
        { name: "Specular Workflow", path: "/graphics/pbr/materials/specular" },
        { name: "Ambient Occlusion", path: "/graphics/pbr/materials/ambient-occlusion" },
      ],
    },
    {
      name: "Lighting Models",
      subpages: [
        { name: "Diffuse Lighting", path: "/graphics/pbr/lighting/diffuse" },
        { name: "Specular Lighting", path: "/graphics/pbr/lighting/specular" },
        { name: "Energy Conservation", path: "/graphics/pbr/lighting/energy-conservation" },
        { name: "Microfacet Models", path: "/graphics/pbr/lighting/microfacet" },
      ],
    },
    {
      name: "Rendering Pipelines",
      subpages: [
        { name: "Forward Rendering", path: "/graphics/pbr/pipelines/forward" },
        { name: "Deferred Rendering", path: "/graphics/pbr/pipelines/deferred" },
      ],
    },
    {
      name: "Optimization",
      subpages: [
        { name: "Texture Compression", path: "/graphics/pbr/optimization/texture-compression" },
        { name: "Level of Detail (LOD)", path: "/graphics/pbr/optimization/lod" },
      ],
    },
    {
      name: "Tools and Workflows",
      subpages: [
        { name: "Substance Painter", path: "/graphics/pbr/tools/substance-painter" },
        { name: "Quixel Mixer", path: "/graphics/pbr/tools/quixel-mixer" },
      ],
    },
  ],
};

export default PBRNavigation;
