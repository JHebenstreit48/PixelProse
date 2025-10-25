import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Branching & State",
      subpages: [
        {
          name: "Choices & Consequences",
          path: "/gamedesign/narrative/advanced/branching-and-state/choices-and-consequences"
        },
        {
          name: "State Tracking",
          path: "/gamedesign/narrative/advanced/branching-and-state/state-tracking"
        }
      ]
    },
    {
      name: "Systems & Tools",
      subpages: [
        {
          name: "Quest Graphs",
          path: "/gamedesign/narrative/advanced/systems-and-tools/quest-graphs"
        },
        {
          name: "Scripting Formats",
          path: "/gamedesign/narrative/advanced/systems-and-tools/scripting-formats"
        }
      ]
    },
    {
      name: "Production",
      subpages: [
        {
          name: "Localization",
          path: "/gamedesign/narrative/advanced/production/localization"
        },
        {
          name: "VO & Timing",
          path: "/gamedesign/narrative/advanced/production/vo-and-timing"
        }
      ]
    }
  ]
};

export default Advanced;