import { RouteObject } from "react-router-dom";

import Fundamentals from '@/routes/individual/modularized/Languages/CFamily/CSharp/Basics/Fundamentals';
import CoreConcepts from '@/routes/individual/modularized/Languages/CFamily/CSharp/Basics/CoreConcepts';
import ControlFlow from '@/routes/individual/modularized/Languages/CFamily/CSharp/Basics/ControlFlow';

const Basics: RouteObject[] = [
    ...Fundamentals,
    ...CoreConcepts,
    ...ControlFlow
];

export default Basics;