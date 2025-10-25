import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Synchronization",
      subpages: [
        {
          name: "Pipeline Barriers",
          path: "/vulkan/advanced/synchronization/pipeline-barriers"
        },
        {
          name: "Timeline Semaphores",
          path: "/vulkan/advanced/synchronization/timeline-semaphores"
        }
      ]
    },
    {
      name: "Parallel & Commands",
      subpages: [
        {
          name: "Multi-Threaded Rendering",
          path: "/vulkan/advanced/parallel-and-commands/multi-threaded-rendering"
        },
        {
          name: "Secondary Cmd Buffers",
          path: "/vulkan/advanced/parallel-and-commands/secondary-command-buffers"
        }
      ]
    },
    {
      name: "Performance",
      subpages: [
        {
          name: "Validation & Layers",
          path: "/vulkan/advanced/performance/validation-and-layers"
        },
        {
          name: "Best Practices",
          path: "/vulkan/advanced/performance/best-practices"
        }
      ]
    }
  ]
};

export default Advanced;