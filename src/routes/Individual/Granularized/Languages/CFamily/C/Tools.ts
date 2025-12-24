import { RouteObject } from "react-router-dom";

import CoreLibraries from "@/routes/Individual/Granularized/Languages/CFamily/C/Tools/CoreLibraries";
import DevelopmentUtilities from "@/routes/Individual/Granularized/Languages/CFamily/C/Tools/DevelopmentUtilities";

const Tools: RouteObject[] = [
    ...CoreLibraries,
    ...DevelopmentUtilities,
];

export default Tools;