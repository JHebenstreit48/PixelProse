import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: 'Advanced',
  subpages: [
    {
      name: 'Concurrency',
      subpages: [
        {
          name: 'Locks & Synchronizers',
          path: '/languages/java/advanced/concurrency/locks-and-synchronizers',
        },
        {
          name: 'Parallel Streams & ForkJoin',
          path: '/languages/java/advanced/concurrency/parallel-streams-and-forkjoin',
        },
      ],
    },
    {
      name: 'Memory & GC',
      subpages: [
        {
          name: 'JVM Memory Model',
          path: '/languages/java/advanced/memory-and-gc/jvm-memory-model',
        },
        {
          name: 'GC Tuning for Games',
          path: '/languages/java/advanced/memory-and-gc/gc-tuning-for-games',
        },
      ],
    },
    {
      name: 'NIO & Binary',
      subpages: [
        {
          name: 'ByteBuffer & Mapped Files',
          path: '/languages/java/advanced/nio-and-binary/bytebuffer-and-mapped-files',
        },
        {
          name: 'Channels & Selectors',
          path: '/languages/java/advanced/nio-and-binary/channels-and-selectors',
        },
      ],
    },
    {
      name: 'Performance',
      subpages: [
        {
          name: 'JIT & Escape Analysis',
          path: '/languages/java/advanced/performance/jit-and-escape-analysis',
        },
        {
          name: 'Object Pools & Value Classes',
          path: '/languages/java/advanced/performance/object-pools-and-value-classes',
        },
      ],
    },
    {
      name: 'Interop & Native',
      subpages: [
        {
          name: 'JNI Basics',
          path: '/languages/java/advanced/interop-and-native/jni-basics',
        },
        {
          name: 'Project Panama (FFI)',
          path: '/languages/java/advanced/interop-and-native/project-panama-ffi',
        },
      ],
    },
    {
      name: 'Debug & Profiling',
      subpages: [
        {
          name: 'JFR & Async Profiler',
          path: '/languages/java/advanced/debug-and-profiling/jfr-and-async-profiler',
        },
        {
          name: 'Flamegraphs & Sampling',
          path: '/languages/java/advanced/debug-and-profiling/flamegraphs-and-sampling',
        },
      ],
    },
  ],
};

export default Advanced;