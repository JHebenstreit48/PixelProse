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
            { name: "Overview", path: "/c/basics/overview" }, // Introduction and history of C
            { name: "Syntax", path: "/c/basics/syntax" }, // Basic syntax structure
            { name: "Data Types", path: "/c/basics/datatypes" }, // int, float, char, etc.
            { name: "Control Flow", path: "/c/basics/controlflow" }, // if, for, while, switch
          ],
        },
        {
          name: "Advanced",
          subpages: [
            { name: "Memory Management", path: "/c/advanced/memory" }, // malloc, free, pointers
            { name: "Pointers", path: "/c/advanced/pointers" },
            { name: "File I/O", path: "/c/advanced/fileio" }, // fopen, fclose, etc.
            { name: "Macros & Preprocessor", path: "/c/advanced/macros" }, // #define, #include
          ],
        },
        {
          name: "Tools & Libraries",
          subpages: [
            { name: "Standard Library", path: "/c/tools/stdlib" }, // stdio.h, stdlib.h
            { name: "Popular Libraries", path: "/c/tools/popularlibs" }, // Examples like GLib
            { name: "Debugging Tools", path: "/c/tools/debugging" }, // gdb, valgrind
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
            { name: "OOP Concepts", path: "/cplusplus/basics/oop" }, // Classes, objects
            { name: "STL", path: "/cplusplus/basics/stl" }, // Standard Template Library
            { name: "Syntax Differences", path: "/cplusplus/basics/syntaxdiff" }, // Compared to C
          ],
        },
        {
          name: "Advanced",
          subpages: [
            { name: "Templates", path: "/cplusplus/advanced/templates" }, // Generic programming
            { name: "Smart Pointers", path: "/cplusplus/advanced/smartpointers" },
            { name: "Multithreading", path: "/cplusplus/advanced/multithreading" },
            { name: "Exception Handling", path: "/cplusplus/advanced/exceptions" },
          ],
        },
        {
          name: "Tools & Libraries",
          subpages: [
            { name: "Boost Library", path: "/cplusplus/tools/boost" },
            { name: "Qt Framework", path: "/cplusplus/tools/qt" },
            { name: "Debugging Tools", path: "/cplusplus/tools/debugging" }, // gdb, Valgrind
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
            { name: "OOP in C#", path: "/csharp/basics/oop" }, // Classes, inheritance, interfaces
            { name: "Collections", path: "/csharp/basics/collections" }, // Lists, dictionaries, etc.
          ],
        },
        {
          name: "Advanced",
          subpages: [
            { name: "LINQ", path: "/csharp/advanced/linq" },
            { name: "Asynchronous Programming", path: "/csharp/advanced/async" }, // async/await
            { name: "Game Development", path: "/csharp/advanced/gamedev" }, // Unity, MonoGame
            { name: "Dependency Injection", path: "/csharp/advanced/di" },
          ],
        },
        {
          name: "Tools & Frameworks",
          subpages: [
            { name: "Visual Studio", path: "/csharp/tools/visualstudio" },
            { name: "DotNET Framework", path: "/csharp/tools/dotnet" },
            { name: "NuGet", path: "/csharp/tools/nuget" },
          ],
        },
      ],
    },
  ],
};

export default CFamilyNavigation;
