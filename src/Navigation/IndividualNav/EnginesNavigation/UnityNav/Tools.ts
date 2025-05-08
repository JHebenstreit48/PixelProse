import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const UnityToolsNavigation: Subpage = {
  name: "Tools & Plugins",
  subpages: [
    {
      name: "Built-In Tools",
      subpages: [
        { name: "Asset Store", path: "/unity/tools/asset-store" },
        { name: "Version Control", path: "/unity/tools/version-control" }
      ]
    },
    {
      name: "Extensions",
      subpages: [
        { name: "Third-Party Plugins", path: "/unity/tools/third-party-plugins" },
        { name: "Custom Tooling", path: "/unity/tools/custom-tooling" }
      ]
    }
  ]
};

export default UnityToolsNavigation;
