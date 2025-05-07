import { Page } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

// =============== C Family Navigation Start =================

// ------------------ C Navigation Start ---------------------
import CBasicsNavigation from '@/Navigation/LanguagesNavigation/CFamily/C/Basics';
import CAdvancedNavigation from '@/Navigation/LanguagesNavigation/CFamily/C/Advanced';
import CTestingNavigation from '@/Navigation/LanguagesNavigation/CFamily/C/Testing';
import CToolsNavigation from '@/Navigation/LanguagesNavigation/CFamily/C/Tools';
// ------------------ C Navigation End -----------------------

// ------------------ C++ Navigation Start -------------------

// ------------------- C++ Navigation End ---------------------

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
                    CToolsNavigation
                ]
            }
        //   CPlusPlusNavigation,
        //   CSharpNavigation
        ],
      },
    //   LuaNavigation,
    //   PythonNavigation
    ],
};

export default languagesNav;