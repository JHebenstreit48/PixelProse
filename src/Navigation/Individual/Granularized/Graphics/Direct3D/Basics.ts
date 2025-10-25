import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    {
      name: "Fundamentals",
      subpages: [
        {
          name: "Introduction",
          path: "/direct3d/basics/fundamentals/introduction"
        },
        {
          name: "D3D11 vs D3D12",
          path: "/direct3d/basics/fundamentals/d3d11-vs-d3d12"
        }
      ]
    },
    {
      name: "Setup",
      subpages: [
        {
          name: "Dev Environment",
          path: "/direct3d/basics/setup/dev-environment"
        },
        {
          name: "Hello Triangle",
          path: "/direct3d/basics/setup/hello-triangle"
        }
      ]
    },
    {
      name: "Pipeline & Resources",
      subpages: [
        {
          name: "Raster Pipeline",
          path: "/direct3d/basics/pipeline-and-resources/raster-pipeline"
        },
        {
          name: "Resource States & Barriers",
          path: "/direct3d/basics/pipeline-and-resources/resource-states-and-barriers"
        }
      ]
    },
    {
      name: "Commands & Sync",
      subpages: [
        {
          name: "Command Lists",
          path: "/direct3d/basics/commands-and-sync/command-lists"
        },
        {
          name: "Queues & Fences",
          path: "/direct3d/basics/commands-and-sync/queues-and-fences"
        }
      ]
    }
  ]
};

export default Basics;