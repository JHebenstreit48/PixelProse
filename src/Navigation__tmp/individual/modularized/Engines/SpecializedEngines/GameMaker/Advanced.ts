import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Rendering",
      subpages: [
        {
          name: "Surfaces & Blend",
          path: "/gamemaker/advanced/rendering/surfaces-and-blend"
        },
        {
          name: "Shaders (GLSL ES)",
          path: "/gamemaker/advanced/rendering/shaders-glsl-es"
        }
      ]
    },
    {
      name: "Cameras & Views",
      subpages: [
        {
          name: "Camera Control",
          path: "/gamemaker/advanced/cameras-and-views/camera-control"
        },
        {
          name: "Parallax & Zoom",
          path: "/gamemaker/advanced/cameras-and-views/parallax-and-zoom"
        }
      ]
    },
    {
      name: "Particles & FX",
      subpages: [
        {
          name: "Particle Systems",
          path: "/gamemaker/advanced/particles-and-fx/particle-systems"
        },
        {
          name: "Trails & Explosions",
          path: "/gamemaker/advanced/particles-and-fx/trails-and-explosions"
        }
      ]
    },
    {
      name: "Data & Patterns",
      subpages: [
        {
          name: "Structs & Methods",
          path: "/gamemaker/advanced/data-and-patterns/structs-and-methods"
        },
        {
          name: "ds_* Structures",
          path: "/gamemaker/advanced/data-and-patterns/ds-structures"
        }
      ]
    },
    {
      name: "Physics",
      subpages: [
        {
          name: "Box2D Setup",
          path: "/gamemaker/advanced/physics/box2d-setup"
        },
        {
          name: "Joints & Forces",
          path: "/gamemaker/advanced/physics/joints-and-forces"
        }
      ]
    },
    {
      name: "Paths & Navigation",
      subpages: [
        {
          name: "Paths & Motion",
          path: "/gamemaker/advanced/paths-and-navigation/paths-and-motion"
        },
        {
          name: "Pathfinding Patterns",
          path: "/gamemaker/advanced/paths-and-navigation/pathfinding-patterns"
        }
      ]
    },
    {
      name: "Async & Networking",
      subpages: [
        {
          name: "HTTP & Async Events",
          path: "/gamemaker/advanced/async-and-networking/http-and-async-events"
        },
        {
          name: "Queues & Callbacks",
          path: "/gamemaker/advanced/async-and-networking/queues-and-callbacks"
        }
      ]
    },
    {
      name: "Save & Persistence",
      subpages: [
        {
          name: "JSON/INI",
          path: "/gamemaker/advanced/save-and-persistence/json-ini"
        },
        {
          name: "Buffers & Binary",
          path: "/gamemaker/advanced/save-and-persistence/buffers-and-binary"
        }
      ]
    },
    {
      name: "Performance",
      subpages: [
        {
          name: "Profiler & Bottlenecks",
          path: "/gamemaker/advanced/performance/profiler-and-bottlenecks"
        },
        {
          name: "Micro-opts & GC",
          path: "/gamemaker/advanced/performance/micro-opts-and-gc"
        }
      ]
    }
  ]
};

export default Advanced;