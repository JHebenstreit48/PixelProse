import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const CPlusPlusToolsNavigation: Subpage = {
  name: "Tools",
  subpages: [
    {
      name: "Libraries & Frameworks",
      subpages: [
        {
          name: "Boost Library",
          path: "/cplusplus/tools/libs/boost"
        },
        {
          name: "Qt Framework",
          path: "/cplusplus/tools/libs/qt"
        }
      ]
    },
    {
      name: "Development Tools",
      subpages: [
        {
          name: "Debugging Tools",
          path: "/cplusplus/tools/dev/debugging"
        },
        {
          name: "Performance Profiling Tools",
          path: "/cplusplus/tools/dev/performance-profiling"
        }
      ]
    }
  ]
};

export default CPlusPlusToolsNavigation;
