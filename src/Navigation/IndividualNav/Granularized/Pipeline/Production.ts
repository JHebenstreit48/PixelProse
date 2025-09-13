import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const ProductionNavigation: Subpage = {
  name: "Production",
  subpages: [
    {
      name: "Project Management",
      subpages: [
        { name: "Agile Methodologies", path: "/development/production/project-management/agile" },
        { name: "Kanban Boards", path: "/development/production/project-management/kanban" },
        { name: "JIRA", path: "/development/production/project-management/jira" },
      ],
    },
    {
      name: "Prototyping",
      subpages: [
        { name: "Rapid Prototyping Tools", path: "/development/production/prototyping/rapid-tools" },
        { name: "Prototyping Techniques", path: "/development/production/prototyping/techniques" },
      ],
    },
  ],
};

export default ProductionNavigation;
