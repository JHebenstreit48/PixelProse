import { Subpage } from "@/Navigation/NavigationTypes";

const PBRNavigation: Subpage = {
  name: "Physically Based Rendering",
  subpages: [
    {
      name: "Introduction to PBR",
      path: "/graphics/pbr/intro",
    },
    {
      name: "Material Creation",
      path: "/graphics/pbr/materials",
    },
    {
      name: "Lighting Models",
      path: "/graphics/pbr/lighting",
    },
    {
      name: "Optimization",
      path: "/graphics/pbr/optimization",
    },
  ],
};

export default PBRNavigation;
