import { Subpage } from "@/Navigation/NavigationTypes";

const CFamilyNavigation: Subpage = {
  name: "C Family",
  subpages: [
    {
      name: "C",
      subpages: [
        {
          name: "Basics",
          subpages: [
            { name: "Overview", path: "/c/basics/overview" },
            { name: "Syntax", path: "/c/basics/syntax" },
            { name: "Data Types", path: "/c/basics/datatypes" },
            { name: "Control Flow", path: "/c/basics/controlflow" },
          ],
        },
        {
          name: "Advanced",
          subpages: [
            { name: "Memory Management", path: "/c/advanced/memory" },
            { name: "Pointers", path: "/c/advanced/pointers" },
            { name: "File I/O", path: "/c/advanced/fileio" },
            { name: "Macros & Preprocessor", path: "/c/advanced/macros" },
            { name: "Real-Time System Optimizations", path: "/c/advanced/realtime-optimizations" },
          ],
        },
        {
          name: "Tools",
          subpages: [
            { name: "Standard Library", path: "/c/tools/stdlib" },
            { name: "Popular Libraries", path: "/c/tools/popularlibs" },
            { name: "Debugging Tools", path: "/c/tools/debugging" },
            { name: "Embedded Systems Use Cases", path: "/c/tools/embedded-systems" },
          ],
        },
        {
          name: "Testing",
          subpages: [
            { name: "Testing Frameworks", path: "/c/testing/frameworks" },
            { name: "Unit Testing in C", path: "/c/testing/unit-testing" },
            { name: "Integration Testing for Real-Time Systems", path: "/c/testing/integration-testing" },
          ],
        },
      ],
    },
    {
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
    },
    {
      name: "C#",
      subpages: [
        {
          name: "Basics",
          subpages: [
            { name: "Overview", path: "/csharp/basics/overview" },
            { name: "Syntax and Types", path: "/csharp/basics/syntax" },
            { name: "OOP in C#", path: "/csharp/basics/oop" },
            { name: "Collections", path: "/csharp/basics/collections" },
          ],
        },
        {
          name: "Advanced",
          subpages: [
            { name: "LINQ", path: "/csharp/advanced/linq" },
            { name: "Asynchronous Programming", path: "/csharp/advanced/async" },
            { name: "Game Development Best Practices", path: "/csharp/advanced/gamedev-practices" },
            { name: "Garbage Collection in Games", path: "/csharp/advanced/garbage-collection" },
          ],
        },
        {
          name: "Tools",
          subpages: [
            { name: "Visual Studio", path: "/csharp/tools/visualstudio" },
            { name: "DotNET Framework", path: "/csharp/tools/dotnet" },
            { name: "NuGet", path: "/csharp/tools/nuget" },
          ],
        },
        {
          name: "Testing",
          subpages: [
            { name: "Testing Frameworks", path: "/csharp/testing/frameworks" },
            { name: "Game Testing Best Practices", path: "/csharp/testing/game-testing" },
            { name: "Performance Testing for Games", path: "/csharp/testing/performance-testing" },
          ],
        },
      ],
    },
  ],
};

export default CFamilyNavigation;
