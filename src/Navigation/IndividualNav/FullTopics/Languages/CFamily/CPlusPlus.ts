import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

import Basics from "@/Navigation/IndividualNav/Granularized/Languages/CFamily/CPlusPlus/Basics";
import Advanced from "@/Navigation/IndividualNav/Granularized/Languages/CFamily/CPlusPlus/Advanced";
import Tools from "@/Navigation/IndividualNav/Granularized/Languages/CFamily/CPlusPlus/Tools";
import Testing from "@/Navigation/IndividualNav/Granularized/Languages/CFamily/CPlusPlus/Testing";

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