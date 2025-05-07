import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const CSharpNavigation: Subpage = {
  name: "C#",
  subpages: [
    {
        name: "Basics",
        subpages: [
          {
            name: "Introduction",
            path: "/cfamily/csharp/basics/introduction"
          },
          {
            name: "Syntax and Types",
            path: "/cfamily/csharp/basics/syntax"
          },
          {
            name: "OOP in C#",
            path: "/cfamily/csharp/basics/oop"
          },
          {
            name: "Collections",
            path: "/cfamily/csharp/basics/collections"
          },
        ],
      },
      {
        name: "Advanced",
        subpages: [
          {
            name: "LINQ",
            path: "/cfamily/csharp/advanced/linq"
          },
          {
            name: "Asynchronous Programming",
            path: "/cfamily/csharp/advanced/async"
          },
          {
            name: "Game Development Best Practices",
            path: "/cfamily/csharp/advanced/gamedev-practices"
          },
          {
            name: "Garbage Collection in Games",
            path: "/cfamily/csharp/advanced/garbage-collection"
          },
        ],
      },
      {
        name: "Tools",
        subpages: [
          {
            name: "Visual Studio",
            path: "/cfamily/csharp/tools/visualstudio"
          },
          {
            name: "DotNET Framework",
            path: "/cfamily/csharp/tools/dotnet"
          },
          {
            name: "NuGet",
            path: "/cfamily/csharp/tools/nuget"
          },
        ],
      },
      {
        name: "Testing",
        subpages: [
          {
            name: "Testing Frameworks",
            path: "/cfamily/csharp/testing/frameworks"
          },
          {
            name: "Game Testing Best Practices",
            path: "/cfamily/csharp/testing/game-testing"
          },
          {
            name: "Performance Testing for Games",
            path: "/cfamily/csharp/testing/performance-testing"
          },
        ],
      },
  ],
};

export default CSharpNavigation;
