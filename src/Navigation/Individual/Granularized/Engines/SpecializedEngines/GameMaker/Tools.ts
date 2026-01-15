import type { Subpage } from '@/types/navigation';

const Tools: Subpage = {
  name: "Tools",
  subpages: [
    {
      name: "Build & Export",
      subpages: [
        {
          name: "Targets & Options",
          path: "/gamemaker/tools/build-and-export/targets-and-options"
        },
        {
          name: "HTML5 & Mobile",
          path: "/gamemaker/tools/build-and-export/html5-and-mobile"
        }
      ]
    },
    {
      name: "Preview & Debug",
      subpages: [
        {
          name: "Debugger & Logs",
          path: "/gamemaker/tools/preview-and-debug/debugger-and-logs"
        },
        {
          name: "Remote Preview",
          path: "/gamemaker/tools/preview-and-debug/remote-preview"
        }
      ]
    },
    {
      name: "Marketplace & Ext",
      subpages: [
        {
          name: "Asset Store",
          path: "/gamemaker/tools/marketplace-and-ext/asset-store"
        },
        {
          name: "Writing Extensions",
          path: "/gamemaker/tools/marketplace-and-ext/writing-extensions"
        }
      ]
    },
    {
      name: "Project Utilities",
      subpages: [
        {
          name: "Templates & Packages",
          path: "/gamemaker/tools/project-utilities/templates-and-packages"
        },
        {
          name: "Source Control",
          path: "/gamemaker/tools/project-utilities/source-control"
        }
      ]
    }
  ]
};

export default Tools;