import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

import Basics from "@/Navigation/IndividualNav/Granularized/Engines/Unity/Basics";
import Advanced from "@/Navigation/IndividualNav/Granularized/Engines/Unity/Advanced";
import Tools from "@/Navigation/IndividualNav/Granularized/Engines/Unity/Tools";
import Testing from "@/Navigation/IndividualNav/Granularized/Engines/Unity/Testing";

const Unity: Subpage = {
  name: "Unity",
  subpages: [
    Basics,
    Advanced,
    Tools,
    Testing
  ],
};

export default Unity;