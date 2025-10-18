import { RouteObject } from "react-router-dom";

// ========================= C Family  Start =========================
import c from "@/routes/Languages/CFamily/c";
import cPlusPlus from "@/routes/Languages/CFamily/cPlusPlus";
import cSharp from "@/routes/Languages/CFamily/cSharp";
// ========================= C Family  End =========================

import java from "@/routes/Languages/java";
import javascript from "@/routes/Languages/javascript";
import kotlin from "@/routes/Languages/kotlin";
import lua from "@/routes/Languages/lua";
import python from "@/routes/Languages/python";
import rust from "@/routes/Languages/rust";
import swift from "@/routes/Languages/swift";
import typescript from "@/routes/Languages/typescript";


const languages: RouteObject[] = [
...c,
...cPlusPlus,
...cSharp,
...java,
...javascript,
...kotlin,
...lua,
...python,
...rust,
...swift,
...typescript,
];

export default languages;