import type { Subpage } from '@/types/navigation';

const Testing: Subpage = {
  name: "Testing",
  subpages: [
    {
      name: "Frameworks & Tools",
      subpages: [
        {
          name: "Testing Frameworks",
          path: "languages/c-family/c-plus-plus/testing/frameworks/frameworks"
        },
        {
          name: "Mocking Tools",
          path: "languages/c-family/c-plus-plus/testing/frameworks/mocking"
        }
      ]
    },
    {
      name: "Engine Integration",
      subpages: [
        {
          name: "Integration Testing with Game Engines",
          path: "languages/c-family/c-plus-plus/testing/integration/engines"
        },
        {
          name: "Unit Testing in Game Engines",
          path: "languages/c-family/c-plus-plus/testing/integration/unit-testing"
        }
      ]
    }
  ]
};

export default Testing;
