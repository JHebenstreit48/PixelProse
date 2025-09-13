import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

// ====================== Unity Navigation Start =========================
import Basics from "@/Navigation/IndividualNav/Granularized/Engines/Unity/Basics";
import UnityGraphicsNavigation from "@/Navigation/IndividualNav/Granularized/Engines/Unity/Graphics";
import UnityPhysicsNavigation from "@/Navigation/IndividualNav/Granularized/Engines/Unity/Physics";
import UnityAINavigation from "@/Navigation/IndividualNav/Granularized/Engines/Unity/AI";
import UnityNetworkingNavigation from "@/Navigation/IndividualNav/Granularized/Engines/Unity/Networking";
import UnityAudioNavigation from "@/Navigation/IndividualNav/Granularized/Engines/Unity/Audio";
import UnityUINavigation from "@/Navigation/IndividualNav/Granularized/Engines/Unity/UI";
import UnityToolsNavigation from "@/Navigation/IndividualNav/Granularized/Engines/Unity/Tools";
// ====================== Unity Navigation End ===========================


const enginesNav: Subpage = {
  name: "Engines",
  subpages: [
    {
      name: "Unity",
      subpages: [
        Basics,
        UnityGraphicsNavigation,
        UnityPhysicsNavigation,
        UnityAINavigation,
        UnityNetworkingNavigation,
        UnityAudioNavigation,
        UnityUINavigation,
        UnityToolsNavigation,
      ],
    },
  ],
};

export default enginesNav;
