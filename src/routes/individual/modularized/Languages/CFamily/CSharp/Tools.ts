import { RouteObject } from 'react-router-dom';

import IDEs from '@/routes/individual/modularized/Languages/CFamily/CSharp/Tools/IDEs';
import Frameworks from '@/routes/individual/modularized/Languages/CFamily/CSharp/Tools/Frameworks';
import PackageManagement from '@/routes/individual/modularized/Languages/CFamily/CSharp/Tools/PackageManagement';

const Tools: RouteObject[] = [
    ...IDEs,
    ...Frameworks,
    ...PackageManagement
  ];

export default Tools;