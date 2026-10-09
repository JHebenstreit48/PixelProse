import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/Engines/SpecializedEngines/GameMaker/Basics';
import Advanced from '@/navigation/individual/modularized/Engines/SpecializedEngines/GameMaker/Advanced';

const GameMaker: Subpage = {
    name: "Game Maker",
    subpages: [
        Basics,
        Advanced
    ]
};

export default GameMaker;