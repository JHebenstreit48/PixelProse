import { Subpage } from "@/Navigation/NavigationTypes";

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
            path: "/csharp/basics/syntax"
          },
          {
            name: "OOP in C#",
            path: "/csharp/basics/oop"
          },
          {
            name: "Collections",
            path: "/csharp/basics/collections"
          },
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
};

export default CSharpNavigation;
