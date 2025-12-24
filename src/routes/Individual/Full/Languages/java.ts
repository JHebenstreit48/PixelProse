import { RouteObject } from "react-router-dom";

import Basics from "@/routes/Individual/Granularized/Languages/Java/Basics";
import Advanced from "@/routes/Individual/Granularized/Languages/Java/Advanced";

const java: RouteObject[] = [
    ...Basics,
    ...Advanced,
];

export default java;