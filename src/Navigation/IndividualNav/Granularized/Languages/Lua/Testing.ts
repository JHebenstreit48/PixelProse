import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const LuaTestingNavigation: Subpage = {
  name: "Testing",
  subpages: [
    {
      name: "Frameworks",
      subpages: [
        { name: "Busted", path: "/lua/testing/frameworks/busted" },
        { name: "LuaUnit", path: "/lua/testing/frameworks/luaunit" },
        { name: "Lunatest", path: "/lua/testing/frameworks/lunatest" },
        { name: "Testa", path: "/lua/testing/frameworks/testa" }
      ]
    },
    {
      name: "Best Practices",
      subpages: [
        { name: "Debugging Best Practices", path: "/lua/testing/best-practices/debugging" },
        { name: "Error Handling", path: "/lua/testing/best-practices/error-handling" }
      ]
    },
    {
      name: "Automation",
      subpages: [
        { name: "Test Automation Tools", path: "/lua/testing/automation-tools" },
        { name: "Lua Test Suites", path: "/lua/testing/automation-tools/test-suites" }
      ]
    }
  ]
};

export default LuaTestingNavigation;
