import { Subpage } from "@/Navigation/NavigationTypes";

const PrototypingToolsNavigation: Subpage = {
  name: "Prototyping and Tools",
  subpages: [
    {
      name: "Rapid Prototyping",
      subpages: [
        { name: "Overview", path: "/gamedesign/prototyping/overview" },
        { name: "Paper Prototyping", path: "/gamedesign/prototyping/paper-prototyping" },
        { name: "Digital Prototyping", path: "/gamedesign/prototyping/digital-prototyping" },
      ],
    },
    {
      name: "Prototyping Tools",
      subpages: [
        { name: "Unity Prototyping", path: "/gamedesign/prototyping/tools/unity" },
        { name: "Unreal Engine for Prototyping", path: "/gamedesign/prototyping/tools/unreal" },
      ],
    },
    {
      name: "Testing Prototypes",
      subpages: [
        { name: "User Feedback", path: "/gamedesign/prototyping/testing/user-feedback" },
        { name: "Iteration and Refinement", path: "/gamedesign/prototyping/testing/iteration" },
      ],
    },
  ],
};

export default PrototypingToolsNavigation;
