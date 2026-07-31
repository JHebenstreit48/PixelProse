import type { Subpage } from '@/types/navigation';

import Basics from "@/navigation/individual/modularized/Languages/CFamily/CSharp/Basics";
import Advanced from "@/navigation/individual/modularized/Languages/CFamily/CSharp/Advanced";
import Tools from "@/navigation/individual/modularized/Languages/CFamily/CSharp/Tools";
import Testing from "@/navigation/individual/modularized/Languages/CFamily/CSharp/Testing";

const CSharp: Subpage = {
    name: "C#",
    subpages: [
        Basics,
        Advanced,
        Tools,
        Testing
    ]
};

export default CSharp;