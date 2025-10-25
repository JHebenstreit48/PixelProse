import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Lifetimes & Types",
      subpages: [
        {
          name: "Advanced Lifetimes",
          path: "/rust/advanced/lifetimes-and-types/advanced-lifetimes"
        },
        {
          name: "Trait Objects & Assoc Types",
          path: "/rust/advanced/lifetimes-and-types/trait-objects-and-associated-types"
        }
      ]
    },
    {
      name: "Memory & Unsafe",
      subpages: [
        {
          name: "Unsafe Rust",
          path: "/rust/advanced/memory-and-unsafe/unsafe-rust"
        },
        {
          name: "Allocators & Arc/Box",
          path: "/rust/advanced/memory-and-unsafe/allocators-and-arc-box"
        }
      ]
    },
    {
      name: "Performance",
      subpages: [
        {
          name: "Zero-Cost Abstractions",
          path: "/rust/advanced/performance/zero-cost-abstractions"
        },
        {
          name: "Profiling & Benchmarks",
          path: "/rust/advanced/performance/profiling-and-benchmarks"
        }
      ]
    },
    {
      name: "Concurrency",
      subpages: [
        {
          name: "Atomics & Lock-Free",
          path: "/rust/advanced/concurrency/atomics-and-lock-free"
        },
        {
          name: "Async Runtimes",
          path: "/rust/advanced/concurrency/async-runtimes"
        }
      ]
    },
    {
      name: "FFI & WASM",
      subpages: [
        {
          name: "C FFI & bindgen",
          path: "/rust/advanced/ffi-and-wasm/c-ffi-and-bindgen"
        },
        {
          name: "WASM & Memory",
          path: "/rust/advanced/ffi-and-wasm/wasm-and-memory"
        }
      ]
    }
  ]
};

export default Advanced;