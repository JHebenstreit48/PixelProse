import type { Subpage } from '@/types/navigation';

import Construct from "@/navigation/individual/topics/Engines/SpecializedEngines/Construct";
// import GDevelop from "@/navigation/individual/topics/Engines/SpecializedEngines/GDevelop";
// import ClickteamFusion from "@/navigation/individual/topics/Engines/SpecializedEngines/ClickteamFusion";
// import GBStudio from "@/navigation/individual/topics/Engines/SpecializedEngines/GBStudio";
import RPGMaker from "@/navigation/individual/topics/Engines/SpecializedEngines/RPGMaker";
// import RPGInABox from "@/navigation/individual/topics/Engines/SpecializedEngines/RPGInABox";
// import TyranoBuilder from "@/navigation/individual/topics/Engines/SpecializedEngines/TyranoBuilder";
import RenPy from "@/navigation/individual/topics/Engines/SpecializedEngines/RenPy";
// import AdventureGameStudio from "@/navigation/individual/topics/Engines/SpecializedEngines/AdventureGameStudio";
import GameMaker from "@/navigation/individual/topics/Engines/SpecializedEngines/GameMaker";

const Specialized: Subpage = {
  name: "Specialized",
  subpages: [
    Construct,
    // GDevelop,
    // ClickteamFusion,
    // GBStudio,
    RPGMaker,
    // RPGInABox,
    // TyranoBuilder,
    RenPy,
    // AdventureGameStudio,
    GameMaker,
  ]
};

export default Specialized;