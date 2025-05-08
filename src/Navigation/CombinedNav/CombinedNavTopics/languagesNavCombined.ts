import { Page } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

// =============== C Family Navigation Start =================

// ------------------ C Navigation Start ---------------------
import CBasicsNavigation from "@/Navigation/IndividualNav/LanguagesNavigation/CFamily/C/Basics";
import CAdvancedNavigation from "@/Navigation/IndividualNav/LanguagesNavigation/CFamily/C/Advanced";
import CTestingNavigation from "@/Navigation/IndividualNav/LanguagesNavigation/CFamily/C/Testing";
import CToolsNavigation from "@/Navigation/IndividualNav/LanguagesNavigation/CFamily/C/Tools";
// ------------------ C Navigation End -----------------------

// ------------------ C++ Navigation Start -------------------
import CPlusPlusBasicsNavigation from "@/Navigation/IndividualNav/LanguagesNavigation/CFamily/CPlusPlus/Basics";
import CPlusPlusAdvancedNavigation from "@/Navigation/IndividualNav/LanguagesNavigation/CFamily/CPlusPlus/Advanced";
import CPlusPlusTestingNavigation from "@/Navigation/IndividualNav/LanguagesNavigation/CFamily/CPlusPlus/Testing";
import CPlusPlusToolsNavigation from "@/Navigation/IndividualNav/LanguagesNavigation/CFamily/CPlusPlus/Tools";
// ------------------- C++ Navigation End ---------------------

// ------------------ C# Navigation Start --------------------
import CSharpBasicsNavigation from "@/Navigation/IndividualNav/LanguagesNavigation/CFamily/CSharp/Basics";
import CSharpAdvancedNavigation from "@/Navigation/IndividualNav/LanguagesNavigation/CFamily/CSharp/Advanced";
import CSharpTestingNavigation from "@/Navigation/IndividualNav/LanguagesNavigation/CFamily/CSharp/Testing";
import CSharpToolsNavigation from "@/Navigation/IndividualNav/LanguagesNavigation/CFamily/CSharp/Tools";
// ------------------- C# Navigation End ---------------------

// =============== C Family Navigation End ==================

// ================ Java Navigation Start ===================

// ================ Java Navigation End =====================

// ================ Lua Navigation Start ====================
import LuaBasicsNavigation from "@/Navigation/IndividualNav/LanguagesNavigation/Lua/Basics";
import LuaAdvancedNavigation from "@/Navigation/IndividualNav/LanguagesNavigation/Lua/Advanced";
import LuaTestingNavigation from "@/Navigation/IndividualNav/LanguagesNavigation/Lua/Testing";
import LuaToolsNavigation from "@/Navigation/IndividualNav/LanguagesNavigation/Lua/Tools";
import LuaGameDevNavigation from "@/Navigation/IndividualNav/LanguagesNavigation/Lua/GameDev";
// ================= Lua Navigation End =====================



const languagesNav: Page = {
  name: "Game Languages",
  subpages: [
    {
      name: "C Family",
      subpages: [
        {
          name: "C",
          subpages: [
            CBasicsNavigation,
            CAdvancedNavigation,
            CTestingNavigation,
            CToolsNavigation,
          ],
        },
        {
          name: "C++",
          subpages: [
            CPlusPlusBasicsNavigation,
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

export default languagesNav;
