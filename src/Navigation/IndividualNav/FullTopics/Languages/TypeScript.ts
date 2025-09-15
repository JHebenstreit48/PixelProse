import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

import Basics from '@/Navigation/IndividualNav/Granularized/Languages/TypeScript/Basics';
import Advanced from '@/Navigation/IndividualNav/Granularized/Languages/TypeScript/Advanced';

const TypeScript: Subpage = {
  name: "TypeScript",
  subpages: [
    Basics,
    Advanced
  ],
};

export default TypeScript;