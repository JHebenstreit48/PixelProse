import { RouteObject } from "react-router-dom";

import C from '@/routes/individual/topics/Languages/CFamily/c';
import CSharp from '@/routes/individual/topics/Languages/CFamily/csharp';

const cFamily: RouteObject[] = [
    ...C,
    ...CSharp,
];

export default cFamily;