import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/Languages/JavaScript/Basics';
import Advanced from '@/navigation/individual/modularized/Languages/JavaScript/Advanced';

const JavaScript: Subpage = {
  name: "JavaScript",
  subpages: [
    Basics,
    Advanced
  ],
};

export default JavaScript;