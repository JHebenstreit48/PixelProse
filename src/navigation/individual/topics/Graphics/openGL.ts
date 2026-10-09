import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/Graphics/OpenGL/Basics';
import Advanced from '@/navigation/individual/modularized/Graphics/OpenGL/Advanced';

const OpenGL: Subpage = {
    name: 'OpenGL',
    subpages: [
        Basics,
        Advanced
    ]
};

export default OpenGL;