import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/Graphics/PostProcessing/Basics';
import Advanced from '@/navigation/individual/modularized/Graphics/PostProcessing/Advanced';

const PostProcessing: Subpage = {
    name: "Post Processing",
    subpages: [
        Basics,
        Advanced
    ]
};

export default PostProcessing;