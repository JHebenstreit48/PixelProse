import type { Subpage } from '@/types/navigation';

const Testing: Subpage = {
  name: "Testing",
  subpages: [
    {
      name: "Frameworks & Tools",
      subpages: [
        {
          name: "Testing Frameworks",
          path: "/languages/c-family/c/testing/frameworks/frameworks"
        },
        {
          name: "Mocking Tools & Techniques",
          path: "/languages/c-family/c/testing/frameworks/mocking-tools"
        }
      ]
    },
    {
      name: "Test Practices",
      subpages: [
        {
          name: "Unit Testing in C",
          path: "/languages/c-family/c/testing/practices/unit-testing"
        },
        {
          name: "Integration Testing for Real-Time Systems",
          path: "/languages/c-family/c/testing/practices/integration-testing"
        }
      ]
    }
  ]
};

export default Testing;
