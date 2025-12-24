import { RouteObject } from "react-router-dom";

import FrameworksAndTools from "@/routes/Individual/Granularized/Languages/CFamily/C/Testing/FrameworksAndTools";
import TestPractices from "@/routes/Individual/Granularized/Languages/CFamily/C/Testing/TestPractices";

const Testing: RouteObject[] = [
    ...FrameworksAndTools,
    ...TestPractices,
];

export default Testing;