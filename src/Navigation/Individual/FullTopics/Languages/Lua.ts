import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

import Basics from "@/Navigation/Individual/Granularized/Languages/Lua/Basics";
import Advanced from "@/Navigation/Individual/Granularized/Languages/Lua/Advanced";
import Testing from "@/Navigation/Individual/Granularized/Languages/Lua/Testing";
import Tools from "@/Navigation/Individual/Granularized/Languages/Lua/Tools";

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