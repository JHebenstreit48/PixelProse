import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Introduction",
          path: "/vulkan/basics/fundamentals/introduction"
        },
        {
          name: "SPIR-V",
          path: "/vulkan/basics/fundamentals/spir-v"
        }
      ]
    },
    {
      name: "Core Objects",
      subpages: [
        {
          name: "Instance & Device",
          path: "/vulkan/basics/core-objects/instance-and-device"
        },
        {
          name: "Queues & Cmd Buffers",
          path: "/vulkan/basics/core-objects/queues-and-command-buffers"
        }
      ]
    },
    {
      name: "Memory & Sync",
      subpages: [
        {
          name: "Memory Management",
          path: "/vulkan/basics/memory-and-sync/memory-management"
        },
        {
          name: "Fences & Semaphores",
          path: "/vulkan/basics/memory-and-sync/fences-and-semaphores"
        }
      ]
    },
    {
      name: "Techniques",
      subpages: [
        {
          name: "Deferred Rendering",
          path: "/vulkan/basics/techniques/deferred-rendering"
        },
        {
          name: "Descriptor Sets",
          path: "/vulkan/basics/techniques/descriptor-sets"
        }
      ]
    }
  ]
};

export default Basics;