import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

import Unity from '@/Navigation/IndividualNav/FullTopics/Engines/Unity';
import Unreal from '@/Navigation/IndividualNav/FullTopics/Engines/Unreal';
import Godot from '@/Navigation/IndividualNav/FullTopics/Engines/Godot';
import Cry from '@/Navigation/IndividualNav/FullTopics/Engines/Cry';
import Specialized from '@/Navigation/IndividualNav/FullTopics/Engines/Specialized';

const engines: Subpage = {
  name: "Engines",
  subpages: [
    Unity,
    Unreal,
    Godot,
    Cry,
    Specialized
  ],
};

export default engines;