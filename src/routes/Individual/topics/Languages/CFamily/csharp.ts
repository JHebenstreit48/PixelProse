import { RouteObject } from "react-router-dom";

import Basics from '@/routes/Individual/Granularized/Languages/CFamily/CSharp/Basics';

import Tools from '@/routes/Individual/Granularized/Languages/CFamily/CSharp/Tools';

const CSharp: RouteObject[] = [
    ...Basics,

    
    ...Tools,
];

export default CSharp;