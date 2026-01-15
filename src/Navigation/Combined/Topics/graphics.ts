import type { Subpage } from '@/types/navigation';

import Vulkan from "@/Navigation/Individual/FullTopics/Graphics/vulkan";

const graphics: Subpage = {
  name: "Graphics",
  subpages: [
    Vulkan,
  ],
};

export default graphics;