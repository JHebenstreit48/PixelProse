import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Narrative Tools",
      subpages: [
        {
          name: "Twine Basics",
          path: "/gamedesign/tools/basics/narrative-tools/twine-basics"
        },
        {
          name: "Ink & Yarn Basics",
          path: "/gamedesign/tools/basics/narrative-tools/ink-and-yarn-basics"
        }
      ]
    },
    {
      name: "Level Editors",
      subpages: [
        {
          name: "Tiled Basics",
          path: "/gamedesign/tools/basics/level-editors/tiled-basics"
        },
        {
          name: "LDtk Basics",
          path: "/gamedesign/tools/basics/level-editors/ldtk-basics"
        }
      ]
    },
    {
      name: "Mapping & Flow",
      subpages: [
        {
          name: "Story Maps",
          path: "/gamedesign/tools/basics/mapping-and-flow/story-maps"
        },
        {
          name: "Flowcharts",
          path: "/gamedesign/tools/basics/mapping-and-flow/flowcharts"
        }
      ]
    },
    {
      name: "Playtest Kits",
      subpages: [
        {
          name: "Survey Templates",
          path: "/gamedesign/tools/basics/playtest-kits/survey-templates"
        },
        {
          name: "Observation Checklists",
          path: "/gamedesign/tools/basics/playtest-kits/observation-checklists"
        }
      ]
    }
  ]
};

export default Basics;