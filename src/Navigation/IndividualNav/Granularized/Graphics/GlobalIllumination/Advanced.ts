import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Techniques",
      subpages: [
        {
          name: "Lightmaps",
          path: "/gi/advanced/techniques/lightmaps"
        },
        {
          name: "Voxel GI",
          path: "/gi/advanced/techniques/voxel-gi"
        },
        {
          name: "Screen Space GI",
          path: "/gi/advanced/techniques/screen-space-gi"
        }
      ]
    },
    {
      name: "Real-Time GI",
      subpages: [
        {
          name: "LPV",
          path: "/gi/advanced/real-time-gi/lpv"
        },
        {
          name: "Probe Volumes",
          path: "/gi/advanced/real-time-gi/probe-volumes"
        }
      ]
    },
    {
      name: "Performance",
      subpages: [
        {
          name: "Optimization",
          path: "/gi/advanced/performance/optimization"
        },
        {
          name: "Trade-Offs",
          path: "/gi/advanced/performance/trade-offs"
        }
      ]
    }
  ]
};

export default Advanced;