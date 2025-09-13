import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const PostProcessingEffectsNavigation: Subpage = {
  name: "Post-Processing Effects",
  subpages: [
    {
      name: "Introduction to Post-Processing",
      path: "/graphics/postprocessing/intro",
    },
    {
      name: "Pipelines",
      path: "/graphics/postprocessing/pipelines", // Added to describe pipeline integration
    },
    {
      name: "Effects Overview",
      subpages: [
        { name: "Bloom", path: "/graphics/postprocessing/effects/bloom" },
        { name: "Motion Blur", path: "/graphics/postprocessing/effects/motion-blur" },
        { name: "Depth of Field", path: "/graphics/postprocessing/effects/depth-of-field" },
        { name: "Color Grading", path: "/graphics/postprocessing/effects/color-grading" },
        { name: "Lens Flare", path: "/graphics/postprocessing/effects/lens-flare" },
        { name: "Chromatic Aberration", path: "/graphics/postprocessing/effects/chromatic-aberration" },
        { name: "Vignetting", path: "/graphics/postprocessing/effects/vignetting" },
        { name: "Screen-Space Ambient Occlusion (SSAO)", path: "/graphics/postprocessing/effects/ssao" },
        { name: "Screen-Space Reflections (SSR)", path: "/graphics/postprocessing/effects/ssr" },
      ],
    },
    {
      name: "Performance",
      subpages: [
        { name: "Optimization Techniques", path: "/graphics/postprocessing/performance/optimization" },
        { name: "Effect Quality Settings", path: "/graphics/postprocessing/performance/quality-settings" },
        { name: "Balancing Performance and Quality", path: "/graphics/postprocessing/performance/balancing" },
      ],
    },
  ],
};

export default PostProcessingEffectsNavigation;
