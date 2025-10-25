import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Memory & Binary",
      subpages: [
        {
          name: "ArrayBuffer & DataView",
          path: "/javascript/game-dev/advanced/memory-and-binary/arraybuffer-and-dataview"
        },
        {
          name: "TypedArrays & Pools",
          path: "/javascript/game-dev/advanced/memory-and-binary/typedarrays-and-pools"
        }
      ]
    },
    {
      name: "Workers & Parallel",
      subpages: [
        {
          name: "Web Workers & Messaging",
          path: "/javascript/game-dev/advanced/workers-and-parallel/web-workers-and-messaging"
        },
        {
          name: "SharedArrayBuffer & Atomics",
          path: "/javascript/game-dev/advanced/workers-and-parallel/sharedarraybuffer-and-atomics"
        }
      ]
    },
    {
      name: "Determinism",
      subpages: [
        {
          name: "Seeded RNG Patterns",
          path: "/javascript/game-dev/advanced/determinism/seeded-rng-patterns"
        },
        {
          name: "Fixed-Step Simulation",
          path: "/javascript/game-dev/advanced/determinism/fixed-step-simulation"
        }
      ]
    },
    {
      name: "Debug & Profiling",
      subpages: [
        {
          name: "Perf Timeline & Flamegraphs",
          path: "/javascript/game-dev/advanced/debug-and-profiling/perf-timeline-and-flamegraphs"
        },
        {
          name: "GC & Memory Tools",
          path: "/javascript/game-dev/advanced/debug-and-profiling/gc-and-memory-tools"
        }
      ]
    }
  ]
};

export default Advanced;