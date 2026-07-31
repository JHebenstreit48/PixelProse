import { RouteObject } from "react-router-dom";

import Basics from "@/routes/individual/modularized/Languages/Java/Basics";
import Advanced from "@/routes/individual/modularized/Languages/Java/Advanced";

const java: RouteObject[] = [
    ...Basics,
    ...Advanced,
];

export default java;