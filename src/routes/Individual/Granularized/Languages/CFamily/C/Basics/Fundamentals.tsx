import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const Introduction = lazy(
  () =>
    import(
      "@/Pages/MainTabs/Languages/CFamily/C/Basics/Fundamentals/Introduction"
    )
);
const Syntax = lazy(
  () =>
    import("@/Pages/MainTabs/Languages/CFamily/C/Basics/Fundamentals/Syntax")
);

const Fundamentals: RouteObject[] = [
  {
    path: "/c-family/c/basics/fundamentals/introduction",
    element: <Introduction />,
  },
  {
    path: "/c-family/c/basics/fundamentals/syntax",
    element: <Syntax />,
  },
];

export default Fundamentals;