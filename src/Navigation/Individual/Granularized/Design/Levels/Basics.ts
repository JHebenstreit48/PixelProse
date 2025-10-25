import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Principles",
      subpages: [
        {
          name: "Readability & Guidance",
          path: "/gamedesign/levels/basics/principles/readability-and-guidance"
        },
        {
          name: "Flow & Pacing",
          path: "/gamedesign/levels/basics/principles/flow-and-pacing"
        }
      ]
    },
    {
      name: "Layout & Blocking",
      subpages: [
        {
          name: "Metrics & Scale",
          path: "/gamedesign/levels/basics/layout-and-blocking/metrics-and-scale"
        },
        {
          name: "Grayboxing",
          path: "/gamedesign/levels/basics/layout-and-blocking/grayboxing"
        }
      ]
    },
    {
      name: "Encounters",
      subpages: [
        {
          name: "Enemies & Traps",
          path: "/gamedesign/levels/basics/encounters/enemies-and-traps"
        },
        {
          name: "Checkpoints & Saves",
          path: "/gamedesign/levels/basics/encounters/checkpoints-and-saves"
        }
      ]
    }
  ]
};

export default Basics;