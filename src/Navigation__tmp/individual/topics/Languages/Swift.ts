import type { Subpage } from '@/types/navigation';

import Basics from "@/Navigation/Individual/Granularized/Languages/Swift/Basics";
import Advanced from "@/Navigation/Individual/Granularized/Languages/Swift/Advanced";

const Swift: Subpage = {
  name: "Swift",
  subpages: [
    Basics, 
    Advanced,
  ],
};

export default Swift;