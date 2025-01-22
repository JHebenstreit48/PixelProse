import { Subpage } from "@/Navigation/NavigationTypes";

const PostProcessingEffectsNavigation: Subpage = {
  name: "Global Illumination",
  subpages: [
    {
      name: "Introduction to Post-Processing",
      path: "/graphics/postprocessing/intro",
    },
    {
      name: "Effects Overview",
      path: "/graphics/postprocessing/effects",
    },
    {
      name: "Performance",
      path: "/graphics/postprocessing/performance",
    },
  ],
};

export default PostProcessingEffectsNavigation;
