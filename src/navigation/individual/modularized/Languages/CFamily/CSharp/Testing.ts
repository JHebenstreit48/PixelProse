import type { Subpage } from '@/types/navigation';

const Testing: Subpage = {
  name: "Testing",
  subpages: [
    {
      name: "Frameworks",
      subpages: [
        {
          name: "Unity Test Framework",
          path: "/languages/c-family/c-sharp/testing/frameworks/unity-test-framework"
        },
        {
          name: "xUnit",
          path: "/languages/c-family/c-sharp/testing/frameworks/xunit"
        },
        {
          name: "SpecFlow (BDD)",
          path: "/languages/c-family/c-sharp/testing/frameworks/specflow"
        }
      ]
    },
    {
      name: "Automation & Tools",
      subpages: [
        {
          name: "AltUnity Tester",
          path: "/languages/c-family/c-sharp/testing/automation/altunity"
        },
        {
          name: "GameDriver",
          path: "/languages/c-family/c-sharp/testing/automation/gamedriver"
        }
      ]
    },
    {
      name: "Best Practices",
      subpages: [
        {
          name: "Game Testing Best Practices",
          path: "/languages/c-family/c-sharp/testing/bestpractices/gamedev"
        },
        {
          name: "Performance Testing for Games",
          path: "/languages/c-family/c-sharp/testing/bestpractices/performance"
        }
      ]
    }
  ]
};

export default Testing;
