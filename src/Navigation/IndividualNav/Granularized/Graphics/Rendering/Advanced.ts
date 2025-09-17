import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Culling & Sorting",
      subpages: [
        {
          name: "Frustum & Occlusion",
          path: "/rendering/advanced/culling-and-sorting/frustum-and-occlusion"
        },
        {
          name: "Transparency Sorting",
          path: "/rendering/advanced/culling-and-sorting/transparency-sorting"
        }
      ]
    },
    {
      name: "Tiled & Clustered",
      subpages: [
        {
          name: "Forward+ / Tiled",
          path: "/rendering/advanced/tiled-and-clustered/forward-plus-and-tiled"
        },
        {
          name: "Clustered Shading",
          path: "/rendering/advanced/tiled-and-clustered/clustered-shading"
        }
      ]
    },
    {
      name: "Memory & Streaming",
      subpages: [
        {
          name: "Heaps & Layouts",
          path: "/rendering/advanced/memory-and-streaming/heaps-and-layouts"
        },
        {
          name: "Asset Streaming",
          path: "/rendering/advanced/memory-and-streaming/asset-streaming"
        }
      ]
    },
    {
      name: "HDR & Tone Map",
      subpages: [
        {
          name: "HDR Pipeline",
          path: "/rendering/advanced/hdr-and-tone-map/hdr-pipeline"
        },
        {
          name: "Tone Mapping",
          path: "/rendering/advanced/hdr-and-tone-map/tone-mapping"
        }
      ]
    }
  ]
};

export default Advanced;