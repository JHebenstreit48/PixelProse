import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const UnityBasicsNavigation: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Getting Started",
      subpages: [
        { name: "Introduction", path: "/unity/basics/introduction" },
        { name: "Unity Editor", path: "/unity/basics/editor" }
      ]
    },
    {
      name: "Core Concepts",
      subpages: [
        { name: "Scene Management", path: "/unity/basics/scene-management" },
        { name: "GameObjects & Components", path: "/unity/basics/gameobjects-components" }
      ]
    }
  ]
};

export default UnityBasicsNavigation;
