import type { Subpage } from '@/types/navigation';

import Basics from "@/Navigation/Individual/Granularized/Engines/SpecializedEngines/Construct/Basics";
import Advanced from "@/Navigation/Individual/Granularized/Engines/SpecializedEngines/Construct/Advanced";
import Tools from "@/Navigation/Individual/Granularized/Engines/SpecializedEngines/Construct/Tools";

const Construct: Subpage = {
  name: "Construct",
  subpages: [
    Basics, 
    Advanced, 
    Tools
  ],
};

export default Construct;