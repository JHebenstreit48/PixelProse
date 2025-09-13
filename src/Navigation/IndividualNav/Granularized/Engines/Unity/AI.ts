import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const UnityAINavigation: Subpage = {
  name: "AI",
  subpages: [
    {
      name: "Navigation & Pathfinding",
      subpages: [
        { name: "NavMesh Basics", path: "/unity/ai/navmesh-basics" },
        { name: "Pathfinding", path: "/unity/ai/pathfinding" }
      ]
    },
    {
      name: "Behavior Systems",
      subpages: [
        { name: "Behavior Trees", path: "/unity/ai/behavior-trees" },
        { name: "AI Tools and Plugins", path: "/unity/ai/tools-plugins" }
      ]
    }
  ]
};

export default UnityAINavigation;
