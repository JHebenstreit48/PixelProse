import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: 'Advanced',
  subpages: [
    {
      name: 'AI & Algorithms',
      subpages: [
        {
          name: 'Pathfinding Algorithms',
          path: '/languages/python/advanced/ai-and-algorithms/pathfinding',
        },
        {
          name: 'Procedural Generation',
          path: '/languages/python/advanced/ai-and-algorithms/procedural-generation',
        },
        {
          name: 'Neural Networks in Games',
          path: '/languages/python/advanced/ai-and-algorithms/neural-networks',
        },
      ],
    },
    {
      name: 'Content Pipeline',
      subpages: [
        {
          name: 'Blender Scripting',
          path: '/languages/python/advanced/content-pipeline/blender-scripting',
        },
        {
          name: 'Asset & Data Scripts',
          path: '/languages/python/advanced/content-pipeline/asset-and-data-scripts',
        },
      ],
    },
    {
      name: 'Testing & Performance',
      subpages: [
        {
          name: 'Integration Testing',
          path: '/languages/python/advanced/testing-and-performance/integration-testing',
        },
        {
          name: 'Profiling for Games',
          path: '/languages/python/advanced/testing-and-performance/profiling-for-games',
        },
      ],
    },
  ],
};

export default Advanced;