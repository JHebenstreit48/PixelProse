import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Pipeline",
      subpages: [
        {
          name: "Stages Overview",
          path: "/rendering/basics/pipeline/stages-overview"
        },
        {
          name: "Draw Calls & Batching",
          path: "/rendering/basics/pipeline/draw-calls-and-batching"
        }
      ]
    },
    {
      name: "Transforms & Camera",
      subpages: [
        {
          name: "Coordinate Spaces",
          path: "/rendering/basics/transforms-and-camera/coordinate-spaces"
        },
        {
          name: "View & Projection",
          path: "/rendering/basics/transforms-and-camera/view-and-projection"
        }
      ]
    },
    {
      name: "Lighting",
      subpages: [
        {
          name: "Lambert & Phong",
          path: "/rendering/basics/lighting/lambert-and-phong"
        },
        {
          name: "Normals & Tangents",
          path: "/rendering/basics/lighting/normals-and-tangents"
        }
      ]
    },
    {
      name: "Textures",
      subpages: [
        {
          name: "Samplers & Filtering",
          path: "/rendering/basics/textures/samplers-and-filtering"
        },
        {
          name: "Mipmaps & Anisotropy",
          path: "/rendering/basics/textures/mipmaps-and-anisotropy"
        }
      ]
    },
    {
      name: "Meshes & Materials",
      subpages: [
        {
          name: "Vertex Formats",
          path: "/rendering/basics/meshes-and-materials/vertex-formats"
        },
        {
          name: "Material Parameters",
          path: "/rendering/basics/meshes-and-materials/material-parameters"
        }
      ]
    },
    {
      name: "Framebuffers",
      subpages: [
        {
          name: "Depth & Stencil",
          path: "/rendering/basics/framebuffers/depth-and-stencil"
        },
        {
          name: "Render Targets",
          path: "/rendering/basics/framebuffers/render-targets"
        }
      ]
    }
  ]
};

export default Basics;