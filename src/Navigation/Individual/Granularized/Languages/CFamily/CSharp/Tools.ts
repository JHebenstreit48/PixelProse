import type { Subpage } from '@/types/navigation';

const Tools: Subpage = {
  name: "Tools",
  subpages: [
    {
      name: "IDEs/Extensions",
      subpages: [
        {
          name: "Visual Studio",
          path: "/c-family/c-sharp/tools/ides/visual-studio"
        },
        {
          name: "JetBrains Rider",
          path: "/c-family/c-sharp/tools/ides/rider"
        },
        {
          name: "ReSharper",
          path: "/c-family/c-sharp/tools/ides/resharper"
        }
      ]
    },
    {
      name: "Game Frameworks & Engines",
      subpages: [
        {
          name: ".NET Framework",
          path: "/c-family/c-sharp/tools/frameworks/dotnet"
        },
        {
          name: "MonoGame",
          path: "/c-family/c-sharp/tools/frameworks/monogame"
        },
        {
          name: "Stride Engine",
          path: "/c-family/c-sharp/tools/frameworks/stride"
        },
        {
          name: "Unity Hub",
          path: "/c-family/c-sharp/tools/frameworks/unity-hub"
        }
      ]
    },
    {
      name: "Package Management",
      subpages: [
        {
          name: "NuGet",
          path: "/c-family/c-sharp/tools/packages/nuget"
        },
        {
          name: "Paket",
          path: "/c-family/c-sharp/tools/packages/paket"
        },
        {
          name: "Chocolatey",
          path: "/c-family/c-sharp/tools/packages/chocolatey"
        },
        {
          name: "MyGet",
          path: "/c-family/c-sharp/tools/packages/myget"
        },
        {
          name: "Central Package Management",
          path: "/c-family/c-sharp/tools/packages/central-package-management"
        }
      ]
    }
  ]
};

export default Tools;