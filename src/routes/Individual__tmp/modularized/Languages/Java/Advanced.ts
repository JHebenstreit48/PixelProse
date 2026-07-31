import { RouteObject } from "react-router-dom";

import Concurrency from "@/routes/Individual/Granularized/Languages/Java/Advanced/Concurrency";
import MemoryAndGC from "@/routes/Individual/Granularized/Languages/Java/Advanced/MemoryAndGC";
import NIOAndBinary from "@/routes/Individual/Granularized/Languages/Java/Advanced/NIOAndBinary";
import Performance from "@/routes/Individual/Granularized/Languages/Java/Advanced/Performance";
import InteropAndNative from "@/routes/Individual/Granularized/Languages/Java/Advanced/InteropAndNative";
import DebugAndProfiling from "@/routes/Individual/Granularized/Languages/Java/Advanced/DebugAndProfiling";

const Advanced: RouteObject[] = [
    ...Concurrency,
    ...MemoryAndGC,
    ...NIOAndBinary,
    ...Performance,
    ...InteropAndNative,
    ...DebugAndProfiling,
];

export default Advanced;