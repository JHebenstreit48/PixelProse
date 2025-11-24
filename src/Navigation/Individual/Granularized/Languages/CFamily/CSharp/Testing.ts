import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Testing: Subpage = {
  name: "Testing",
  subpages: [
    {
      name: "Frameworks",
      subpages: [
        {
          name: "Unity Test Framework",
          path: "/cfamily/csharp/testing/frameworks/unity-test-framework"
        },
        {
          name: "xUnit",
          path: "/cfamily/csharp/testing/frameworks/xunit"
        },
        {
          name: "SpecFlow (BDD)",
          path: "/cfamily/csharp/testing/frameworks/specflow"
        }
      ]
    },
    {
      name: "Automation & Tools",
      subpages: [
        {
          name: "AltUnity Tester",
          path: "/cfamily/csharp/testing/automation/altunity"
        },
        {
          name: "GameDriver",
          path: "/cfamily/csharp/testing/automation/gamedriver"
        }
      ]
    },
    {
      name: "Best Practices",
      subpages: [
        {
          name: "Game Testing Best Practices",
          path: "/cfamily/csharp/testing/bestpractices/gamedev"
        },
        {
          name: "Performance Testing for Games",
          path: "/cfamily/csharp/testing/bestpractices/performance"
        }
      ]
    }
  ]
};

export default Testing;
