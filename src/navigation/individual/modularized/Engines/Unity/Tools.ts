import type { Subpage } from '@/types/navigation';

const Tools: Subpage = {
  name: "Tools",
  subpages: [
    {
      name: "Package Manager",
      subpages: [
        {
          name: "Packages & Manifests",
          path: "/unity/tools/package-manager/packages-and-manifests"
        },
        {
          name: "Editor Versions & LTS",
          path: "/unity/tools/package-manager/editor-versions-and-lts"
        }
      ]
    },
    {
      name: "Profiler & Analysis",
      subpages: [
        {
          name: "Profiler Basics",
          path: "/unity/tools/profiler-and-analysis/profiler-basics"
        },
        {
          name: "Memory Profiler",
          path: "/unity/tools/profiler-and-analysis/memory-profiler"
        }
      ]
    },
    {
      name: "Addressables",
      subpages: [
        {
          name: "Setup & Groups",
          path: "/unity/tools/addressables/setup-and-groups"
        },
        {
          name: "Build & Load",
          path: "/unity/tools/addressables/build-and-load"
        }
      ]
    },
    {
      name: "Asset Pipeline",
      subpages: [
        {
          name: "Import Settings",
          path: "/unity/tools/asset-pipeline/import-settings"
        },
        {
          name: "GUIDs & Meta",
          path: "/unity/tools/asset-pipeline/guids-and-meta"
        }
      ]
    },
    {
      name: "Editor Extensibility",
      subpages: [
        {
          name: "Custom Editors & Gizmos",
          path: "/unity/tools/editor-extensibility/custom-editors-and-gizmos"
        },
        {
          name: "Menus & Windows",
          path: "/unity/tools/editor-extensibility/menus-and-windows"
        }
      ]
    },
    {
      name: "Build & Deploy",
      subpages: [
        {
          name: "Build Profiles",
          path: "/unity/tools/build-and-deploy/build-profiles"
        },
        {
          name: "Cloud Build",
          path: "/unity/tools/build-and-deploy/cloud-build"
        }
      ]
    }
  ]
};

export default Tools;