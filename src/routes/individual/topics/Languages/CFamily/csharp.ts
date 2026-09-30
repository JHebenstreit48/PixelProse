import { RouteObject } from "react-router-dom";

import Basics from '@/routes/individual/modularized/Languages/CFamily/CSharp/Basics';
import Advanced from '@/routes/individual/modularized/Languages/CFamily/CSharp/Advanced';

import Tools from '@/routes/individual/modularized/Languages/CFamily/CSharp/Tools';

const CSharp: RouteObject[] = [
    ...Basics,
    ...Advanced,
    ...Tools,
];

export default CSharp;