import { RouteObject } from "react-router-dom";

import Concurrency from "@/routes/individual/modularized/Languages/Java/Advanced/Concurrency";
import MemoryAndGC from "@/routes/individual/modularized/Languages/Java/Advanced/MemoryAndGC";
import NIOAndBinary from "@/routes/individual/modularized/Languages/Java/Advanced/NIOAndBinary";
import Performance from "@/routes/individual/modularized/Languages/Java/Advanced/Performance";
import InteropAndNative from "@/routes/individual/modularized/Languages/Java/Advanced/InteropAndNative";
import DebugAndProfiling from "@/routes/individual/modularized/Languages/Java/Advanced/DebugAndProfiling";

const Advanced: RouteObject[] = [
    ...Concurrency,
    ...MemoryAndGC,
    ...NIOAndBinary,
    ...Performance,
    ...InteropAndNative,
    ...DebugAndProfiling,
];

export default Advanced;