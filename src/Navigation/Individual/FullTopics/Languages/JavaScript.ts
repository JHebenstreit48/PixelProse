import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

import Basics from '@/Navigation/Individual/Granularized/Languages/JavaScript/Basics';
import Advanced from '@/Navigation/Individual/Granularized/Languages/JavaScript/Advanced';

const JavaScript: Subpage = {
  name: "JavaScript",
  subpages: [
    Basics,
    Advanced
  ],
};

export default JavaScript;