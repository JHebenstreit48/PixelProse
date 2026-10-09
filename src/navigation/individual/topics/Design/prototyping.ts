import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/Design/Prototyping/Basics';
import Advanced from '@/navigation/individual/modularized/Design/Prototyping/Advanced';

const prototyping: Subpage = {
    name: "Prototyping",
    subpages: [
        Basics,
        Advanced
    ]
};

export default prototyping;