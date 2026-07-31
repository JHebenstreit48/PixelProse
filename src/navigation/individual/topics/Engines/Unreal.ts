import type { Subpage } from '@/types/navigation';

import Basics from "@/navigation/individual/modularized/Engines/Unreal/Basics";
import Advanced from "@/navigation/individual/modularized/Engines/Unreal/Advanced";
import Tools from "@/navigation/individual/modularized/Engines/Unreal/Tools";
import Testing from "@/navigation/individual/modularized/Engines/Unreal/Testing";

const Unreal: Subpage = {
  name: "Unreal",
  subpages: [
    Basics,
    Advanced,
    Tools,
    Testing
  ],
};

export default Unreal;