import { Subpage } from "@/Navigation/NavigationTypes";

const CPlusPlusNavigation: Subpage = {
  name: "C++",
  subpages: [
    {
        name: "Basics",
        subpages: [
          { name: "Overview", path: "/cplusplus/basics/overview" },
          { name: "OOP Concepts", path: "/cplusplus/basics/oop" },
          { name: "STL Basics", path: "/cplusplus/basics/stl" },
          { name: "Syntax Differences", path: "/cplusplus/basics/syntaxdiff" },
        ],
      },
      {
        name: "Advanced",
        subpages: [
          { name: "Templates", path: "/cplusplus/advanced/templates" },
          { name: "Smart Pointers", path: "/cplusplus/advanced/smartpointers" },
          { name: "Multithreading", path: "/cplusplus/advanced/multithreading" },
          { name: "Exception Handling", path: "/cplusplus/advanced/exceptions" },
          { name: "Advanced STL Techniques", path: "/cplusplus/advanced/advanced-stl" },
        ],
      },
      {
        name: "Tools",
        subpages: [
          { name: "Boost Library", path: "/cplusplus/tools/boost" },
          { name: "Qt Framework", path: "/cplusplus/tools/qt" },
          { name: "Debugging Tools", path: "/cplusplus/tools/debugging" },
          { name: "Performance Profiling Tools", path: "/cplusplus/tools/performance-profiling" },
        ],
      },
      {
        name: "Testing",
        subpages: [
          { name: "Testing Frameworks", path: "/cplusplus/testing/frameworks" },
          { name: "Mocking Tools", path: "/cplusplus/testing/mocking-tools" },
          { name: "Integration Testing with Game Engines", path: "/cplusplus/testing/integration-testing" },
        ],
      },
  ],
};

export default CPlusPlusNavigation;
