import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

import Basics from "@/Navigation/IndividualNav/Granularized/Engines/Unreal/Basics";
import Advanced from "@/Navigation/IndividualNav/Granularized/Engines/Unreal/Advanced";
import Tools from "@/Navigation/IndividualNav/Granularized/Engines/Unreal/Tools";
import Testing from "@/Navigation/IndividualNav/Granularized/Engines/Unreal/Testing";

const Unreal: Subpage = {
  name: "Unreal",
  subpages: [
    Basics,
    Advanced,
    Tools,
    Testing
  ],
};

export default Unreal;