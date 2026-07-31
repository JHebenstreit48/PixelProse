import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const Introduction = lazy(
  () =>
    import(
      "@/pages/mainTabs/Languages/CFamily/C/Basics/Fundamentals/Introduction"
    )
);
const History = lazy(
  () =>
    import("@/pages/mainTabs/Languages/CFamily/C/Basics/Fundamentals/History")
);
const Syntax = lazy(
  () =>
    import("@/pages/mainTabs/Languages/CFamily/C/Basics/Fundamentals/Syntax")
);

const Fundamentals: RouteObject[] = [
  {
    path: "/c-family/c/basics/fundamentals/introduction",
    element: <Introduction />,
  },
  {
    path: "/c-family/c/basics/fundamentals/history",
    element: <History />,
  },
  {
    path: "/c-family/c/basics/fundamentals/syntax",
    element: <Syntax />,
  },
];

export default Fundamentals;