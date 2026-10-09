import type { Subpage } from '@/types/navigation';

const Tools: Subpage = {
  name: "Tools",
  subpages: [
    {
      name: "IDEs/Extensions",
      subpages: [
        {
          name: "JetBrains Rider",
          path: "/languages/c-family/c-sharp/tools/ides/rider"
        },
        {
          name: "ReSharper",
          path: "/languages/c-family/c-sharp/tools/ides/resharper"
        }
      ]
    },
    {
      name: "Game Frameworks & Engines",
      subpages: [
        {
          name: ".NET Framework",
          path: "/languages/c-family/c-sharp/tools/frameworks/dotnet"
        },
        {
          name: "MonoGame",
          path: "/languages/c-family/c-sharp/tools/frameworks/monogame"
        },
        {
          name: "Stride Engine",
          path: "/languages/c-family/c-sharp/tools/frameworks/stride"
        },
        {
          name: "Unity Hub",
          path: "/languages/c-family/c-sharp/tools/frameworks/unity-hub"
        }
      ]
    },
    {
      name: "Package Management",
      subpages: [
        {
          name: "NuGet",
          path: "/languages/c-family/c-sharp/tools/packages/nuget"
        },
        {
          name: "Paket",
          path: "/languages/c-family/c-sharp/tools/packages/paket"
        },
        {
          name: "Chocolatey",
          path: "/languages/c-family/c-sharp/tools/packages/chocolatey"
        },
        {
          name: "MyGet",
          path: "/languages/c-family/c-sharp/tools/packages/myget"
        },
        {
          name: "Central Package Management",
          path: "/languages/c-family/c-sharp/tools/packages/central-package-management"
        }
      ]
    }
  ]
};

export default Tools;