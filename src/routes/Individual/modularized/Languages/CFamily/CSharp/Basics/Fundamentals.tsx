import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const Introduction = lazy(
  () =>
    import(
      "@/Pages/MainTabs/Languages/CFamily/CSharp/Basics/Fundamentals/Introduction"
    )
);
const Syntax = lazy(
  () =>
    import(
      "@/Pages/MainTabs/Languages/CFamily/CSharp/Basics/Fundamentals/Syntax"
    )
);

const Fundamentals: RouteObject[] = [
  {
    path: "/c-family/c-sharp/basics/fundamentals/introduction",
    element: <Introduction />,
  },
  {
    path: "/c-family/c-sharp/basics/fundamentals/syntax",
    element: <Syntax />,
  },
];

export default Fundamentals;