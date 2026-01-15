import type { Subpage } from '@/types/navigation';

import Basics from "@/Navigation/Individual/Granularized/Engines/Unity/Basics";
import Advanced from "@/Navigation/Individual/Granularized/Engines/Unity/Advanced";
import Tools from "@/Navigation/Individual/Granularized/Engines/Unity/Tools";
import Testing from "@/Navigation/Individual/Granularized/Engines/Unity/Testing";

const Unity: Subpage = {
  name: "Unity",
  subpages: [
    Basics,
    Advanced,
    Tools,
    Testing
  ],
};

export default Unity;