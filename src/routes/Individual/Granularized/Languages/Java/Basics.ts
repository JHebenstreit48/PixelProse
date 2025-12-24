import { RouteObject } from "react-router-dom";

import Fundamentals from "@/routes/Individual/Granularized/Languages/Java/Basics/Fundamentals";
import OOP from "@/routes/Individual/Granularized/Languages/Java/Basics/OOP";
import Collections from "@/routes/Individual/Granularized/Languages/Java/Basics/Collections";
import Exceptions from "@/routes/Individual/Granularized/Languages/Java/Basics/Exceptions";
import Cocurrency from "@/routes/Individual/Granularized/Languages/Java/Basics/Concurrency";
import IOBasics from "@/routes/Individual/Granularized/Languages/Java/Basics/IOBasics";

const Basics: RouteObject[] = [
    ...Fundamentals,
    ...OOP,
    ...Collections,
    ...Exceptions,
    ...Cocurrency,
    ...IOBasics,
];

export default Basics;