import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/Design/Narrative/Basics';
import Advanced from '@/navigation/individual/modularized/Design/Narrative/Advanced';

const narrative: Subpage = {
    name: "Narrative",
    subpages: [
        Basics,
        Advanced
    ]
};

export default narrative;