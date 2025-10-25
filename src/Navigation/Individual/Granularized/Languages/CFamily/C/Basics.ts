import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

import Fundamentals from '@/Navigation/Individual/Granularized/Languages/CFamily/C/Basics/Fundamentals';
import DataHandling from '@/Navigation/Individual/Granularized/Languages/CFamily/C/Basics/DataHandling';
import ProgramFlow from '@/Navigation/Individual/Granularized/Languages/CFamily/C/Basics/ProgramFlow';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    Fundamentals,
    DataHandling,
    ProgramFlow
  ]
};

export default Basics;