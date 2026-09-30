import type { Subpage } from '@/types/navigation';

const Tools: Subpage = {
  name: "Tools",
  subpages: [
    {
      name: "Libraries & Frameworks",
      subpages: [
        {
          name: "Boost Library",
          path: "languages/c-family/c-plus-plus/tools/libs/boost"
        },
        {
          name: "Qt Framework",
          path: "languages/c-family/c-plus-plus/tools/libs/qt"
        }
      ]
    },
    {
      name: "Development Tools",
      subpages: [
        {
          name: "Debugging Tools",
          path: "languages/c-family/c-plus-plus/tools/dev/debugging"
        },
        {
          name: "Performance Profiling Tools",
          path: "languages/c-family/c-plus-plus/tools/dev/performance-profiling"
        }
      ]
    }
  ]
};

export default Tools;