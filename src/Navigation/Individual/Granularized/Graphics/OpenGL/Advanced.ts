import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Compute & Tessellation",
      subpages: [
        {
          name: "Compute Shaders",
          path: "/opengl/advanced/compute-and-tessellation/compute-shaders"
        },
        {
          name: "Tessellation",
          path: "/opengl/advanced/compute-and-tessellation/tessellation"
        }
      ]
    },
    {
      name: "Debugging",
      subpages: [
        {
          name: "KHR_debug",
          path: "/opengl/advanced/debugging/khr-debug"
        },
        {
          name: "Error Handling",
          path: "/opengl/advanced/debugging/error-handling"
        }
      ]
    },
    {
      name: "Performance",
      subpages: [
        {
          name: "State Changes",
          path: "/opengl/advanced/performance/state-changes"
        },
        {
          name: "Batching",
          path: "/opengl/advanced/performance/batching"
        }
      ]
    }
  ]
};

export default Advanced;