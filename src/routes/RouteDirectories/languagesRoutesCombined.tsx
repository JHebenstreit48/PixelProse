import { RouteObject } from "react-router-dom";

import cFamilyRoutes from "@/routes/LanguagesRoutes/cFamilyRoutes";

const languagesRoutes: RouteObject[] = [
...cFamilyRoutes,
...javaRoutes,
...javascriptRoutes,
...luaRoutes,
...pythonRoutes,
...rustRoutes,
...swiftRoutes,
...typescriptRoutes,
];

export default languagesRoutes;