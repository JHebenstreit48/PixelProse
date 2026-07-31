import type { Subpage } from '@/types/navigation';

import Basics from "@/navigation/individual/modularized/Languages/Kotlin/Basics";
import Advanced from "@/navigation/individual/modularized/Languages/Kotlin/Advanced";
import Tools from "@/navigation/individual/modularized/Languages/Kotlin/Tools";

const Kotlin: Subpage = {
  name: "Kotlin",
  subpages: [
    Basics,
    Advanced,
    Tools
  ]
};

export default Kotlin;