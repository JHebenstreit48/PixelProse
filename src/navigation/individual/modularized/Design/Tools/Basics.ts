import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Narrative Tools",
      subpages: [
        {
          name: "Twine",
          path: "/design/tools/basics/narrative-tools/twine"
        },
        {
          name: "Ink & Yarn",
          path: "/design/tools/basics/narrative-tools/ink-and-yarn"
        }
      ]
    },
    {
      name: "Level Editors",
      subpages: [
        {
          name: "Tiled",
          path: "/design/tools/basics/level-editors/tiled"
        },
        {
          name: "LDtk",
          path: "/design/tools/basics/level-editors/ldtk"
        }
      ]
    },
    {
      name: "Mapping & Flow",
      subpages: [
        {
          name: "Story Maps",
          path: "/design/tools/basics/mapping-and-flow/story-maps"
        },
        {
          name: "Flowcharts",
          path: "/design/tools/basics/mapping-and-flow/flowcharts"
        }
      ]
    },
    {
      name: "Playtest Kits",
      subpages: [
        {
          name: "Survey Templates",
          path: "/design/tools/basics/playtest-kits/survey-templates"
        },
        {
          name: "Observation Checklists",
          path: "/design/tools/basics/playtest-kits/observation-checklists"
        }
      ]
    },
    {
      name: "Production Tracking",
      subpages: [
        {
          name: "Agile & Scrum for Games",
          path: "/design/tools/basics/production-tracking/agile-and-scrum-for-games"
        },
        {
          name: "Kanban Boards",
          path: "/design/tools/basics/production-tracking/kanban-boards"
        }
      ]
    }
  ]
};

export default Basics;