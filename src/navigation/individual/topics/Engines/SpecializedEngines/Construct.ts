import type { Subpage } from '@/types/navigation';

import Basics from "@/navigation/individual/modularized/Engines/SpecializedEngines/Construct/Basics";
import Advanced from "@/navigation/individual/modularized/Engines/SpecializedEngines/Construct/Advanced";
import Tools from "@/navigation/individual/modularized/Engines/SpecializedEngines/Construct/Tools";

const Construct: Subpage = {
  name: "Construct",
  subpages: [
    Basics, 
    Advanced, 
    Tools
  ],
};

export default Construct;