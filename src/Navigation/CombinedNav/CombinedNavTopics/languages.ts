import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

// =============== C Family Navigation Start =================



// ------------------ C++ Navigation Start -------------------
import CPlusPlusBasics from "@/Navigation/IndividualNav/Granularized/Languages/CFamily/CPlusPlus/Basics";
import CPlusPlusAdvancedNavigation from "@/Navigation/IndividualNav/Granularized/Languages/CFamily/CPlusPlus/Advanced";
import CPlusPlusTestingNavigation from "@/Navigation/IndividualNav/Granularized/Languages/CFamily/CPlusPlus/Testing";
import CPlusPlusToolsNavigation from "@/Navigation/IndividualNav/Granularized/Languages/CFamily/CPlusPlus/Tools";
// ------------------- C++ Navigation End ---------------------

// ------------------ C# Navigation Start --------------------
import CSharpBasicsNavigation from "@/Navigation/IndividualNav/Granularized/Languages/CFamily/CSharp/Basics";
import CSharpAdvancedNavigation from "@/Navigation/IndividualNav/Granularized/Languages/CFamily/CSharp/Advanced";
import CSharpTestingNavigation from "@/Navigation/IndividualNav/Granularized/Languages/CFamily/CSharp/Testing";
import CSharpToolsNavigation from "@/Navigation/IndividualNav/Granularized/Languages/CFamily/CSharp/Tools";
// ------------------- C# Navigation End ---------------------

// =============== C Family Navigation End ==================

// ================ Java Navigation Start ===================

// ================ Java Navigation End =====================

// ================ Lua Navigation Start ====================
import LuaBasicsNavigation from "@/Navigation/IndividualNav/Granularized/Languages/Lua/Basics";
import LuaAdvancedNavigation from "@/Navigation/IndividualNav/Granularized/Languages/Lua/Advanced";
import LuaTestingNavigation from "@/Navigation/IndividualNav/Granularized/Languages/Lua/Testing";
import LuaToolsNavigation from "@/Navigation/IndividualNav/Granularized/Languages/Lua/Tools";
import LuaGameDevNavigation from "@/Navigation/IndividualNav/Granularized/Languages/Lua/GameDev";
// ================= Lua Navigation End =====================



const languages: Subpage = {
  name: "Languages",
  subpages: [
    {
      name: "C Family",
      subpages: [
        // {
        //   name: "C",
        //   subpages: [
        //     Basics,
        //     Advanced,
        //     Testing,
        //     Tools,
        //   ],
        // },
        {
          name: "C++",
          subpages: [
            CPlusPlusBasics,
            CPlusPlusAdvancedNavigation,
            CPlusPlusTestingNavigation,
            CPlusPlusToolsNavigation,
          ],
        },
        {
          name: "C#",
          subpages: [
            CSharpBasicsNavigation,
            CSharpAdvancedNavigation,
            CSharpTestingNavigation,
            CSharpToolsNavigation,
          ],
        },
      ],
    },
    // KotlinNavigation,
    {
      name: "Lua",
      subpages: [
        LuaBasicsNavigation,
        LuaAdvancedNavigation,
        LuaTestingNavigation,
        LuaToolsNavigation,
        LuaGameDevNavigation,
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