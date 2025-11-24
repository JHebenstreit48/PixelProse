import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Tools: Subpage = {
  name: "Tools",
  subpages: [
    {
      name: "IDEs/Extensions",
      subpages: [
        {
          name: "Visual Studio",
          path: "/cfamily/csharp/tools/ides/visualstudio"
        },
        {
          name: "JetBrains Rider",
          path: "/cfamily/csharp/tools/ides/rider"
        },
        {
          name: "ReSharper",
          path: "/cfamily/csharp/tools/ides/resharper"
        }
      ]
    },
    {
      name: "Game Frameworks & Engines",
      subpages: [
        {
          name: ".NET Framework",
          path: "/cfamily/csharp/tools/frameworks/dotnet"
        },
        {
          name: "MonoGame",
          path: "/cfamily/csharp/tools/frameworks/monogame"
        },
        {
          name: "Stride Engine",
          path: "/cfamily/csharp/tools/frameworks/stride"
        },
        {
          name: "Unity Hub",
          path: "/cfamily/csharp/tools/frameworks/unityhub"
        }
      ]
    },
    {
      name: "Package Management",
      subpages: [
        {
          name: "NuGet",
          path: "/cfamily/csharp/tools/packages/nuget"
        },
        {
          name: "Paket",
          path: "/cfamily/csharp/tools/packages/paket"
        },
        {
          name: "Chocolatey",
          path: "/cfamily/csharp/tools/packages/chocolatey"
        },
        {
          name: "MyGet",
          path: "/cfamily/csharp/tools/packages/myget"
        },
        {
          name: "Central Package Management",
          path: "/cfamily/csharp/tools/packages/central-package-management"
        }
      ]
    }
  ]
};

export default Tools;