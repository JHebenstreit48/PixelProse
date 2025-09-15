import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

import Basics from "@/Navigation/IndividualNav/Granularized/Engines/Cry/Basics";
import Advanced from "@/Navigation/IndividualNav/Granularized/Engines/Cry/Advanced";
import Tools from "@/Navigation/IndividualNav/Granularized/Engines/Cry/Tools";

const Cry: Subpage = {
  name: "Cry",
  subpages: [
    Basics,
    Advanced,
    Tools,
  ],
};

export default Cry;