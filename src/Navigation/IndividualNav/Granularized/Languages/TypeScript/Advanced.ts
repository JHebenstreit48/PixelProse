import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "WASM & Memory",
      subpages: [
        {
          name: "WASM Bindings",
          path: "/typescript/game-dev/advanced/wasm-and-memory/wasm-bindings"
        },
        {
          name: "Memory Views & Types",
          path: "/typescript/game-dev/advanced/wasm-and-memory/memory-views-and-types"
        }
      ]
    },
    {
      name: "Parallelism",
      subpages: [
        {
          name: "SharedArrayBuffer & Atomics",
          path: "/typescript/game-dev/advanced/parallelism/sharedarraybuffer-and-atomics"
        },
        {
          name: "Transferables & Clone",
          path: "/typescript/game-dev/advanced/parallelism/transferables-and-clone"
        }
      ]
    },
    {
      name: "Project Scale",
      subpages: [
        {
          name: "Monorepos & Paths",
          path: "/typescript/game-dev/advanced/project-scale/monorepos-and-paths"
        },
        {
          name: "API Surfaces & Modules",
          path: "/typescript/game-dev/advanced/project-scale/api-surfaces-and-modules"
        }
      ]
    },
    {
      name: "Debug & Profiling",
      subpages: [
        {
          name: "Type Perf Diagnostics",
          path: "/typescript/game-dev/advanced/debug-and-profiling/type-perf-diagnostics"
        },
        {
          name: "Build Output & Decls",
          path: "/typescript/game-dev/advanced/debug-and-profiling/build-output-and-decls"
        }
      ]
    }
  ]
};

export default Advanced;