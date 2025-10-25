import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Architecture",
      subpages: [
        {
          name: "ECS with Tables",
          path: "/lua/advanced/architecture/ecs-with-tables"
        },
        {
          name: "Scenes & State",
          path: "/lua/advanced/architecture/scenes-and-state"
        }
      ]
    },
    {
      name: "Performance",
      subpages: [
        {
          name: "LuaJIT & FFI",
          path: "/lua/advanced/performance/luajit-and-ffi"
        },
        {
          name: "Profiling Hotspots",
          path: "/lua/advanced/performance/profiling-hotspots"
        }
      ]
    },
    {
      name: "Memory & GC",
      subpages: [
        {
          name: "GC Tuning",
          path: "/lua/advanced/memory-and-gc/gc-tuning"
        },
        {
          name: "Long-Lived Tables",
          path: "/lua/advanced/memory-and-gc/long-lived-tables"
        }
      ]
    },
    {
      name: "Packaging & Interop",
      subpages: [
        {
          name: "Builds & Distribution",
          path: "/lua/advanced/packaging-and-interop/builds-and-distribution"
        },
        {
          name: "Hot Reload & Plugins",
          path: "/lua/advanced/packaging-and-interop/hot-reload-and-plugins"
        }
      ]
    }
  ]
};

export default Advanced;