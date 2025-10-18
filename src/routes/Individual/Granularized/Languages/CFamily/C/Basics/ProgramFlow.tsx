import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const ControlFlow = lazy(
  () =>
    import(
      "@/Pages/MainTabs/Languages/CFamily/C/Basics/ProgramFlow/ControlFlow"
    )
);

const ProgramFlow: RouteObject[] = [
  {
    path: "/c-family/c/basics/program-flow/control",
    element: <ControlFlow />,
  },
];

export default ProgramFlow;