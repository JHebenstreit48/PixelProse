import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/Graphics/PhysicallyBasedRendering/Basics';
import Advanced from '@/navigation/individual/modularized/Graphics/PhysicallyBasedRendering/Advanced';

const PhysicallyBasedRendering: Subpage = {
    name: 'Physically Based Rendering',
    subpages: [
        Basics,
        Advanced
    ]
};

export default PhysicallyBasedRendering;