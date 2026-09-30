import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const Introduction = lazy(
  () =>
    import(
      "@/pages/mainTabs/Languages/CFamily/CSharp/Basics/Fundamentals/Introduction"
    )
);
const Syntax = lazy(
  () =>
    import(
      "@/pages/mainTabs/Languages/CFamily/CSharp/Basics/Fundamentals/Syntax"
    )
);
const VariablesAndDataTypes = lazy(
  () =>
    import(
      "@/pages/mainTabs/Languages/CFamily/CSharp/Basics/Fundamentals/VariablesAndDataTypes"
    )
);

const Fundamentals: RouteObject[] = [
  {
    path: "/languages/c-family/c-sharp/basics/fundamentals/introduction",
    element: <Introduction />,
  },
  {
    path: "/languages/c-family/c-sharp/basics/fundamentals/syntax-and-structure",
    element: <Syntax />,
  },
  {
    path: "/languages/c-family/c-sharp/basics/fundamentals/variables-and-data-types",
    element: <VariablesAndDataTypes />,
  }
];

export default Fundamentals;