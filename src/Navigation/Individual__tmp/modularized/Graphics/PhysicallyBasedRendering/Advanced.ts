import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "BRDF",
      subpages: [
        {
          name: "GGX & Microfacet",
          path: "/pbr/advanced/brdf/ggx-and-microfacet"
        },
        {
          name: "Fresnel (Schlick)",
          path: "/pbr/advanced/brdf/fresnel-schlick"
        }
      ]
    },
    {
      name: "IBL",
      subpages: [
        {
          name: "Diffuse IBL",
          path: "/pbr/advanced/ibl/diffuse-ibl"
        },
        {
          name: "Specular IBL",
          path: "/pbr/advanced/ibl/specular-ibl"
        }
      ]
    },
    {
      name: "Pipelines",
      subpages: [
        {
          name: "Forward",
          path: "/pbr/advanced/pipelines/forward"
        },
        {
          name: "Deferred",
          path: "/pbr/advanced/pipelines/deferred"
        }
      ]
    },
    {
      name: "Optimization",
      subpages: [
        {
          name: "Texture Compression",
          path: "/pbr/advanced/optimization/texture-compression"
        },
        {
          name: "LOD & Mips",
          path: "/pbr/advanced/optimization/lod-and-mips"
        }
      ]
    }
  ]
};

export default Advanced;