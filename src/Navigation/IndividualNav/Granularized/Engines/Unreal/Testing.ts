import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const Testing: Subpage = {
  name: "Testing",
  subpages: [
    {
      name: "Basics",
      subpages: [
        {
          name: "Functional vs Automation",
          path: "/unreal/testing/basics/functional-vs-automation"
        },
        {
          name: "Setup & Runner",
          path: "/unreal/testing/basics/setup-and-runner"
        }
      ]
    },
    {
      name: "Authoring",
      subpages: [
        {
          name: "Assertions & Latent",
          path: "/unreal/testing/authoring/assertions-and-latent"
        },
        {
          name: "Fixtures & Test Worlds",
          path: "/unreal/testing/authoring/fixtures-and-test-worlds"
        }
      ]
    },
    {
      name: "CI & Reports",
      subpages: [
        {
          name: "Gauntlet & Commandlets",
          path: "/unreal/testing/ci-and-reports/gauntlet-and-commandlets"
        },
        {
          name: "Reports & Coverage",
          path: "/unreal/testing/ci-and-reports/reports-and-coverage"
        }
      ]
    }
  ]
};

export default Testing;