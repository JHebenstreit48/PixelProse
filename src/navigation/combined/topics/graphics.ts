import type { Subpage } from '@/types/navigation';

import Vulkan from "@/navigation/individual/topics/Graphics/vulkan";

const graphics: Subpage = {
  name: "Graphics",
  subpages: [
    Vulkan,
  ],
};

export default graphics;