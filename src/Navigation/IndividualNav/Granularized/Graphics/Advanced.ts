import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "PBR",
      subpages: [
        {
          name: "Materials",
          subpages: [
            {
              name: "Base Color",
              path: "/pbr/materials/base-color"
            },
            {
              name: "Metallic vs Specular",
              path: "/pbr/materials/metallic-vs-specular"
            },
            {
              name: "Ambient Occlusion",
              path: "/pbr/materials/ambient-occlusion"
            }
          ]
        },
        {
          name: "Lighting & BRDF",
          subpages: [
            {
              name: "Diffuse",
              path: "/pbr/lighting-and-brdf/diffuse"
            },
            {
              name: "Specular & Microfacet",
              path: "/pbr/lighting-and-brdf/specular-and-microfacet"
            },
            {
              name: "Energy Conservation",
              path: "/pbr/lighting-and-brdf/energy-conservation"
            }
          ]
        },
        {
          name: "Pipelines",
          subpages: [
            {
              name: "Forward",
              path: "/pbr/pipelines/forward"
            },
            {
              name: "Deferred",
              path: "/pbr/pipelines/deferred"
            }
          ]
        },
        {
          name: "Optimization",
          subpages: [
            {
              name: "Texture Compression",
              path: "/pbr/optimization/texture-compression"
            },
            {
              name: "LOD & Mips",
              path: "/pbr/optimization/lod-and-mips"
            }
          ]
        },
        {
          name: "Authoring",
          subpages: [
            {
              name: "Substance Painter",
              path: "/pbr/authoring/substance-painter"
            },
            {
              name: "Quixel Mixer",
              path: "/pbr/authoring/quixel-mixer"
            }
          ]
        }
      ]
    },
    {
      name: "Global Illumination",
      subpages: [
        {
          name: "Overview",
          subpages: [
            {
              name: "Introduction",
              path: "/gi/overview/introduction"
            },
            {
              name: "Use Cases",
              path: "/gi/overview/use-cases"
            }
          ]
        },
        {
          name: "Techniques",
          subpages: [
            {
              name: "Lightmaps",
              path: "/gi/techniques/lightmaps"
            },
            {
              name: "Voxel GI",
              path: "/gi/techniques/voxel-gi"
            },
            {
              name: "Screen Space GI",
              path: "/gi/techniques/screen-space-gi"
            }
          ]
        },
        {
          name: "Baked GI",
          subpages: [
            {
              name: "Static Baking",
              path: "/gi/baked/static-baking"
            },
            {
              name: "Dynamic Baking",
              path: "/gi/baked/dynamic-baking"
            }
          ]
        },
        {
          name: "Real-Time GI",
          subpages: [
            {
              name: "LPV",
              path: "/gi/real-time/lpv"
            },
            {
              name: "Probe Volumes",
              path: "/gi/real-time/probe-volumes"
            }
          ]
        },
        {
          name: "Performance",
          subpages: [
            {
              name: "Optimization",
              path: "/gi/performance/optimization"
            },
            {
              name: "Trade-Offs",
              path: "/gi/performance/trade-offs"
            }
          ]
        }
      ]
    },
    {
      name: "Post-Processing",
      subpages: [
        {
          name: "Foundations",
          subpages: [
            {
              name: "Overview",
              path: "/post-processing/foundations/overview"
            },
            {
              name: "Pipeline Integration",
              path: "/post-processing/foundations/pipeline-integration"
            }
          ]
        },
        {
          name: "Effects",
          subpages: [
            {
              name: "Bloom",
              path: "/post-processing/effects/bloom"
            },
            {
              name: "Motion Blur",
              path: "/post-processing/effects/motion-blur"
            },
            {
              name: "Depth of Field",
              path: "/post-processing/effects/depth-of-field"
            },
            {
              name: "Color Grading",
              path: "/post-processing/effects/color-grading"
            },
            {
              name: "Lens Flare",
              path: "/post-processing/effects/lens-flare"
            },
            {
              name: "Chromatic Aberration",
              path: "/post-processing/effects/chromatic-aberration"
            },
            {
              name: "Vignetting",
              path: "/post-processing/effects/vignetting"
            },
            {
              name: "SSAO",
              path: "/post-processing/effects/ssao"
            },
            {
              name: "SSR",
              path: "/post-processing/effects/ssr"
            }
          ]
        },
        {
          name: "Performance",
          subpages: [
            {
              name: "Optimization",
              path: "/post-processing/performance/optimization"
            },
            {
              name: "Quality Settings",
              path: "/post-processing/performance/quality-settings"
            }
          ]
        }
      ]
    },
    {
      name: "Ray Tracing",
      subpages: [
        {
          name: "Fundamentals",
          subpages: [
            {
              name: "Introduction",
              path: "/ray-tracing/fundamentals/introduction"
            },
            {
              name: "History & Evolution",
              path: "/ray-tracing/fundamentals/history-and-evolution"
            },
            {
              name: "Raster vs Ray",
              path: "/ray-tracing/fundamentals/raster-vs-ray"
            }
          ]
        },
        {
          name: "Core Concepts",
          subpages: [
            {
              name: "Reflections & Refractions",
              path: "/ray-tracing/core-concepts/reflections-and-refractions"
            },
            {
              name: "Shadows & Caustics",
              path: "/ray-tracing/core-concepts/shadows-and-caustics"
            },
            {
              name: "RT Global Illumination",
              path: "/ray-tracing/core-concepts/rt-global-illumination"
            }
          ]
        },
        {
          name: "Implementation",
          subpages: [
            {
              name: "APIs (DXR/Vulkan)",
              path: "/ray-tracing/implementation/apis-dxr-vulkan"
            },
            {
              name: "Hardware Acceleration",
              path: "/ray-tracing/implementation/hardware-acceleration"
            },
            {
              name: "Performance Optimization",
              path: "/ray-tracing/implementation/performance-optimization"
            }
          ]
        },
        {
          name: "Advanced",
          subpages: [
            {
              name: "Denoising",
              path: "/ray-tracing/advanced/denoising"
            },
            {
              name: "Hybrid Rendering",
              path: "/ray-tracing/advanced/hybrid-rendering"
            },
            {
              name: "Path Tracing",
              path: "/ray-tracing/advanced/path-tracing"
            }
          ]
        },
        {
          name: "Applications",
          subpages: [
            {
              name: "Lighting & Reflections",
              path: "/ray-tracing/applications/lighting-and-reflections"
            },
            {
              name: "Cinematics & Interactive",
              path: "/ray-tracing/applications/cinematics-and-interactive"
            }
          ]
        }
      ]
    }
  ]
};

export default Advanced;