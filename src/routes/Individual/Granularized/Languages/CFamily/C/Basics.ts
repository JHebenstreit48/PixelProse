import { RouteObject } from "react-router-dom";

import Fundamentals from "@/routes/Individual/Granularized/Languages/CFamily/C/Basics/Fundamentals";
import DataHandling from "@/routes/Individual/Granularized/Languages/CFamily/C/Basics/DataHandling";
import ProgramFlow from "@/routes/Individual/Granularized/Languages/CFamily/C/Basics/ProgramFlow";

const Basics: RouteObject[] = [
  ...Fundamentals,
  ...DataHandling,
  ...ProgramFlow,
];

export default Basics;