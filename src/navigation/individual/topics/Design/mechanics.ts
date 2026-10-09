import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/Design/Mechanics/Basics';
import Advanced from '@/navigation/individual/modularized/Design/Mechanics/Advanced';

const mechanics: Subpage = {
    name: "Mechanics",
    subpages: [
        Basics,
        Advanced
    ]
};

export default mechanics;