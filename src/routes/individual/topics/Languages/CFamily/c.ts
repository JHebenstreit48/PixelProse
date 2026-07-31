import { RouteObject } from "react-router-dom";

import Basics from '@/routes/individual/modularized/Languages/CFamily/C/Basics';
import Advanced from '@/routes/individual/modularized/Languages/CFamily/C/Advanced';
import Testing from '@/routes/individual/modularized/Languages/CFamily/C/Testing';
import Tools from '@/routes/individual/modularized/Languages/CFamily/C/Tools';

const C: RouteObject[] = [
    ...Basics,
    ...Advanced,
    ...Testing,
    ...Tools,
];

export default C;