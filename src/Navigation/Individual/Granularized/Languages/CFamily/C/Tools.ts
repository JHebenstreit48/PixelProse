import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const CToolsNavigation: Subpage = {
  name: "Tools",
  subpages: [
    {
      name: "Core Libraries",
      subpages: [
        {
          name: "Standard Library",
          path: "/cfamily/c/tools/core-libraries/stdlib"
        },
        {
          name: "Popular Libraries",
          path: "/cfamily/c/tools/core-libraries/popularlibs"
        }
      ]
    },
    {
      name: "Development Utilities",
      subpages: [
        {
          name: "Debugging Tools",
          path: "/cfamily/c/tools/dev-utilities/debugging"
        },
        {
          name: "Embedded Systems Use Cases",
          path: "/cfamily/c/tools/dev-utilities/embedded-systems"
        }
      ]
    }
  ]
};

export default CToolsNavigation;
