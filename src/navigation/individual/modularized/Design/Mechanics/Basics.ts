import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Foundations",
      subpages: [
        {
          name: "Introduction",
          path: "/design/mechanics/basics/foundations/introduction"
        },
        {
          name: "Verbs & Interactions",
          path: "/design/mechanics/basics/foundations/verbs-and-interactions"
        }
      ]
    },
    {
      name: "Goals & Rewards",
      subpages: [
        {
          name: "Goals & Rules",
          path: "/design/mechanics/basics/goals-and-rewards/goals-and-rules"
        },
        {
          name: "Rewards & Feedback",
          path: "/design/mechanics/basics/goals-and-rewards/rewards-and-feedback"
        }
      ]
    },
    {
      name: "Loops",
      subpages: [
        {
          name: "Core Loop",
          path: "/design/mechanics/basics/loops/core-loop"
        },
        {
          name: "Meta Loop",
          path: "/design/mechanics/basics/loops/meta-loop"
        }
      ]
    }
  ]
};

export default Basics;