import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Balancing",
      subpages: [
        {
          name: "Difficulty Curve",
          path: "/design/mechanics/advanced/balancing/difficulty-curve"
        },
        {
          name: "Tuning & Telemetry",
          path: "/design/mechanics/advanced/balancing/tuning-and-telemetry"
        }
      ]
    },
    {
      name: "Systems",
      subpages: [
        {
          name: "Emergent Gameplay",
          path: "/design/mechanics/advanced/systems/emergent-gameplay"
        },
        {
          name: "Nonlinear Progression",
          path: "/design/mechanics/advanced/systems/nonlinear-progression"
        }
      ]
    },
    {
      name: "Economy",
      subpages: [
        {
          name: "Resource Curves",
          path: "/design/mechanics/advanced/economy/resource-curves"
        },
        {
          name: "Sinks & Sources",
          path: "/design/mechanics/advanced/economy/sinks-and-sources"
        }
      ]
    }
  ]
};

export default Advanced;