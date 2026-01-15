import type { Subpage } from '@/types/navigation';

import Basics from "@/Navigation/Individual/Granularized/Languages/CFamily/C/Basics";
import Advanced from "@/Navigation/Individual/Granularized/Languages/CFamily/C/Advanced";
import Testing from "@/Navigation/Individual/Granularized/Languages/CFamily/C/Testing";
import Tools from "@/Navigation/Individual/Granularized/Languages/CFamily/C/Tools";

const C: Subpage = {
  name: "C",
  subpages: [
    Basics,
    Advanced,
    Testing,
    Tools
  ],
};

export default C;