import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const GameMechanicsNavigation: Subpage = {
  name: "Game Mechanics",
  subpages: [
    {
      name: "Core Mechanics",
      subpages: [
        { name: "Overview", path: "/gamedesign/gamemechanics/overview" },
        { name: "Action vs. Strategy", path: "/gamedesign/gamemechanics/action-strategy" },
        { name: "Player Goals and Rewards", path: "/gamedesign/gamemechanics/goals-rewards" },
      ],
    },
    {
      name: "Balancing and Tuning",
      subpages: [
        { name: "Difficulty Curve", path: "/gamedesign/gamemechanics/difficulty-curve" },
        { name: "Game Progression", path: "/gamedesign/gamemechanics/progression" },
        { name: "Resource Management", path: "/gamedesign/gamemechanics/resource-management" },
      ],
    },
    {
      name: "Advanced Mechanics",
      subpages: [
        { name: "Non-linear Progression", path: "/gamedesign/gamemechanics/advanced/non-linear" },
        { name: "Emergent Gameplay", path: "/gamedesign/gamemechanics/advanced/emergent-gameplay" },
      ],
    },
  ],
};

export default GameMechanicsNavigation;
