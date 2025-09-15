import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

import Basics from '@/Navigation/IndividualNav/Granularized/Languages/JavaScript/Basics';
import Advanced from '@/Navigation/IndividualNav/Granularized/Languages/JavaScript/Advanced';

const JavaScript: Subpage = {
  name: "JavaScript",
  subpages: [
    Basics,
    Advanced
  ],
};

export default JavaScript;