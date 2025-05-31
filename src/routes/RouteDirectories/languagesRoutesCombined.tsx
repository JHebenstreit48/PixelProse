import { RouteObject } from "react-router-dom";

// ========================= C Family Routes Start =========================
import cRoutes from "@/routes/LanguagesRoutes/CFamilyRoutes/cRoutes";
import cPlusPlusRoutes from "@/routes/LanguagesRoutes/CFamilyRoutes/cPlusPlusRoutes";
import cSharpRoutes from "@/routes/LanguagesRoutes/CFamilyRoutes/cSharpRoutes";
// ========================= C Family Routes End =========================

import javaRoutes from "@/routes/LanguagesRoutes/javaRoutes";
import javascriptRoutes from "@/routes/LanguagesRoutes/javascriptRoutes";
import kotlinRoutes from "@/routes/LanguagesRoutes/kotlinRoutes";
import luaRoutes from "@/routes/LanguagesRoutes/luaRoutes";
import pythonRoutes from "@/routes/LanguagesRoutes/pythonRoutes";
import rustRoutes from "@/routes/LanguagesRoutes/rustRoutes";
import swiftRoutes from "@/routes/LanguagesRoutes/swiftRoutes";
import typescriptRoutes from "@/routes/LanguagesRoutes/typescriptRoutes";


const languagesRoutes: RouteObject[] = [
...cRoutes,
...cPlusPlusRoutes,
...cSharpRoutes,
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