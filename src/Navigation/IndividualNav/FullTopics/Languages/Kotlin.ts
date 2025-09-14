import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

import Basics from "@/Navigation/IndividualNav/Granularized/Languages/Kotlin/Basics";
import Advanced from "@/Navigation/IndividualNav/Granularized/Languages/Kotlin/Advanced";
import Tools from "@/Navigation/IndividualNav/Granularized/Languages/Kotlin/Tools";

const Kotlin: Subpage = {
  name: "Kotlin",
  subpages: [
    Basics,
    Advanced,
    Tools
  ]
};

export default Kotlin;