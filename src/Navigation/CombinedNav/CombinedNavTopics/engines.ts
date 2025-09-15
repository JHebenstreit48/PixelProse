import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

import Unity from '@/Navigation/IndividualNav/FullTopics/Engines/Unity'
import Unreal from '@/Navigation/IndividualNav/FullTopics/Engines/Unreal'

const engines: Subpage = {
  name: "Engines",
  subpages: [
    Unity,
    Unreal,

  ],
};

export default engines;