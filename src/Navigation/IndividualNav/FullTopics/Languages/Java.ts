import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

import Basics from '@/Navigation/IndividualNav/Granularized/Languages/Java/Basics';
import Advanced from '@/Navigation/IndividualNav/Granularized/Languages/Java/Advanced';

const Java: Subpage = {
  name: "Java",
  subpages: [
    Basics,
    Advanced
],
};

export default Java;