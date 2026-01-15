import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Foundations",
      subpages: [
        {
          name: "Overview",
          path: "/post-processing/basics/foundations/overview"
        },
        {
          name: "Pipeline Integration",
          path: "/post-processing/basics/foundations/pipeline-integration"
        }
      ]
    },
    {
      name: "Core Effects",
      subpages: [
        {
          name: "Bloom",
          path: "/post-processing/basics/core-effects/bloom"
        },
        {
          name: "Color Grading",
          path: "/post-processing/basics/core-effects/color-grading"
        }
      ]
    },
    {
      name: "Motion & Blur",
      subpages: [
        {
          name: "Motion Blur",
          path: "/post-processing/basics/motion-and-blur/motion-blur"
        },
        {
          name: "Depth of Field",
          path: "/post-processing/basics/motion-and-blur/depth-of-field"
        }
      ]
    },
    {
      name: "Vignette & Aberration",
      subpages: [
        {
          name: "Vignetting",
          path: "/post-processing/basics/vignette-and-aberration/vignetting"
        },
        {
          name: "Chromatic Aberration",
          path: "/post-processing/basics/vignette-and-aberration/chromatic-aberration"
        }
      ]
    }
  ]
};

export default Basics;