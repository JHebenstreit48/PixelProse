import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const Tools: Subpage = {
  name: "Tools",
  subpages: [
    {
      name: "Build & Package",
      subpages: [
        {
          name: "Build & Package",
          path: "/cry/tools/build-and-package/build-and-package"
        },
        {
          name: "Platforms & Targets",
          path: "/cry/tools/build-and-package/platforms-and-targets"
        }
      ]
    },
    {
      name: "Asset Pipeline",
      subpages: [
        {
          name: "Resource Compiler",
          path: "/cry/tools/asset-pipeline/resource-compiler"
        },
        {
          name: "Import & Reimport",
          path: "/cry/tools/asset-pipeline/import-and-reimport"
        }
      ]
    },
    {
      name: "Marketplace & Plugins",
      subpages: [
        {
          name: "Marketplace",
          path: "/cry/tools/marketplace-and-plugins/marketplace"
        },
        {
          name: "Third-Party Plugins",
          path: "/cry/tools/marketplace-and-plugins/third-party-plugins"
        }
      ]
    },
    {
      name: "Source Control",
      subpages: [
        {
          name: "Perforce/Git",
          path: "/cry/tools/source-control/perforce-and-git"
        },
        {
          name: "Locks & Branches",
          path: "/cry/tools/source-control/locks-and-branches"
        }
      ]
    },
    {
      name: "Profiling & Analysis",
      subpages: [
        {
          name: "Profiler & Stats",
          path: "/cry/tools/profiling-and-analysis/profiler-and-stats"
        },
        {
          name: "Frame Captures",
          path: "/cry/tools/profiling-and-analysis/frame-captures"
        }
      ]
    }
  ]
};

export default Tools;