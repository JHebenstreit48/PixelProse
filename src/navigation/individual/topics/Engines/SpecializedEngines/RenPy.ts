import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/Engines/SpecializedEngines/RenPy/Basics';
import Advanced from '@/navigation/individual/modularized/Engines/SpecializedEngines/RenPy/Advanced';

const RenPy: Subpage = {
    name: "Ren'Py",
    subpages: [
        Basics,
        Advanced
    ]
};

export default RenPy;