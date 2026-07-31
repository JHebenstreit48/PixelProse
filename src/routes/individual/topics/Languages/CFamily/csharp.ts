import { RouteObject } from "react-router-dom";

import Basics from '@/routes/individual/modularized/Languages/CFamily/CSharp/Basics';

import Tools from '@/routes/individual/modularized/Languages/CFamily/CSharp/Tools';

const CSharp: RouteObject[] = [
    ...Basics,

    
    ...Tools,
];

export default CSharp;