import { RouteObject } from "react-router-dom";

import FrameworksAndTools from "@/routes/individual/modularized/Languages/CFamily/C/Testing/FrameworksAndTools";
import TestPractices from "@/routes/individual/modularized/Languages/CFamily/C/Testing/TestPractices";

const Testing: RouteObject[] = [
    ...FrameworksAndTools,
    ...TestPractices,
];

export default Testing;