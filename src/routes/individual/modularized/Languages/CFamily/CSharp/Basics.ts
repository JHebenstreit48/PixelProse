import { RouteObject } from "react-router-dom";

import Fundamentals from '@/routes/individual/modularized/Languages/CFamily/CSharp/Basics/Fundamentals';
import CoreConcepts from '@/routes/individual/modularized/Languages/CFamily/CSharp/Basics/CoreConcepts';

const Basics: RouteObject[] = [
    ...Fundamentals,
    ...CoreConcepts
];

export default Basics;