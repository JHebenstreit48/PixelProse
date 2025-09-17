import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Metrics",
      subpages: [
        {
          name: "Telemetry 101",
          path: "/gamedesign/prototyping/advanced/metrics/telemetry-101"
        },
        {
          name: "Event Taxonomy",
          path: "/gamedesign/prototyping/advanced/metrics/event-taxonomy"
        }
      ]
    },
    {
      name: "Rapid Impl",
      subpages: [
        {
          name: "Input Harnesses",
          path: "/gamedesign/prototyping/advanced/rapid-impl/input-harnesses"
        },
        {
          name: "Mock Data & Fakes",
          path: "/gamedesign/prototyping/advanced/rapid-impl/mock-data-and-fakes"
        }
      ]
    },
    {
      name: "Automation",
      subpages: [
        {
          name: "CI for Prototypes",
          path: "/gamedesign/prototyping/advanced/automation/ci-for-prototypes"
        },
        {
          name: "Experiment Flags",
          path: "/gamedesign/prototyping/advanced/automation/experiment-flags"
        }
      ]
    }
  ]
};

export default Advanced;