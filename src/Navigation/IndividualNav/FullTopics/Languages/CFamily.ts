import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

// ------------------ C Navigation Start ---------------------
import Basics from "@/Navigation/IndividualNav/Granularized/Languages/CFamily/C/Basics";
import Advanced from "@/Navigation/IndividualNav/Granularized/Languages/CFamily/C/Advanced";
import Testing from "@/Navigation/IndividualNav/Granularized/Languages/CFamily/C/Testing";
import Tools from "@/Navigation/IndividualNav/Granularized/Languages/CFamily/C/Tools";
// ------------------ C Navigation End -----------------------

const CFamily: Subpage = {
  name: "C Family",
  subpages: [
    {
      name: "C",
      subpages: [
        Basics,
        Advanced,
        Testing,
        Tools,
      ],
    },
  ],
};

export default CFamily;