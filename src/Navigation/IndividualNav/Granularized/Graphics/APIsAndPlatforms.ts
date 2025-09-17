import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const APIsAndPlatforms: Subpage = {
  name: "APIs & Platforms",
  subpages: [
    {
      name: "Direct3D",
      subpages: [
        {
          name: "Fundamentals",
          subpages: [
            {
              name: "Introduction",
              path: "/direct3d/fundamentals/introduction"
            },
            {
              name: "D3D11 vs D3D12",
              path: "/direct3d/fundamentals/d3d11-vs-d3d12"
            }
          ]
        },
        {
          name: "Setup",
          subpages: [
            {
              name: "Dev Environment",
              path: "/direct3d/setup/dev-environment"
            },
            {
              name: "Hello Triangle",
              path: "/direct3d/setup/hello-triangle"
            }
          ]
        },
        {
          name: "Pipeline & Resources",
          subpages: [
            {
              name: "Raster Pipeline",
              path: "/direct3d/pipeline-and-resources/raster-pipeline"
            },
            {
              name: "Resource States & Barriers",
              path: "/direct3d/pipeline-and-resources/resource-states-and-barriers"
            }
          ]
        },
        {
          name: "Parallel & Commands",
          subpages: [
            {
              name: "Bundles & Cmd Lists",
              path: "/direct3d/parallel-and-commands/bundles-and-command-lists"
            },
            {
              name: "Multi-Threaded Rendering",
              path: "/direct3d/parallel-and-commands/multi-threaded-rendering"
            }
          ]
        },
        {
          name: "Compute & Tessellation",
          subpages: [
            {
              name: "Compute Shaders",
              path: "/direct3d/compute-and-tessellation/compute-shaders"
            },
            {
              name: "Tessellation",
              path: "/direct3d/compute-and-tessellation/tessellation"
            }
          ]
        },
        {
          name: "Tools",
          subpages: [
            {
              name: "DirectXTK",
              path: "/direct3d/tools/directxtk"
            },
            {
              name: "Agility SDK",
              path: "/direct3d/tools/agility-sdk"
            }
          ]
        }
      ]
    },
    {
      name: "OpenGL",
      subpages: [
        {
          name: "Getting Started",
          subpages: [
            {
              name: "Installation",
              path: "/opengl/getting-started/installation"
            },
            {
              name: "Environment Setup",
              path: "/opengl/getting-started/environment-setup"
            }
          ]
        },
        {
          name: "Fundamentals",
          subpages: [
            {
              name: "Introduction",
              path: "/opengl/fundamentals/introduction"
            },
            {
              name: "Core Pipeline",
              path: "/opengl/fundamentals/core-pipeline"
            }
          ]
        },
        {
          name: "Buffers & Objects",
          subpages: [
            {
              name: "VBO/VAO",
              path: "/opengl/buffers-and-objects/vbo-vao"
            },
            {
              name: "FBO & Post-Process",
              path: "/opengl/buffers-and-objects/fbo-and-post-process"
            }
          ]
        },
        {
          name: "Techniques",
          subpages: [
            {
              name: "Lighting Models",
              path: "/opengl/techniques/lighting-models"
            },
            {
              name: "Shadow Mapping",
              path: "/opengl/techniques/shadow-mapping"
            }
          ]
        },
        {
          name: "Advanced",
          subpages: [
            {
              name: "Compute Shaders",
              path: "/opengl/advanced/compute-shaders"
            },
            {
              name: "Debug Output (KHR_debug)",
              path: "/opengl/advanced/debug-output-khr-debug"
            }
          ]
        },
        {
          name: "Tools & Frameworks",
          subpages: [
            {
              name: "GLEW",
              path: "/opengl/tools-and-frameworks/glew"
            },
            {
              name: "GLFW",
              path: "/opengl/tools-and-frameworks/glfw"
            }
          ]
        }
      ]
    },
    {
      name: "Vulkan",
      subpages: [
        {
          name: "Fundamentals",
          subpages: [
            {
              name: "Introduction",
              path: "/vulkan/fundamentals/introduction"
            },
            {
              name: "SPIR-V",
              path: "/vulkan/fundamentals/spir-v"
            }
          ]
        },
        {
          name: "Core Objects",
          subpages: [
            {
              name: "Instance & Device",
              path: "/vulkan/core-objects/instance-and-device"
            },
            {
              name: "Queues & Cmd Buffers",
              path: "/vulkan/core-objects/queues-and-command-buffers"
            }
          ]
        },
        {
          name: "Memory & Sync",
          subpages: [
            {
              name: "Memory Management",
              path: "/vulkan/memory-and-sync/memory-management"
            },
            {
              name: "Fences & Semaphores",
              path: "/vulkan/memory-and-sync/fences-and-semaphores"
            }
          ]
        },
        {
          name: "Techniques",
          subpages: [
            {
              name: "Deferred Rendering",
              path: "/vulkan/techniques/deferred-rendering"
            },
            {
              name: "Descriptor Sets",
              path: "/vulkan/techniques/descriptor-sets"
            }
          ]
        },
        {
          name: "Advanced",
          subpages: [
            {
              name: "Pipeline Barriers",
              path: "/vulkan/advanced/pipeline-barriers"
            },
            {
              name: "Multi-Threaded Rendering",
              path: "/vulkan/advanced/multi-threaded-rendering"
            }
          ]
        },
        {
          name: "Tools",
          subpages: [
            {
              name: "Vulkan SDK",
              path: "/vulkan/tools/vulkan-sdk"
            },
            {
              name: "Best Practices",
              path: "/vulkan/tools/best-practices"
            }
          ]
        }
      ]
    }
  ]
};

export default APIsAndPlatforms;