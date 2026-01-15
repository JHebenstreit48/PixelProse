import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Overview",
      subpages: [
        {
          name: "Introduction",
          path: "/gi/basics/overview/introduction"
        },
        {
          name: "Use Cases",
          path: "/gi/basics/overview/use-cases"
        }
      ]
    },
    {
      name: "Baked GI",
      subpages: [
        {
          name: "Static Lightmaps",
          path: "/gi/basics/baked-gi/static-lightmaps"
        },
        {
          name: "Light Probes",
          path: "/gi/basics/baked-gi/light-probes"
        }
      ]
    },
    {
      name: "Real-Time (Overview)",
      subpages: [
        {
          name: "LPV Overview",
          path: "/gi/basics/real-time-overview/lpv-overview"
        },
        {
          name: "Probe Volumes Overview",
          path: "/gi/basics/real-time-overview/probe-volumes-overview"
        }
      ]
    }
  ]
};

export default Basics;