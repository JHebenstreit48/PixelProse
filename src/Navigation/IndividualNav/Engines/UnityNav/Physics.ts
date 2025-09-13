import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const UnityPhysicsNavigation: Subpage = {
  name: "Physics",
  subpages: [
    {
      name: "Physical Interactions",
      subpages: [
        { name: "Rigidbody and Colliders", path: "/unity/physics/rigidbody-colliders" },
        { name: "Joints", path: "/unity/physics/joints" }
      ]
    },
    {
      name: "Gameplay Physics",
      subpages: [
        { name: "Raycasting", path: "/unity/physics/raycasting" },
        { name: "Character Controllers", path: "/unity/physics/character-controllers" }
      ]
    }
  ]
};

export default UnityPhysicsNavigation;
