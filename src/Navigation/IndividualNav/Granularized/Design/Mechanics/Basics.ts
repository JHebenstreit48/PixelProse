import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Foundations",
      subpages: [
        {
          name: "Overview",
          path: "/gamedesign/mechanics/basics/foundations/overview"
        },
        {
          name: "Verbs & Interactions",
          path: "/gamedesign/mechanics/basics/foundations/verbs-and-interactions"
        }
      ]
    },
    {
      name: "Goals & Rewards",
      subpages: [
        {
          name: "Goals & Rules",
          path: "/gamedesign/mechanics/basics/goals-and-rewards/goals-and-rules"
        },
        {
          name: "Rewards & Feedback",
          path: "/gamedesign/mechanics/basics/goals-and-rewards/rewards-and-feedback"
        }
      ]
    },
    {
      name: "Loops",
      subpages: [
        {
          name: "Core Loop",
          path: "/gamedesign/mechanics/basics/loops/core-loop"
        },
        {
          name: "Meta Loop",
          path: "/gamedesign/mechanics/basics/loops/meta-loop"
        }
      ]
    }
  ]
};

export default Basics;