import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

import Basics from "@/Navigation/IndividualNav/Granularized/Languages/CFamily/C/Basics";
import Advanced from "@/Navigation/IndividualNav/Granularized/Languages/CFamily/C/Advanced";
import Testing from "@/Navigation/IndividualNav/Granularized/Languages/CFamily/C/Testing";
import Tools from "@/Navigation/IndividualNav/Granularized/Languages/CFamily/C/Tools";

const C: Subpage = {
  name: "C",
  subpages: [
    Basics,
    Advanced,
    Testing,
    Tools
  ],
};

export default C;