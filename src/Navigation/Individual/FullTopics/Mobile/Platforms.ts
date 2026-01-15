import type { Subpage } from '@/types/navigation';

import Basics from '@/Navigation/Individual/Granularized/Mobile/Platforms/Basics';
import Advanced from '@/Navigation/Individual/Granularized/Mobile/Platforms/Advanced';

const Platforms: Subpage = {
  name: 'Platforms',
  subpages: [
    Basics,
    Advanced
  ]
};

export default Platforms;