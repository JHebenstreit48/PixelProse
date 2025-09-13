import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

import C from "@/Navigation/IndividualNav/FullTopics/Languages/CFamily/C";
import CPlusPlus from "@/Navigation/IndividualNav/FullTopics/Languages/CFamily/CPlusPlus";
import CSharp from "@/Navigation/IndividualNav/FullTopics/Languages/CFamily/CSharp";

const CFamily: Subpage = {
    name: "C Family",
    subpages: [
        C,
        CPlusPlus,
        CSharp
    ]
};

export default CFamily;