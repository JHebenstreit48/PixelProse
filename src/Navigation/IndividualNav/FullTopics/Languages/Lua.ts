import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

import Basics from "@/Navigation/IndividualNav/Granularized/Languages/Lua/Basics";
import Advanced from "@/Navigation/IndividualNav/Granularized/Languages/Lua/Advanced";
import Testing from "@/Navigation/IndividualNav/Granularized/Languages/Lua/Testing";
import Tools from "@/Navigation/IndividualNav/Granularized/Languages/Lua/Tools";

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