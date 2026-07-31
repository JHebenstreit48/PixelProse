import { RouteObject } from "react-router-dom";

import Fundamentals from "@/routes/individual/modularized/Languages/Java/Basics/Fundamentals";
import OOP from "@/routes/individual/modularized/Languages/Java/Basics/OOP";
import Collections from "@/routes/individual/modularized/Languages/Java/Basics/Collections";
import Exceptions from "@/routes/individual/modularized/Languages/Java/Basics/Exceptions";
import Cocurrency from "@/routes/individual/modularized/Languages/Java/Basics/Concurrency";
import IOBasics from "@/routes/individual/modularized/Languages/Java/Basics/IOBasics";

const Basics: RouteObject[] = [
    ...Fundamentals,
    ...OOP,
    ...Collections,
    ...Exceptions,
    ...Cocurrency,
    ...IOBasics,
];

export default Basics;