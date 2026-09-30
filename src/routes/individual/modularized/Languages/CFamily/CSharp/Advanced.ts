import { RouteObject } from "react-router-dom";

import ModernFeatures from '@/routes/individual/modularized/Languages/CFamily/CSharp/Advanced/ModernFeatures';
import GameOrientedConcepts from '@/routes/individual/modularized/Languages/CFamily/CSharp/Advanced/GameOrientedConcepts';

const Advanced: RouteObject[] = [
    ...ModernFeatures,
    ...GameOrientedConcepts
];

export default Advanced;