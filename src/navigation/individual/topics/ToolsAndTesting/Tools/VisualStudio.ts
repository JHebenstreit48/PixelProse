import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/ToolsAndTesting/Tools/VisualStudio/Basics';
import Advanced from '@/navigation/individual/modularized/ToolsAndTesting/Tools/VisualStudio/Advanced';

const VisualStudio: Subpage = {
  name: 'Visual Studio',
  subpages: [
    Basics,
    Advanced
  ],
};

export default VisualStudio;