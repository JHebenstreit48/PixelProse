import { RouteObject } from "react-router-dom";

import CoreLibraries from "@/routes/individual/modularized/Languages/CFamily/C/Tools/CoreLibraries";
import DevelopmentUtilities from "@/routes/individual/modularized/Languages/CFamily/C/Tools/DevelopmentUtilities";

const Tools: RouteObject[] = [
    ...CoreLibraries,
    ...DevelopmentUtilities,
];

export default Tools;