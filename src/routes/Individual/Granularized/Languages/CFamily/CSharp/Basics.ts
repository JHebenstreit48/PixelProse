import { RouteObject } from "react-router-dom";

import Fundamentals from '@/routes/Individual/Granularized/Languages/CFamily/CSharp/Basics/Fundamentals';
import CoreConcepts from '@/routes/Individual/Granularized/Languages/CFamily/CSharp/Basics/CoreConcepts';

const Basics: RouteObject[] = [
    ...Fundamentals,
    ...CoreConcepts
];

export default Basics;