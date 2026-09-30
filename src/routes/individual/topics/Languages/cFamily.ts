import { RouteObject } from "react-router-dom";

import C from '@/routes/individual/topics/Languages/CFamily/c';
import CPlusPlus from '@/routes/individual/topics/Languages/CFamily/cplusplus';
import CSharp from '@/routes/individual/topics/Languages/CFamily/csharp';

const cFamily: RouteObject[] = [
    ...C,
    ...CPlusPlus,
    ...CSharp,
];

export default cFamily;