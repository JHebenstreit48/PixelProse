import type { Subpage } from '@/types/navigation';

import Basics from "@/navigation/individual/modularized/Engines/Unity/Basics";
import Advanced from "@/navigation/individual/modularized/Engines/Unity/Advanced";
import Tools from "@/navigation/individual/modularized/Engines/Unity/Tools";
import Testing from "@/navigation/individual/modularized/Engines/Unity/Testing";

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