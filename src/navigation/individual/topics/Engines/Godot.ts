import type { Subpage } from '@/types/navigation';

import Basics from "@/navigation/individual/modularized/Engines/Godot/Basics";
import Advanced from "@/navigation/individual/modularized/Engines/Godot/Advanced";
import Tools from "@/navigation/individual/modularized/Engines/Godot/Tools";

const Godot: Subpage = {
  name: "Godot",
  subpages: [
    Basics,
    Advanced,
    Tools,
  ],
};

export default Godot;