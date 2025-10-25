import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

import Basics from "@/Navigation/Individual/Granularized/Languages/CFamily/CSharp/Basics";
import Advanced from "@/Navigation/Individual/Granularized/Languages/CFamily/CSharp/Advanced";
import Tools from "@/Navigation/Individual/Granularized/Languages/CFamily/CSharp/Tools";
import Testing from "@/Navigation/Individual/Granularized/Languages/CFamily/CSharp/Testing";

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