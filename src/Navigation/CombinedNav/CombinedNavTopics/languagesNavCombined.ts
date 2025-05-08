import { Page } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

// =============== C Family Navigation Start =================

// ------------------ C Navigation Start ---------------------
import CBasicsNavigation from "@/Navigation/LanguagesNavigation/CFamily/C/Basics";
import CAdvancedNavigation from "@/Navigation/LanguagesNavigation/CFamily/C/Advanced";
import CTestingNavigation from "@/Navigation/LanguagesNavigation/CFamily/C/Testing";
import CToolsNavigation from "@/Navigation/LanguagesNavigation/CFamily/C/Tools";
// ------------------ C Navigation End -----------------------

// ------------------ C++ Navigation Start -------------------
import CPlusPlusBasicsNavigation from "@/Navigation/LanguagesNavigation/CFamily/CPlusPlus/Basics";
import CPlusPlusAdvancedNavigation from "@/Navigation/LanguagesNavigation/CFamily/CPlusPlus/Advanced";
import CPlusPlusTestingNavigation from "@/Navigation/LanguagesNavigation/CFamily/CPlusPlus/Testing";
import CPlusPlusToolsNavigation from "@/Navigation/LanguagesNavigation/CFamily/CPlusPlus/Tools";
// ------------------- C++ Navigation End ---------------------

// ------------------ C# Navigation Start --------------------
import CSharpBasicsNavigation from "@/Navigation/LanguagesNavigation/CFamily/CSharp/Basics";
import CSharpAdvancedNavigation from "@/Navigation/LanguagesNavigation/CFamily/CSharp/Advanced";
import CSharpTestingNavigation from "@/Navigation/LanguagesNavigation/CFamily/CSharp/Testing";
import CSharpToolsNavigation from "@/Navigation/LanguagesNavigation/CFamily/CSharp/Tools";
// ------------------- C# Navigation End ---------------------

// =============== C Family Navigation End ==================

// ================ Java Navigation Start ===================

// ================ Java Navigation End =====================

// ================ Lua Navigation Start ====================
import LuaBasicsNavigation from "@/Navigation/LanguagesNavigation/Lua/Basics";
import LuaAdvancedNavigation from "@/Navigation/LanguagesNavigation/Lua/Advanced";
import LuaTestingNavigation from "@/Navigation/LanguagesNavigation/Lua/Testing";
import LuaToolsNavigation from "@/Navigation/LanguagesNavigation/Lua/Tools";
import LuaGameDevNavigation from "@/Navigation/LanguagesNavigation/Lua/GameDev";
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
