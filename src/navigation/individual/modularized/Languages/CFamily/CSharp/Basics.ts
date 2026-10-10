import type { Subpage } from '@/types/navigation';

import Fundamentals from '@/navigation/individual/modularized/Languages/CFamily/CSharp/Basics/Fundamentals';
import CoreConcepts from '@/navigation/individual/modularized/Languages/CFamily/CSharp/Basics/CoreConcepts';
import ControlFlow from '@/navigation/individual/modularized/Languages/CFamily/CSharp/Basics/ControlFlow';
import Loops from '@/navigation/individual/modularized/Languages/CFamily/CSharp/Basics/Loops';

const Basics: Subpage = {
  name: 'Basics',
  subpages: [
    Fundamentals,
    CoreConcepts,
    ControlFlow,
    Loops
  ],
};

export default Basics;