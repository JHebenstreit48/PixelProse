import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/Graphics/GlobalIllumination/Basics';
import Advanced from '@/navigation/individual/modularized/Graphics/GlobalIllumination/Advanced';

const GlobalIllumination: Subpage = {
    name: 'Global Illumination',
    subpages: [
        Basics,
        Advanced
    ]
};

export default GlobalIllumination;