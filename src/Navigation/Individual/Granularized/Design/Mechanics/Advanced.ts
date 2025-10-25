import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Balancing",
      subpages: [
        {
          name: "Difficulty Curve",
          path: "/gamedesign/mechanics/advanced/balancing/difficulty-curve"
        },
        {
          name: "Tuning & Telemetry",
          path: "/gamedesign/mechanics/advanced/balancing/tuning-and-telemetry"
        }
      ]
    },
    {
      name: "Systems",
      subpages: [
        {
          name: "Emergent Gameplay",
          path: "/gamedesign/mechanics/advanced/systems/emergent-gameplay"
        },
        {
          name: "Nonlinear Progression",
          path: "/gamedesign/mechanics/advanced/systems/nonlinear-progression"
        }
      ]
    },
    {
      name: "Economy",
      subpages: [
        {
          name: "Resource Curves",
          path: "/gamedesign/mechanics/advanced/economy/resource-curves"
        },
        {
          name: "Sinks & Sources",
          path: "/gamedesign/mechanics/advanced/economy/sinks-and-sources"
        }
      ]
    }
  ]
};

export default Advanced;