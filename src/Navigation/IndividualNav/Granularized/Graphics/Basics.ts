import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Pipeline",
      subpages: [
        {
          name: "Stages Overview",
          path: "/pipeline/basics/stages-overview"
        },
        {
          name: "Draw Calls & Batching",
          path: "/pipeline/basics/draw-calls-and-batching"
        }
      ]
    },
    {
      name: "Transforms & Camera",
      subpages: [
        {
          name: "Coordinate Spaces",
          path: "/transforms/basics/coordinate-spaces"
        },
        {
          name: "View & Projection",
          path: "/transforms/basics/view-and-projection"
        }
      ]
    },
    {
      name: "Lighting",
      subpages: [
        {
          name: "Lambert & Phong",
          path: "/lighting/basics/lambert-and-phong"
        },
        {
          name: "Normals & Tangents",
          path: "/lighting/basics/normals-and-tangents"
        }
      ]
    },
    {
      name: "Textures",
      subpages: [
        {
          name: "Samplers & Filtering",
          path: "/textures/basics/samplers-and-filtering"
        },
        {
          name: "Mipmaps & Anisotropy",
          path: "/textures/basics/mipmaps-and-anisotropy"
        }
      ]
    },
    {
      name: "Meshes & Materials",
      subpages: [
        {
          name: "Vertex Formats",
          path: "/meshes/basics/vertex-formats"
        },
        {
          name: "Material Parameters",
          path: "/materials/basics/material-parameters"
        }
      ]
    },
    {
      name: "Framebuffers",
      subpages: [
        {
          name: "Depth & Stencil",
          path: "/framebuffer/basics/depth-and-stencil"
        },
        {
          name: "Render Targets",
          path: "/framebuffer/basics/render-targets"
        }
      ]
    }
  ]
};

export default Basics;