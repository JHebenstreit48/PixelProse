import { Page } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

// ====================== Unity Navigation Start =========================
import UnityBasicsNavigation from "@/Navigation/IndividualNav/EnginesNavigation/UnityNav/Basics";
import UnityGraphicsNavigation from "@/Navigation/IndividualNav/EnginesNavigation/UnityNav/Graphics";
import UnityPhysicsNavigation from "@/Navigation/IndividualNav/EnginesNavigation/UnityNav/Physics";
import UnityAINavigation from "@/Navigation/IndividualNav/EnginesNavigation/UnityNav/AI";
import UnityNetworkingNavigation from "@/Navigation/IndividualNav/EnginesNavigation/UnityNav/Networking";
import UnityAudioNavigation from "@/Navigation/IndividualNav/EnginesNavigation/UnityNav/Audio";
import UnityUINavigation from "@/Navigation/IndividualNav/EnginesNavigation/UnityNav/UI";
import UnityToolsNavigation from "@/Navigation/IndividualNav/EnginesNavigation/UnityNav/Tools";
// ====================== Unity Navigation End ===========================


const enginesNav: Page = {
  name: "Engines",
  subpages: [
    {
      name: "Unity",
      subpages: [
        UnityBasicsNavigation,
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
