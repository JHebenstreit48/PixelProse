import type { Subpage } from '@/types/navigation';

import Mechanics from '@/navigation/individual/topics/Design/mechanics';
import Prototyping from '@/navigation/individual/topics/Design/prototyping';
import Levels from '@/navigation/individual/topics/Design/levels';
import Narrative from '@/navigation/individual/topics/Design/narrative';

const design: Subpage = {
  name: "Design",
  subpages: [
    Mechanics,
    Prototyping,
    Levels,
    Narrative
  ],
};

export default design;