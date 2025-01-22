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
          ],
        },
        {
          name: "Optimization",
          subpages: [
            { name: "Compiler Optimizations", path: "/c/optimization/compiler" },
            { name: "Inline Functions", path: "/c/optimization/inline" },
            { name: "Loop Unrolling", path: "/c/optimization/loop-unrolling" },
          ],
        },
        {
          name: "Testing",
          subpages: [
            { name: "Unit Testing with C", path: "/c/testing/unittesting" },
            { name: "Debugging Tools", path: "/c/testing/debugging" }, // gdb, Valgrind
            { name: "Performance Profiling", path: "/c/testing/profiling" }, // perf tools
          ],
        },
        {
          name: "Tools & Libraries",
          subpages: [
            { name: "Standard Library", path: "/c/tools/stdlib" },
            { name: "Popular Libraries", path: "/c/tools/popularlibs" },
            { name: "Debugging Tools", path: "/c/tools/debugging" },
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
            { name: "STL", path: "/cplusplus/basics/stl" },
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
          ],
        },
        {
          name: "C++20 Features",
          subpages: [
            { name: "Concepts", path: "/cplusplus/cpp20/concepts" },
            { name: "Ranges", path: "/cplusplus/cpp20/ranges" },
            { name: "Modules", path: "/cplusplus/cpp20/modules" },
          ],
        },
        {
          name: "Testing",
          subpages: [
            { name: "Google Test (GTest)", path: "/cplusplus/testing/googletest" },
            { name: "Boost.Test", path: "/cplusplus/testing/boosttest" },
            { name: "Debugging Tools", path: "/cplusplus/testing/debugging" },
            { name: "Performance Analysis", path: "/cplusplus/testing/performance" },
          ],
        },
        {
          name: "Tools & Libraries",
          subpages: [
            { name: "Boost Library", path: "/cplusplus/tools/boost" },
            { name: "Qt Framework", path: "/cplusplus/tools/qt" },
            { name: "Debugging Tools", path: "/cplusplus/tools/debugging" },
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
            { name: "Dependency Injection", path: "/csharp/advanced/di" },
          ],
        },
        {
          name: "Game Development",
          subpages: [
            { name: "Scriptable Objects", path: "/csharp/gamedev/scriptable-objects" },
            { name: "MonoBehaviour Lifecycle", path: "/csharp/gamedev/monobehaviour" },
          ],
        },
        {
          name: "Testing",
          subpages: [
            { name: "Unit Testing with NUnit", path: "/csharp/testing/nunit" },
            { name: "MSTest Framework", path: "/csharp/testing/mstest" },
            { name: "Debugging in Visual Studio", path: "/csharp/testing/debugging" },
          ],
        },
        {
          name: "Tools & Frameworks",
          subpages: [
            { name: "Visual Studio", path: "/csharp/tools/visualstudio" },
            { name: "DotNET Framework", path: "/csharp/tools/dotnet" },
            { name: "NuGet Package Manager", path: "/csharp/tools/nuget" },
          ],
        },
      ],
    },
  ],
};

export default CFamilyNavigation;
