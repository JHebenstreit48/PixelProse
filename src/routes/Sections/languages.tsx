import { RouteObject } from "react-router-dom";

import cFamily from "@/routes/Individual/Full/Languages/cFamily";
import java from "@/routes/Individual/Full/Languages/java";
import javascript from "@/routes/Individual/Full/Languages/javascript";
import kotlin from "@/routes/Individual/Full/Languages/kotlin";
import lua from "@/routes/Individual/Full/Languages/lua";
import python from "@/routes/Individual/Full/Languages/python";
import rust from "@/routes/Individual/Full/Languages/rust";
import swift from "@/routes/Individual/Full/Languages/swift";
import typescript from "@/routes/Individual/Full/Languages/typescript";

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