import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/Graphics/RayTracing/Basics';
import Advanced from '@/navigation/individual/modularized/Graphics/RayTracing/Advanced';

const RayTracing: Subpage = {
    name: 'Ray Tracing',
    subpages: [
        Basics,
        Advanced
    ]
};

export default RayTracing;