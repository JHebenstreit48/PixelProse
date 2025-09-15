import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

import Basics from "@/Navigation/IndividualNav/Granularized/Engines/Godot/Basics";
import Advanced from "@/Navigation/IndividualNav/Granularized/Engines/Godot/Advanced";
import Tools from "@/Navigation/IndividualNav/Granularized/Engines/Godot/Tools";

const Godot: Subpage = {
  name: "Godot",
  subpages: [
    Basics,
    Advanced,
    Tools,
  ],
};

export default Godot;