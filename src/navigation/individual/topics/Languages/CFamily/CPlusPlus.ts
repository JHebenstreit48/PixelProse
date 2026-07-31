import type { Subpage } from '@/types/navigation';

import Basics from "@/navigation/individual/modularized/Languages/CFamily/CPlusPlus/Basics";
import Advanced from "@/navigation/individual/modularized/Languages/CFamily/CPlusPlus/Advanced";
import Tools from "@/navigation/individual/modularized/Languages/CFamily/CPlusPlus/Tools";
import Testing from "@/navigation/individual/modularized/Languages/CFamily/CPlusPlus/Testing";

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