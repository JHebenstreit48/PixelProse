import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

import Basics from "@/Navigation/Individual/Granularized/Engines/Cry/Basics";
import Advanced from "@/Navigation/Individual/Granularized/Engines/Cry/Advanced";
import Tools from "@/Navigation/Individual/Granularized/Engines/Cry/Tools";

const Cry: Subpage = {
  name: "Cry",
  subpages: [
    Basics,
    Advanced,
    Tools,
  ],
};

export default Cry;