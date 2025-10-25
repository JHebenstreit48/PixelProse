import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const WorkflowNavigation: Subpage = {
  name: "Workflow",
  subpages: [
    {
      name: "Version Control",
      subpages: [
        { name: "Git Basics", path: "/development/workflow/version-control/git-basics" },
        { name: "GitHub Integration", path: "/development/workflow/version-control/github-integration" },
      ],
    },
    {
      name: "Asset Pipelines",
      subpages: [
        { name: "Asset Management", path: "/development/workflow/asset-pipelines/management" },
        { name: "Data Conversion Tools", path: "/development/workflow/asset-pipelines/data-conversion" },
      ],
    },
  ],
};

export default WorkflowNavigation;
