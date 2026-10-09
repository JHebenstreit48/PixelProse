import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Principles",
      subpages: [
        {
          name: "Readability & Guidance",
          path: "/design/levels/basics/principles/readability-and-guidance"
        },
        {
          name: "Flow & Pacing",
          path: "/design/levels/basics/principles/flow-and-pacing"
        }
      ]
    },
    {
      name: "Layout & Blocking",
      subpages: [
        {
          name: "Metrics & Scale",
          path: "/design/levels/basics/layout-and-blocking/metrics-and-scale"
        },
        {
          name: "Grayboxing",
          path: "/design/levels/basics/layout-and-blocking/grayboxing"
        }
      ]
    },
    {
      name: "Level Editors",
      subpages: [
        {
          name: "Tiled",
          path: "/design/levels/basics/level-editors/tiled"
        },
        {
          name: "LDtk",
          path: "/design/levels/basics/level-editors/ldtk"
        }
      ]
    },
    {
      name: "Encounters",
      subpages: [
        {
          name: "Enemies & Traps",
          path: "/design/levels/basics/encounters/enemies-and-traps"
        },
        {
          name: "Checkpoints & Saves",
          path: "/design/levels/basics/encounters/checkpoints-and-saves"
        }
      ]
    }
  ]
};

export default Basics;