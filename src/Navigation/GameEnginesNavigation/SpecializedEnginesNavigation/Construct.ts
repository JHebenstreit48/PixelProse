import { Subpage } from "@/Navigation/NavigationTypes";

const ConstructNavigation: Subpage = {
  name: "Construct",
  subpages: [
    { name: "Overview", path: "/specialized/construct/overview" },
    { name: "Event Sheets", path: "/specialized/construct/event-sheets" },
    {
      name: "Asset Integration",
      path: "/specialized/construct/asset-integration",
    },
    { name: "Publishing Games", path: "/specialized/construct/publishing" },
  ],
};

export default ConstructNavigation;
