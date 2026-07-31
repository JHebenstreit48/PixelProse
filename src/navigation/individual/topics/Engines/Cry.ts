import type { Subpage } from '@/types/navigation';

import Basics from "@/navigation/individual/modularized/Engines/Cry/Basics";
import Advanced from "@/navigation/individual/modularized/Engines/Cry/Advanced";
import Tools from "@/navigation/individual/modularized/Engines/Cry/Tools";

const Cry: Subpage = {
  name: "Cry",
  subpages: [
    Basics,
    Advanced,
    Tools,
  ],
};

export default Cry;