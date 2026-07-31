import { RouteObject } from "react-router-dom";

import cFamily from "@/routes/individual/topics/Languages/cFamily";
import java from "@/routes/individual/topics/Languages/java";
import javascript from "@/routes/individual/topics/Languages/javascript";
import kotlin from "@/routes/individual/topics/Languages/kotlin";
import lua from "@/routes/individual/topics/Languages/lua";
import python from "@/routes/individual/topics/Languages/python";
import rust from "@/routes/individual/topics/Languages/rust";
import swift from "@/routes/individual/topics/Languages/swift";
import typescript from "@/routes/individual/topics/Languages/typescript";

const languages: RouteObject[] = [
  ...cFamily,
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