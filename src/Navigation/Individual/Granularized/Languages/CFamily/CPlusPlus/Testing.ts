import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const CPlusPlusTestingNavigation: Subpage = {
  name: "Testing",
  subpages: [
    {
      name: "Frameworks & Tools",
      subpages: [
        {
          name: "Testing Frameworks",
          path: "/cplusplus/testing/frameworks/frameworks"
        },
        {
          name: "Mocking Tools",
          path: "/cplusplus/testing/frameworks/mocking"
        }
      ]
    },
    {
      name: "Engine Integration",
      subpages: [
        {
          name: "Integration Testing with Game Engines",
          path: "/cplusplus/testing/integration/engines"
        },
        {
          name: "Unit Testing in Game Engines",
          path: "/cplusplus/testing/integration/unit-testing"
        }
      ]
    }
  ]
};

export default CPlusPlusTestingNavigation;
