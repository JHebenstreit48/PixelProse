import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/Engines/SpecializedEngines/RPGMaker/Basics';
import Advanced from '@/navigation/individual/modularized/Engines/SpecializedEngines/RPGMaker/Advanced';

const RPGMaker: Subpage = {
    name: "RPG Maker",
    subpages: [
        Basics,
        Advanced
    ]
};

export default RPGMaker;