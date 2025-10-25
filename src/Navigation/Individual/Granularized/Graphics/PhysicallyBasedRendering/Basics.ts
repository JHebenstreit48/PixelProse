import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "What Is PBR",
          path: "/pbr/basics/fundamentals/what-is-pbr"
        },
        {
          name: "Energy Conservation",
          path: "/pbr/basics/fundamentals/energy-conservation"
        }
      ]
    },
    {
      name: "Textures",
      subpages: [
        {
          name: "Albedo / Base Color",
          path: "/pbr/basics/textures/albedo-base-color"
        },
        {
          name: "Roughness & Metallic",
          path: "/pbr/basics/textures/roughness-and-metallic"
        }
      ]
    },
    {
      name: "Lighting Models",
      subpages: [
        {
          name: "Diffuse Basics",
          path: "/pbr/basics/lighting-models/diffuse-basics"
        },
        {
          name: "Specular Basics",
          path: "/pbr/basics/lighting-models/specular-basics"
        }
      ]
    },
    {
      name: "Workflows",
      subpages: [
        {
          name: "Metallic Workflow",
          path: "/pbr/basics/workflows/metallic-workflow"
        },
        {
          name: "Specular Workflow",
          path: "/pbr/basics/workflows/specular-workflow"
        }
      ]
    }
  ]
};

export default Basics;