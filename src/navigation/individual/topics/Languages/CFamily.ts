import type { Subpage } from '@/types/navigation';

import C from "@/Navigation/Individual/FullTopics/Languages/CFamily/C";
import CPlusPlus from "@/Navigation/Individual/FullTopics/Languages/CFamily/CPlusPlus";
import CSharp from "@/Navigation/Individual/FullTopics/Languages/CFamily/CSharp";

const CFamily: Subpage = {
    name: "C Family",
    subpages: [
        C,
        CPlusPlus,
        CSharp
    ]
};

export default CFamily;