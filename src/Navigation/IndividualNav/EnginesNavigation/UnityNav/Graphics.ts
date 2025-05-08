import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const UnityGraphicsNavigation: Subpage = {
  name: "Graphics",
  subpages: [
    {
      name: "Rendering Techniques",
      subpages: [
        { name: "Materials and Shaders", path: "/unity/graphics/materials-shaders" },
        { name: "Post-Processing", path: "/unity/graphics/post-processing" }
      ]
    },
    {
      name: "Pipeline & Lighting",
      subpages: [
        { name: "Lighting", path: "/unity/graphics/lighting" },
        { name: "Rendering Pipelines", path: "/unity/graphics/rendering-pipelines" }
      ]
    }
  ]
};

export default UnityGraphicsNavigation;
