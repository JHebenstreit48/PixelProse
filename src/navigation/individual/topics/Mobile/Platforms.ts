import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/Mobile/Platforms/Basics';
import Advanced from '@/navigation/individual/modularized/Mobile/Platforms/Advanced';

const Platforms: Subpage = {
  name: 'Platforms',
  subpages: [
    Basics,
    Advanced
  ]
};

export default Platforms;