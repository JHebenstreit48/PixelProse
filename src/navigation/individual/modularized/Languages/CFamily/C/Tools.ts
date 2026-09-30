import type { Subpage } from '@/types/navigation';

const Tools: Subpage = {
  name: "Tools",
  subpages: [
    {
      name: "Core Libraries",
      subpages: [
        {
          name: "Standard Library",
          path: "/languages/c-family/c/tools/core-libraries/stdlib"
        },
        {
          name: "Popular Libraries",
          path: "/languages/c-family/c/tools/core-libraries/popularlibs"
        }
      ]
    },
    {
      name: "Development Utilities",
      subpages: [
        {
          name: "Debugging Tools",
          path: "/languages/c-family/c/tools/dev-utilities/debugging"
        },
        {
          name: "Embedded Systems Use Cases",
          path: "/languages/c-family/c/tools/dev-utilities/embedded-systems"
        }
      ]
    }
  ]
};

export default Tools;
