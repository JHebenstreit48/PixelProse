import { RouteObject } from "react-router-dom";

import C from '@/routes/Individual/Full/Languages/CFamily/c';
import CSharp from '@/routes/Individual/Full/Languages/CFamily/csharp';

const cFamily: RouteObject[] = [
    ...C,
    ...CSharp,
];

export default cFamily;