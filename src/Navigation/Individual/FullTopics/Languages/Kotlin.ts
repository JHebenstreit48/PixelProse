import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

import Basics from "@/Navigation/Individual/Granularized/Languages/Kotlin/Basics";
import Advanced from "@/Navigation/Individual/Granularized/Languages/Kotlin/Advanced";
import Tools from "@/Navigation/Individual/Granularized/Languages/Kotlin/Tools";

const Kotlin: Subpage = {
  name: "Kotlin",
  subpages: [
    Basics,
    Advanced,
    Tools
  ]
};

export default Kotlin;