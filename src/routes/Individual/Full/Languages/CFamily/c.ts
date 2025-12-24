import { RouteObject } from "react-router-dom";

import Basics from '@/routes/Individual/Granularized/Languages/CFamily/C/Basics';
import Advanced from '@/routes/Individual/Granularized/Languages/CFamily/C/Advanced';
import Testing from '@/routes/Individual/Granularized/Languages/CFamily/C/Testing';
import Tools from '@/routes/Individual/Granularized/Languages/CFamily/C/Tools';

const C: RouteObject[] = [
    ...Basics,
    ...Advanced,
    ...Testing,
    ...Tools,
];

export default C;