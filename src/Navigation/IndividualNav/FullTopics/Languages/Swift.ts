import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

import Basics from "@/Navigation/IndividualNav/Granularized/Languages/Swift/Basics";
import Advanced from "@/Navigation/IndividualNav/Granularized/Languages/Swift/Advanced";

const Swift: Subpage = {
  name: "Swift",
  subpages: [
    Basics, 
    Advanced,
  ],
};

export default Swift;