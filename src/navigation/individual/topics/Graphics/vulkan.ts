import type { Subpage } from '@/types/navigation';

import Basics from "@/navigation/individual/modularized/Graphics/Vulkan/Basics";

const Vulkan: Subpage = {
    name: "Vulkan",
    subpages: [
        Basics,
    ]
};

export default Vulkan;