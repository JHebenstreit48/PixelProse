import type { Subpage } from '@/types/navigation';

import Fundamentals from '@/navigation/individual/modularized/Languages/Java/Basics/Fundamentals';
import OOP from '@/navigation/individual/modularized/Languages/Java/Basics/OOP';
import Collections from '@/navigation/individual/modularized/Languages/Java/Basics/Collections';
import Exceptions from '@/navigation/individual/modularized/Languages/Java/Basics/Exceptions';
import Concurrency from '@/navigation/individual/modularized/Languages/Java/Basics/Concurrency';
import IO from '@/navigation/individual/modularized/Languages/Java/Basics/IO';

const Basics: Subpage = {
  name: 'Basics',
  subpages: [
    Fundamentals,
    OOP,
    Collections,
    Exceptions,
    Concurrency,
    IO
  ],
};

export default Basics;