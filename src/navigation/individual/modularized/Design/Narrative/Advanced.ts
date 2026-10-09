import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Branching & State",
      subpages: [
        {
          name: "Choices & Consequences",
          path: "/design/narrative/advanced/branching-and-state/choices-and-consequences"
        },
        {
          name: "State Tracking",
          path: "/design/narrative/advanced/branching-and-state/state-tracking"
        }
      ]
    },
    {
      name: "Systems & Tools",
      subpages: [
        {
          name: "Quest Graphs",
          path: "/design/narrative/advanced/systems-and-tools/quest-graphs"
        },
        {
          name: "Scripting Formats",
          path: "/design/narrative/advanced/systems-and-tools/scripting-formats"
        },
        {
          name: "Twine",
          path: "/design/narrative/advanced/systems-and-tools/twine"
        },
        {
          name: "Ink & Yarn",
          path: "/design/narrative/advanced/systems-and-tools/ink-and-yarn"
        }
      ]
    },
    {
      name: "Production",
      subpages: [
        {
          name: "Localization",
          path: "/design/narrative/advanced/production/localization"
        },
        {
          name: "VO & Timing",
          path: "/design/narrative/advanced/production/vo-and-timing"
        }
      ]
    }
  ]
};

export default Advanced;