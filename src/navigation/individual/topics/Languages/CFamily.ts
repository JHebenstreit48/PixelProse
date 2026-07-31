import type { Subpage } from '@/types/navigation';

import C from "@/navigation/individual/topics/Languages/CFamily/C";
import CPlusPlus from "@/navigation/individual/topics/Languages/CFamily/CPlusPlus";
import CSharp from "@/navigation/individual/topics/Languages/CFamily/CSharp";

const CFamily: Subpage = {
    name: "C Family",
    subpages: [
        C,
        CPlusPlus,
        CSharp
    ]
};

export default CFamily;