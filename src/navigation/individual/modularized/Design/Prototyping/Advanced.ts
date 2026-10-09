import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Metrics",
      subpages: [
        {
          name: "Telemetry 101",
          path: "/design/prototyping/advanced/metrics/telemetry-101"
        },
        {
          name: "Event Taxonomy",
          path: "/design/prototyping/advanced/metrics/event-taxonomy"
        },
        {
          name: "SDK Setup (GA/Amplitude)",
          path: "/design/prototyping/advanced/metrics/sdk-setup-ga-amplitude"
        },
        {
          name: "Dashboards & KPIs",
          path: "/design/prototyping/advanced/metrics/dashboards-and-kpis"
        }
      ]
    },
    {
      name: "Rapid Impl",
      subpages: [
        {
          name: "Input Harnesses",
          path: "/design/prototyping/advanced/rapid-impl/input-harnesses"
        },
        {
          name: "Mock Data & Fakes",
          path: "/design/prototyping/advanced/rapid-impl/mock-data-and-fakes"
        }
      ]
    },
    {
      name: "Automation",
      subpages: [
        {
          name: "CI for Prototypes",
          path: "/design/prototyping/advanced/automation/ci-for-prototypes"
        },
        {
          name: "Experiment Flags",
          path: "/design/prototyping/advanced/automation/experiment-flags"
        }
      ]
    }
  ]
};

export default Advanced;