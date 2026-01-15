import type { Subpage } from '@/types/navigation';

import Basics from "@/Navigation/Individual/Granularized/Engines/Unreal/Basics";
import Advanced from "@/Navigation/Individual/Granularized/Engines/Unreal/Advanced";
import Tools from "@/Navigation/Individual/Granularized/Engines/Unreal/Tools";
import Testing from "@/Navigation/Individual/Granularized/Engines/Unreal/Testing";

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