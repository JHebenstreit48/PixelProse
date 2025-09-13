import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

import Basics from "@/Navigation/IndividualNav/Granularized/Languages/CFamily/CSharp/Basics";
import Advanced from "@/Navigation/IndividualNav/Granularized/Languages/CFamily/CSharp/Advanced";
import Tools from "@/Navigation/IndividualNav/Granularized/Languages/CFamily/CSharp/Tools";
import Testing from "@/Navigation/IndividualNav/Granularized/Languages/CFamily/CSharp/Testing";

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