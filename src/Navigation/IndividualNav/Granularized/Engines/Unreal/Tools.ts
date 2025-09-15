import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const Tools: Subpage = {
  name: "Tools",
  subpages: [
    {
      name: "Marketplace & Plugins",
      subpages: [
        {
          name: "Marketplace",
          path: "/unreal/tools/marketplace-and-plugins/marketplace"
        },
        {
          name: "Third-Party Plugins",
          path: "/unreal/tools/marketplace-and-plugins/third-party-plugins"
        }
      ]
    },
    {
      name: "Build & Package",
      subpages: [
        {
          name: "Build/Cook/Package",
          path: "/unreal/tools/build-and-package/build-cook-package"
        },
        {
          name: "Platforms & Targets",
          path: "/unreal/tools/build-and-package/platforms-and-targets"
        }
      ]
    },
    {
      name: "Profiling & Analysis",
      subpages: [
        {
          name: "Unreal Insights",
          path: "/unreal/tools/profiling-and-analysis/unreal-insights"
        },
        {
          name: "GPU/CPU Profilers",
          path: "/unreal/tools/profiling-and-analysis/gpu-cpu-profilers"
        }
      ]
    },
    {
      name: "Asset Pipeline",
      subpages: [
        {
          name: "Import & Reimport",
          path: "/unreal/tools/asset-pipeline/import-and-reimport"
        },
        {
          name: "DataTables & Localization",
          path: "/unreal/tools/asset-pipeline/datatables-and-localization"
        }
      ]
    },
    {
      name: "Editor Utilities",
      subpages: [
        {
          name: "Editor Utility Widgets",
          path: "/unreal/tools/editor-utilities/editor-utility-widgets"
        },
        {
          name: "Automation & Python",
          path: "/unreal/tools/editor-utilities/automation-and-python"
        }
      ]
    },
    {
      name: "Source Control",
      subpages: [
        {
          name: "Perforce/Git",
          path: "/unreal/tools/source-control/perforce-and-git"
        },
        {
          name: "Locks & Branches",
          path: "/unreal/tools/source-control/locks-and-branches"
        }
      ]
    }
  ]
};

export default Tools;