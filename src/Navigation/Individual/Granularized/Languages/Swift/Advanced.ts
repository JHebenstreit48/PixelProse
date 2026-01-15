import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Generics & Protocols",
      subpages: [
        {
          name: "Generics",
          path: "/swift/advanced/generics-and-protocols/generics"
        },
        {
          name: "Protocols & Extensions",
          path: "/swift/advanced/generics-and-protocols/protocols-and-extensions"
        }
      ]
    },
    {
      name: "Concurrency",
      subpages: [
        {
          name: "Task Groups & Cancel",
          path: "/swift/advanced/concurrency/task-groups-and-cancel"
        },
        {
          name: "Async Sequences",
          path: "/swift/advanced/concurrency/async-sequences"
        }
      ]
    },
    {
      name: "Performance",
      subpages: [
        {
          name: "ARC Optimization",
          path: "/swift/advanced/performance/arc-optimization"
        },
        {
          name: "Copy-on-Write",
          path: "/swift/advanced/performance/copy-on-write"
        }
      ]
    },
    {
      name: "Interop & Unsafe",
      subpages: [
        {
          name: "C/ObjC Interop",
          path: "/swift/advanced/interop-and-unsafe/c-and-objc-interop"
        },
        {
          name: "Unsafe Pointers",
          path: "/swift/advanced/interop-and-unsafe/unsafe-pointers"
        }
      ]
    },
    {
      name: "SIMD & Math",
      subpages: [
        {
          name: "SIMD Basics",
          path: "/swift/advanced/simd-and-math/simd-basics"
        },
        {
          name: "Numeric Performance",
          path: "/swift/advanced/simd-and-math/numeric-performance"
        }
      ]
    }
  ]
};

export default Advanced;