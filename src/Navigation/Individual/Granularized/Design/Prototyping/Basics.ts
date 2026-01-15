import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Methods",
      subpages: [
        {
          name: "Paper Prototypes",
          path: "/gamedesign/prototyping/basics/methods/paper-prototypes"
        },
        {
          name: "Digital Prototypes",
          path: "/gamedesign/prototyping/basics/methods/digital-prototypes"
        }
      ]
    },
    {
      name: "Workflow",
      subpages: [
        {
          name: "Build–Playtest Loop",
          path: "/gamedesign/prototyping/basics/workflow/build-playtest-loop"
        },
        {
          name: "Heuristics & Checks",
          path: "/gamedesign/prototyping/basics/workflow/heuristics-and-checks"
        }
      ]
    },
    {
      name: "Playtesting",
      subpages: [
        {
          name: "Recruit & Scripts",
          path: "/gamedesign/prototyping/basics/playtesting/recruit-and-scripts"
        },
        {
          name: "Feedback → Actions",
          path: "/gamedesign/prototyping/basics/playtesting/feedback-to-actions"
        }
      ]
    }
  ]
};

export default Basics;