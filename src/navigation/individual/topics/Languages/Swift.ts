import type { Subpage } from '@/types/navigation';

import Basics from "@/navigation/individual/modularized/Languages/Swift/Basics";
import Advanced from "@/navigation/individual/modularized/Languages/Swift/Advanced";

const Swift: Subpage = {
  name: "Swift",
  subpages: [
    Basics, 
    Advanced,
  ],
};

export default Swift;