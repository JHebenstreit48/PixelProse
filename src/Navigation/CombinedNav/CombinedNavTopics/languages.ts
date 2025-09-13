import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

import CFamily from '@/Navigation/IndividualNav/FullTopics/Languages/CFamily';

// ================ Java Navigation Start ===================

// ================ Java Navigation End =====================

// ================ Lua Navigation Start ====================
import Basics from "@/Navigation/IndividualNav/Granularized/Languages/Lua/Basics";
import Advanced from "@/Navigation/IndividualNav/Granularized/Languages/Lua/Advanced";
import Testing from "@/Navigation/IndividualNav/Granularized/Languages/Lua/Testing";
import Tools from "@/Navigation/IndividualNav/Granularized/Languages/Lua/Tools";
// ================= Lua Navigation End =====================



const languages: Subpage = {
  name: "Languages",
  subpages: [
    CFamily,
    // KotlinNavigation,
    {
      name: "Lua",
      subpages: [
        Basics,
        Advanced,
        Testing,
        Tools
      ],
    },
    //   PythonNavigation,
    //   JavaNavigation,
    //   JavaScriptNavigation,
    //   TypeScriptNavigation,
    //   SwiftNavigation,
    //   RustNavigation,
  ],
};

export default languages;