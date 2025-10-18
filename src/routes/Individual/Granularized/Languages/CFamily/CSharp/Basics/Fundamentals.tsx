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
    path: "/cfamily/csharp/basics/fundamentals/introduction",
    element: <Introduction />,
  },
  {
    path: "/cfamily/csharp/basics/fundamentals/syntax",
    element: <Syntax />,
  },
];

export default Fundamentals;