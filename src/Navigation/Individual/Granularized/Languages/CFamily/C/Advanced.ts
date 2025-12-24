import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Memory & Pointers",
      subpages: [
        {
          name: "Memory Management",
          path: "/cfamily/c/advanced/memory/memory-management"
        },
        {
          name: "Pointers",
          path: "/cfamily/c/advanced/memory/pointers"
        }
      ]
    },
    {
      name: "File Operations",
      subpages: [
        {
          name: "File I/O Basics",
          path: "/cfamily/c/advanced/file-ops/fileio"
        },
        {
          name: "Working with File Streams",
          path: "/cfamily/c/advanced/file-ops/streams"
        }
      ]
    },
    {
      name: "Preprocessing & Optimization",
      subpages: [
        {
          name: "Macros & Preprocessor",
          path: "/cfamily/c/advanced/preprocessing/macros"
        },
        {
          name: "Real-Time Optimizations",
          path: "/cfamily/c/advanced/preprocessing/optimizations"
        }
      ]
    }
  ]
};

export default Advanced;
