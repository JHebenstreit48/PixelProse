import type { Subpage } from '@/types/navigation';

import Basics from "@/Navigation/Individual/Granularized/Languages/CFamily/CPlusPlus/Basics";
import Advanced from "@/Navigation/Individual/Granularized/Languages/CFamily/CPlusPlus/Advanced";
import Tools from "@/Navigation/Individual/Granularized/Languages/CFamily/CPlusPlus/Tools";
import Testing from "@/Navigation/Individual/Granularized/Languages/CFamily/CPlusPlus/Testing";

const CPlusPlus: Subpage = {
    name: "C++",
    subpages: [
        Basics,
        Advanced,
        Tools,
        Testing
    ]
};

export default CPlusPlus;