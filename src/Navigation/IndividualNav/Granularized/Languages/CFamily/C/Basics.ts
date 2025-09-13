import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

import Fundamentals from '@/Navigation/IndividualNav/Granularized/Languages/CFamily/C/Basics/Fundamentals';
import DataHandling from '@/Navigation/IndividualNav/Granularized/Languages/CFamily/C/Basics/DataHandling';
import ProgramFlow from '@/Navigation/IndividualNav/Granularized/Languages/CFamily/C/Basics/ProgramFlow';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    Fundamentals,
    DataHandling,
    ProgramFlow
  ]
};

export default Basics;