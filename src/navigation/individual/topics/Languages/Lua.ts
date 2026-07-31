import type { Subpage } from '@/types/navigation';

import Basics from "@/navigation/individual/modularized/Languages/Lua/Basics";
import Advanced from "@/navigation/individual/modularized/Languages/Lua/Advanced";
import Testing from "@/navigation/individual/modularized/Languages/Lua/Testing";
import Tools from "@/navigation/individual/modularized/Languages/Lua/Tools";

const Lua: Subpage = {
    name: "Lua",
    subpages: [
        Basics,
        Advanced,
        Testing,
        Tools
    ]
};

export default Lua;