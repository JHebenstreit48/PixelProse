import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const Tools: Subpage = {
  name: "Tools",
  subpages: [
    {
      name: "GPU Capture",
      subpages: [
        {
          name: "RenderDoc",
          path: "/graphics-tools/gpu-capture/renderdoc"
        },
        {
          name: "PIX for Windows",
          path: "/graphics-tools/gpu-capture/pix-for-windows"
        }
      ]
    },
    {
      name: "Profiling & Analysis",
      subpages: [
        {
          name: "Nsight (Graphics/Systems)",
          path: "/graphics-tools/profiling-and-analysis/nsight"
        },
        {
          name: "Intel GPA",
          path: "/graphics-tools/profiling-and-analysis/intel-gpa"
        }
      ]
    },
    {
      name: "Validation & Debug",
      subpages: [
        {
          name: "Vulkan Validation Layers",
          path: "/graphics-tools/validation-and-debug/vulkan-validation-layers"
        },
        {
          name: "D3D Debug Layer",
          path: "/graphics-tools/validation-and-debug/d3d-debug-layer"
        }
      ]
    },
    {
      name: "Shader Compilers",
      subpages: [
        {
          name: "DXC & FXC",
          path: "/graphics-tools/shader-compilers/dxc-and-fxc"
        },
        {
          name: "glslang & SPIRV-Tools",
          path: "/graphics-tools/shader-compilers/glslang-and-spirv-tools"
        }
      ]
    },
    {
      name: "Scripting & Generation",
      subpages: [
        {
          name: "Python",
          subpages: [
            {
              name: "Overview",
              path: "/graphics-tools/scripting-and-generation/python/overview"
            },
            {
              name: "Engine Integration",
              path: "/graphics-tools/scripting-and-generation/python/engine-integration"
            },
            {
              name: "Shader Codegen",
              path: "/graphics-tools/scripting-and-generation/python/shader-codegen"
            },
            {
              name: "Batch & CLI",
              path: "/graphics-tools/scripting-and-generation/python/batch-and-cli"
            },
            {
              name: "Template Engines",
              path: "/graphics-tools/scripting-and-generation/python/template-engines"
            }
          ]
        },
        {
          name: "Node.js",
          subpages: [
            {
              name: "Tooling Scripts",
              path: "/graphics-tools/scripting-and-generation/node/tooling-scripts"
            },
            {
              name: "DevServer & Watchers",
              path: "/graphics-tools/scripting-and-generation/node/devserver-and-watchers"
            }
          ]
        },
        {
          name: "Pipelines",
          subpages: [
            {
              name: "Build & Asset Bake",
              path: "/graphics-tools/scripting-and-generation/pipelines/build-and-asset-bake"
            },
            {
              name: "Data → Assets",
              path: "/graphics-tools/scripting-and-generation/pipelines/data-to-assets"
            }
          ]
        }
      ]
    }
  ]
};

export default Tools;