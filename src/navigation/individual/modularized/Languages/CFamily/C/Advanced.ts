import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Memory & Pointers",
      subpages: [
        {
          name: "Memory Management",
          path: "/languages/c-family/c/advanced/memory/memory-management"
        },
        {
          name: "Pointers",
          path: "/languages/c-family/c/advanced/memory/pointers"
        }
      ]
    },
    {
      name: "File Operations",
      subpages: [
        {
          name: "File I/O Basics",
          path: "/languages/c-family/c/advanced/file-ops/fileio"
        },
        {
          name: "Working with File Streams",
          path: "/languages/c-family/c/advanced/file-ops/streams"
        }
      ]
    },
    {
      name: "Preprocessing & Optimization",
      subpages: [
        {
          name: "Macros & Preprocessor",
          path: "/languages/c-family/c/advanced/preprocessing/macros"
        },
        {
          name: "Real-Time Optimizations",
          path: "/languages/c-family/c/advanced/preprocessing/optimizations"
        }
      ]
    }
  ]
};

export default Advanced;
