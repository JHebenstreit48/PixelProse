import { RouteObject } from 'react-router-dom';

import IDEs from '@/routes/Individual/Granularized/Languages/CFamily/CSharp/Tools/IDEs';
import Frameworks from '@/routes/Individual/Granularized/Languages/CFamily/CSharp/Tools/Frameworks';
import PackageManagement from '@/routes/Individual/Granularized/Languages/CFamily/CSharp/Tools/PackageManagement';

const Tools: RouteObject[] = [
    ...IDEs,
    ...Frameworks,
    ...PackageManagement
  ];

export default Tools;