import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const CTestingNavigation: Subpage = {
  name: "Testing",
  subpages: [
    {
      name: "Frameworks & Tools",
      subpages: [
        {
          name: "Testing Frameworks",
          path: "/cfamily/c/testing/frameworks/frameworks"
        },
        {
          name: "Mocking Tools & Techniques",
          path: "/cfamily/c/testing/frameworks/mocking-tools"
        }
      ]
    },
    {
      name: "Test Practices",
      subpages: [
        {
          name: "Unit Testing in C",
          path: "/cfamily/c/testing/practices/unit-testing"
        },
        {
          name: "Integration Testing for Real-Time Systems",
          path: "/cfamily/c/testing/practices/integration-testing"
        }
      ]
    }
  ]
};

export default CTestingNavigation;
