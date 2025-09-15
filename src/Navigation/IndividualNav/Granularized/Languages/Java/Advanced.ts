import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Concurrency",
      subpages: [
        {
          name: "Locks & Synchronizers",
          path: "/java/advanced/concurrency/locks-and-synchronizers"
        },
        {
          name: "Parallel Streams & ForkJoin",
          path: "/java/advanced/concurrency/parallel-streams-and-forkjoin"
        }
      ]
    },
    {
      name: "Memory & GC",
      subpages: [
        {
          name: "JVM Memory Model",
          path: "/java/advanced/memory-and-gc/jvm-memory-model"
        },
        {
          name: "GC Tuning for Games",
          path: "/java/advanced/memory-and-gc/gc-tuning-for-games"
        }
      ]
    },
    {
      name: "NIO & Binary",
      subpages: [
        {
          name: "ByteBuffer & Mapped Files",
          path: "/java/advanced/nio-and-binary/bytebuffer-and-mapped-files"
        },
        {
          name: "Channels & Selectors",
          path: "/java/advanced/nio-and-binary/channels-and-selectors"
        }
      ]
    },
    {
      name: "Performance",
      subpages: [
        {
          name: "JIT & Escape Analysis",
          path: "/java/advanced/performance/jit-and-escape-analysis"
        },
        {
          name: "Object Pools & Structs",
          path: "/java/advanced/performance/object-pools-and-structs"
        }
      ]
    },
    {
      name: "Interop & Native",
      subpages: [
        {
          name: "JNI Basics",
          path: "/java/advanced/interop-and-native/jni-basics"
        },
        {
          name: "Project Panama (FFI)",
          path: "/java/advanced/interop-and-native/project-panama-ffi"
        }
      ]
    },
    {
      name: "Debug & Profiling",
      subpages: [
        {
          name: "JFR & Async Profiler",
          path: "/java/advanced/debug-and-profiling/jfr-and-async-profiler"
        },
        {
          name: "Flamegraphs & Sampling",
          path: "/java/advanced/debug-and-profiling/flamegraphs-and-sampling"
        }
      ]
    }
  ]
};

export default Advanced;