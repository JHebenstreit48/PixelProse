import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

import Basics from "@/Navigation/IndividualNav/Granularized/Engines/SpecializedEngines/Construct/Basics";
import Advanced from "@/Navigation/IndividualNav/Granularized/Engines/SpecializedEngines/Construct/Advanced";
import Tools from "@/Navigation/IndividualNav/Granularized/Engines/SpecializedEngines/Construct/Tools";

const Construct: Subpage = {
  name: "Construct",
  subpages: [
    Basics, 
    Advanced, 
    Tools
  ],
};

export default Construct;