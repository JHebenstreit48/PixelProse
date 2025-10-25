import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Testing: Subpage = {
  name: "Testing",
  subpages: [
    {
      name: "Frameworks",
      subpages: [
        {
          name: "Busted",
          path: "/lua/testing/frameworks/busted"
        },
        {
          name: "LuaUnit",
          path: "/lua/testing/frameworks/luaunit"
        },
        {
          name: "Lunatest",
          path: "/lua/testing/frameworks/lunatest"
        },
        {
          name: "Testa",
          path: "/lua/testing/frameworks/testa"
        }
      ]
    },
    {
      name: "Best Practices",
      subpages: [
        {
          name: "Debugging",
          path: "/lua/testing/best-practices/debugging"
        },
        {
          name: "Error Handling",
          path: "/lua/testing/best-practices/error-handling"
        }
      ]
    },
    {
      name: "Automation",
      subpages: [
        {
          name: "Automation Tools",
          path: "/lua/testing/automation/automation-tools"
        },
        {
          name: "Test Suites",
          path: "/lua/testing/automation/test-suites"
        }
      ]
    }
  ]
};

export default Testing;