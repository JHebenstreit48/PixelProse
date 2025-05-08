import { RouteObject } from "react-router-dom";

import cFamilyRoutes from "@/routes/LanguagesRoutes/cFamilyRoutes";
import javaRoutes from "@/routes/LanguagesRoutes/javaRoutes";
import javascriptRoutes from "@/routes/LanguagesRoutes/javascriptRoutes";
import kotlinRoutes from "@/routes/LanguagesRoutes/kotlinRoutes";
import luaRoutes from "@/routes/LanguagesRoutes/luaRoutes";
import pythonRoutes from "@/routes/LanguagesRoutes/pythonRoutes";
import rustRoutes from "@/routes/LanguagesRoutes/rustRoutes";
import swiftRoutes from "@/routes/LanguagesRoutes/swiftRoutes";
import typescriptRoutes from "@/routes/LanguagesRoutes/typescriptRoutes";

const languagesRoutes: RouteObject[] = [
...cFamilyRoutes,
...javaRoutes,
...javascriptRoutes,
...kotlinRoutes,
...luaRoutes,
...pythonRoutes,
...rustRoutes,
...swiftRoutes,
...typescriptRoutes,
];

export default languagesRoutes;