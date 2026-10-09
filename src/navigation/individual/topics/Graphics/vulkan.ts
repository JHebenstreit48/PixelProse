import type { Subpage } from '@/types/navigation';

import Basics from "@/navigation/individual/modularized/Graphics/Vulkan/Basics";
import Advanced from "@/navigation/individual/modularized/Graphics/Vulkan/Advanced";

const Vulkan: Subpage = {
    name: 'Vulkan',
    subpages: [
        Basics,
        Advanced
    ]
};

export default Vulkan;