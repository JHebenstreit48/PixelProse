import type { Subpage } from '@/types/navigation';

import Basics from "@/navigation/individual/modularized/Languages/CFamily/C/Basics";
import Advanced from "@/navigation/individual/modularized/Languages/CFamily/C/Advanced";
import Testing from "@/navigation/individual/modularized/Languages/CFamily/C/Testing";
import Tools from "@/navigation/individual/modularized/Languages/CFamily/C/Tools";

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