import type { Subpage } from '@/types/navigation';

import Basics from "@/navigation/individual/modularized/Graphics/Rendering/Basics";
import Advanced from "@/navigation/individual/modularized/Graphics/Rendering/Advanced";

const Rendering: Subpage = {
    name: "Rendering",
    subpages: [
        Basics,
        Advanced
    ]
};

export default Rendering;