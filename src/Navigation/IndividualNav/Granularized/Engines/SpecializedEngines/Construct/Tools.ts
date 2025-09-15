import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const Tools: Subpage = {
  name: "Tools",
  subpages: [
    {
      name: "Editor & Workflow",
      subpages: [
        {
          name: "Shortcuts & Panels",
          path: "/construct/tools/editor-and-workflow/shortcuts-and-panels"
        },
        {
          name: "Templates & Asset Store",
          path: "/construct/tools/editor-and-workflow/templates-and-asset-store"
        }
      ]
    },
    {
      name: "Preview & Debug",
      subpages: [
        {
          name: "Remote Preview",
          path: "/construct/tools/preview-and-debug/remote-preview"
        },
        {
          name: "Event Debugger",
          path: "/construct/tools/preview-and-debug/event-debugger"
        }
      ]
    }
  ]
};

export default Tools;