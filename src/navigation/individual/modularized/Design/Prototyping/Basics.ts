import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Methods",
      subpages: [
        {
          name: "Paper Prototypes",
          path: "/design/prototyping/basics/methods/paper-prototypes"
        },
        {
          name: "Digital Prototypes",
          path: "/design/prototyping/basics/methods/digital-prototypes"
        },
        {
          name: "Flowcharts",
          path: "/design/prototyping/basics/methods/flowcharts"
        }
      ]
    },
    {
      name: "Workflow",
      subpages: [
        {
          name: "Build–Playtest Loop",
          path: "/design/prototyping/basics/workflow/build-playtest-loop"
        },
        {
          name: "Heuristics & Checks",
          path: "/design/prototyping/basics/workflow/heuristics-and-checks"
        }
      ]
    },
    {
      name: "Playtesting",
      subpages: [
        {
          name: "Recruit & Scripts",
          path: "/design/prototyping/basics/playtesting/recruit-and-scripts"
        },
        {
          name: "Survey Templates",
          path: "/design/prototyping/basics/playtesting/survey-templates"
        },
        {
          name: "Observation Checklists",
          path: "/design/prototyping/basics/playtesting/observation-checklists"
        },
        {
          name: "Feedback → Actions",
          path: "/design/prototyping/basics/playtesting/feedback-to-actions"
        }
      ]
    }
  ]
};

export default Basics;