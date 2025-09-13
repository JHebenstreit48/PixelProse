import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const UnityUINavigation: Subpage = {
  name: "UI Development",
  subpages: [
    {
      name: "UI Foundations",
      subpages: [
        { name: "Canvas Basics", path: "/unity/ui/canvas-basics" },
        { name: "UI Elements", path: "/unity/ui/ui-elements" }
      ]
    },
    {
      name: "Responsive Design",
      subpages: [
        { name: "Responsive UI", path: "/unity/ui/responsive-ui" },
        { name: "UI Animation", path: "/unity/ui/ui-animation" }
      ]
    }
  ]
};

export default UnityUINavigation;
