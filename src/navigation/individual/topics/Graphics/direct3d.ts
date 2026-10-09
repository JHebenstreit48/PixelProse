import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/Graphics/Direct3D/Basics';
import Advanced from '@/navigation/individual/modularized/Graphics/Direct3D/Advanced';

const Direct3D: Subpage = {
    name: 'Direct3D',
    subpages: [
        Basics,
        Advanced
    ]
};

export default Direct3D;