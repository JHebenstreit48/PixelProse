import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Implementation",
      subpages: [
        {
          name: "Accel Structures",
          path: "/ray-tracing/advanced/implementation/accel-structures"
        },
        {
          name: "Raygen/Miss/Hit",
          path: "/ray-tracing/advanced/implementation/raygen-miss-hit"
        }
      ]
    },
    {
      name: "Denoising",
      subpages: [
        {
          name: "Spatial",
          path: "/ray-tracing/advanced/denoising/spatial"
        },
        {
          name: "Temporal",
          path: "/ray-tracing/advanced/denoising/temporal"
        }
      ]
    },
    {
      name: "Hybrid & Path",
      subpages: [
        {
          name: "Hybrid Rendering",
          path: "/ray-tracing/advanced/hybrid-and-path/hybrid-rendering"
        },
        {
          name: "Path Tracing",
          path: "/ray-tracing/advanced/hybrid-and-path/path-tracing"
        }
      ]
    },
    {
      name: "Performance",
      subpages: [
        {
          name: "BVH Updates",
          path: "/ray-tracing/advanced/performance/bvh-updates"
        },
        {
          name: "Sampling Strategies",
          path: "/ray-tracing/advanced/performance/sampling-strategies"
        }
      ]
    }
  ]
};

export default Advanced;