import type { Subpage } from '@/types/navigation';

import Basics from "@/navigation/individual/modularized/Languages/Python/Basics";
import Advanced from "@/navigation/individual/modularized/Languages/Python/Advanced";

const Python: Subpage = {
  name: "Python",
  subpages: [
    Basics, 
    Advanced,
  ],
};

export default Python;