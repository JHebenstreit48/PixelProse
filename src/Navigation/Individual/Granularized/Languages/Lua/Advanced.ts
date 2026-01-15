import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Metaprogramming",
      subpages: [
        {
          name: "Metatables",
          path: "/lua/advanced/metaprogramming/metatables"
        },
        {
          name: "Metamethods",
          path: "/lua/advanced/metaprogramming/metamethods"
        }
      ]
    },
    {
      name: "Coroutines",
      subpages: [
        {
          name: "Coroutines",
          path: "/lua/advanced/coroutines/coroutines"
        },
        {
          name: "Coroutine Patterns",
          path: "/lua/advanced/coroutines/coroutine-patterns"
        }
      ]
    },
    {
      name: "Memory & GC",
      subpages: [
        {
          name: "Garbage Collection",
          path: "/lua/advanced/memory-and-gc/garbage-collection"
        },
        {
          name: "Memory Patterns",
          path: "/lua/advanced/memory-and-gc/memory-patterns"
        }
      ]
    },
    {
      name: "Performance",
      subpages: [
        {
          name: "Optimizations",
          path: "/lua/advanced/performance/optimizations"
        },
        {
          name: "Profiling Strategies",
          path: "/lua/advanced/performance/profiling-strategies"
        }
      ]
    },
    {
      name: "Game Scripting",
      subpages: [
        {
          name: "ECS with Tables",
          path: "/lua/advanced/game-scripting/ecs-with-tables"
        },
        {
          name: "Time & Game Loop",
          path: "/lua/advanced/game-scripting/time-and-game-loop"
        }
      ]
    }
  ]
};

export default Advanced;