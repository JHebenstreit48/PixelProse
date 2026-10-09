import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/Design/Levels/Basics';
import Advanced from '@/navigation/individual/modularized/Design/Levels/Advanced';

const levels: Subpage = {
    name: "Levels",
    subpages: [
        Basics,
        Advanced
    ]
};

export default levels;