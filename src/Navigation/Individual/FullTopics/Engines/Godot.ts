import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

import Basics from "@/Navigation/Individual/Granularized/Engines/Godot/Basics";
import Advanced from "@/Navigation/Individual/Granularized/Engines/Godot/Advanced";
import Tools from "@/Navigation/Individual/Granularized/Engines/Godot/Tools";

const Godot: Subpage = {
  name: "Godot",
  subpages: [
    Basics,
    Advanced,
    Tools,
  ],
};

export default Godot;