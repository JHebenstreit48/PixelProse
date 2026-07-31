import type { Subpage } from '@/types/navigation';

import Fundamentals from '@/navigation/individual/modularized/Languages/CFamily/C/Basics/Fundamentals';
import DataHandling from '@/navigation/individual/modularized/Languages/CFamily/C/Basics/DataHandling';
import ProgramFlow from '@/navigation/individual/modularized/Languages/CFamily/C/Basics/ProgramFlow';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    Fundamentals,
    DataHandling,
    ProgramFlow
  ]
};

export default Basics;