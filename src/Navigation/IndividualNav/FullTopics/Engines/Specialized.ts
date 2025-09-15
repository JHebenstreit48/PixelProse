import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

import Construct from "@/Navigation/IndividualNav/FullTopics/Engines/SpecializedEngines/Construct";
import GameMaker from "@/Navigation/IndividualNav/FullTopics/Engines/SpecializedEngines/GameMaker";
import RenPy from "@/Navigation/IndividualNav/FullTopics/Engines/SpecializedEngines/RenPy";
import RPGMaker from "@/Navigation/IndividualNav/FullTopics/Engines/SpecializedEngines/RPGMaker";
// Planned additions (uncomment when files exist):
// import GDevelop from "@/Navigation/IndividualNav/FullTopics/Engines/SpecializedEngines/GDevelop";
// import Twine from "@/Navigation/IndividualNav/FullTopics/Engines/SpecializedEngines/Twine";
// import GBStudio from "@/Navigation/IndividualNav/FullTopics/Engines/SpecializedEngines/GBStudio";
// import AdventureGameStudio from "@/Navigation/IndividualNav/FullTopics/Engines/SpecializedEngines/AdventureGameStudio";
// import ClickteamFusion from "@/Navigation/IndividualNav/FullTopics/Engines/SpecializedEngines/ClickteamFusion";
// import TyranoBuilder from "@/Navigation/IndividualNav/FullTopics/Engines/SpecializedEngines/TyranoBuilder";
// import RPGInABox from "@/Navigation/IndividualNav/FullTopics/Engines/SpecializedEngines/RPGInABox";

const Specialized: Subpage = {
  name: "Specialized",
  subpages: [
    Construct,
    GameMaker,
    RenPy,
    RPGMaker,
    // GDevelop,
    // Twine,
    // GBStudio,
    // AdventureGameStudio,
    // ClickteamFusion,
    // TyranoBuilder,
    // RPGInABox
  ]
};

export default Specialized;
