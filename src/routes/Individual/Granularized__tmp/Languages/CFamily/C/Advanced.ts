import { RouteObject } from "react-router-dom";

import FileOperations from "@/routes/Individual/Granularized/Languages/CFamily/C/Advanced/FileOperations";
import MemoryAndPointers from "@/routes/Individual/Granularized/Languages/CFamily/C/Advanced/MemoryAndPointers";
import ProcessingAndOptimization from "@/routes/Individual/Granularized/Languages/CFamily/C/Advanced/PreprocessingAndOptimization";

const Advanced: RouteObject[] = [
    ...FileOperations,
    ...MemoryAndPointers,
    ...ProcessingAndOptimization,
];

export default Advanced;