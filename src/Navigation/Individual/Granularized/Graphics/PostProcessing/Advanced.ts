import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Screen Space",
      subpages: [
        {
          name: "SSAO",
          path: "/post-processing/advanced/screen-space/ssao"
        },
        {
          name: "SSR",
          path: "/post-processing/advanced/screen-space/ssr"
        }
      ]
    },
    {
      name: "Filmic",
      subpages: [
        {
          name: "Tone Mapping",
          path: "/post-processing/advanced/filmic/tone-mapping"
        },
        {
          name: "HDR Grading",
          path: "/post-processing/advanced/filmic/hdr-grading"
        }
      ]
    },
    {
      name: "Performance",
      subpages: [
        {
          name: "Optimization",
          path: "/post-processing/advanced/performance/optimization"
        },
        {
          name: "Quality Settings",
          path: "/post-processing/advanced/performance/quality-settings"
        }
      ]
    }
  ]
};

export default Advanced;