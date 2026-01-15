import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Runtime & Timing",
      subpages: [
        {
          name: "Game Loop & Delta",
          path: "/javascript/game-dev/basics/runtime-and-timing/game-loop-and-delta"
        },
        {
          name: "Frame Budget & Ticks",
          path: "/javascript/game-dev/basics/runtime-and-timing/frame-budget-and-ticks"
        }
      ]
    },
    {
      name: "Math & Numbers",
      subpages: [
        {
          name: "Floating Point Gotchas",
          path: "/javascript/game-dev/basics/math-and-numbers/floating-point-gotchas"
        },
        {
          name: "RNG & Seeding",
          path: "/javascript/game-dev/basics/math-and-numbers/rng-and-seeding"
        }
      ]
    },
    {
      name: "Structures & Patterns",
      subpages: [
        {
          name: "ECS-Friendly Data",
          path: "/javascript/game-dev/basics/structures-and-patterns/ecs-friendly-data"
        },
        {
          name: "Object Pools",
          path: "/javascript/game-dev/basics/structures-and-patterns/object-pools"
        }
      ]
    },
    {
      name: "Performance Basics",
      subpages: [
        {
          name: "JIT & Hidden Classes",
          path: "/javascript/game-dev/basics/performance-basics/jit-and-hidden-classes"
        },
        {
          name: "Allocations & GC",
          path: "/javascript/game-dev/basics/performance-basics/allocations-and-gc"
        }
      ]
    }
  ]
};

export default Basics;