import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Telemetry Tooling",
      subpages: [
        {
          name: "SDK Setup (GA/Amplitude)",
          path: "/design/tools/advanced/telemetry-tooling/sdk-setup-ga-amplitude"
        },
        {
          name: "Dashboards & KPIs",
          path: "/design/tools/advanced/telemetry-tooling/dashboards-and-kpis"
        }
      ]
    },
    {
      name: "Collaboration",
      subpages: [
        {
          name: "Versioning Design Assets",
          path: "/design/tools/advanced/collaboration/versioning-design-assets"
        },
        {
          name: "Spec Handoff (Figma/Notion)",
          path: "/design/tools/advanced/collaboration/spec-handoff-figma-notion"
        }
      ]
    },
    {
      name: "Issue Tracking & Planning",
      subpages: [
        {
          name: "JIRA Workflows & Bug Triage",
          path: "/design/tools/advanced/issue-tracking-and-planning/jira-workflows-and-bug-triage"
        },
        {
          name: "Milestones & Roadmaps",
          path: "/design/tools/advanced/issue-tracking-and-planning/milestones-and-roadmaps"
        }
      ]
    }
  ]
};

export default Advanced;