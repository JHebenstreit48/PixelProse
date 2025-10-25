import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Narrative Pipelines",
      subpages: [
        {
          name: "Ink/Yarn Export",
          path: "/gamedesign/tools/advanced/narrative-pipelines/ink-yarn-export"
        },
        {
          name: "Save/State Sync",
          path: "/gamedesign/tools/advanced/narrative-pipelines/save-state-sync"
        }
      ]
    },
    {
      name: "Level Pipelines",
      subpages: [
        {
          name: "Tiled JSON Import",
          path: "/gamedesign/tools/advanced/level-pipelines/tiled-json-import"
        },
        {
          name: "LDtk Layers → Colliders",
          path: "/gamedesign/tools/advanced/level-pipelines/ldtk-layers-to-colliders"
        }
      ]
    },
    {
      name: "Telemetry Tooling",
      subpages: [
        {
          name: "SDK Setup (GA/Amplitude)",
          path: "/gamedesign/tools/advanced/telemetry-tooling/sdk-setup-ga-amplitude"
        },
        {
          name: "Dashboards & KPIs",
          path: "/gamedesign/tools/advanced/telemetry-tooling/dashboards-and-kpis"
        }
      ]
    },
    {
      name: "Collaboration",
      subpages: [
        {
          name: "Versioning Design Assets",
          path: "/gamedesign/tools/advanced/collaboration/versioning-design-assets"
        },
        {
          name: "Spec Handoff (Figma/Notion)",
          path: "/gamedesign/tools/advanced/collaboration/spec-handoff-figma-notion"
        }
      ]
    }
  ]
};

export default Advanced;