import type { Subpage } from '@/types/navigation';

import Rendering from "@/navigation/individual/topics/Graphics/rendering";
import OpenGL from "@/navigation/individual/topics/Graphics/openGL";
import Direct3D from "@/navigation/individual/topics/Graphics/direct3d";
import Vulkan from "@/navigation/individual/topics/Graphics/vulkan";
import PhysicallyBasedRendering from "@/navigation/individual/topics/Graphics/physicallyBasedRendering";
import PostProcessing from "@/navigation/individual/topics/Graphics/postProcessing";
import GlobalIllumination from "@/navigation/individual/topics/Graphics/globalIllumination";
import RayTracing from "@/navigation/individual/topics/Graphics/rayTracing";

const graphics: Subpage = {
  name: "Graphics",
  subpages: [
    Rendering,
    OpenGL,
    Direct3D,
    Vulkan,
    PhysicallyBasedRendering,
    PostProcessing,
    GlobalIllumination,
    RayTracing,
  ],
};

export default graphics;