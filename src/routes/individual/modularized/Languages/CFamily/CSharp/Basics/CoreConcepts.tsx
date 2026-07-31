import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const OOP = lazy(
  () =>
    import("@/pages/mainTabs/Languages/CFamily/CSharp/Basics/CoreConcepts/OOP")
);
const Collections = lazy(
  () =>
    import(
      "@/pages/mainTabs/Languages/CFamily/CSharp/Basics/CoreConcepts/Collections"
    )
);

const Console = lazy(
  () =>
    import(
      "@/pages/mainTabs/Languages/CFamily/CSharp/Basics/CoreConcepts/Console"
    )
);

const Operators = lazy(
  () =>
    import(
      "@/pages/mainTabs/Languages/CFamily/CSharp/Basics/CoreConcepts/Operators"
    )
);

const ControlFlow = lazy(
  () =>
    import(
      "@/pages/mainTabs/Languages/CFamily/CSharp/Basics/CoreConcepts/ControlFlow"
    )
);

const CoreConcepts: RouteObject[] = [
  {
    path: "/c-family/c-sharp/basics/core-concepts/oop",
    element: <OOP />,
  },
  {
    path: "/c-family/c-sharp/basics/core-concepts/collections",
    element: <Collections />,
  },
  {
    path: "/c-family/c-sharp/basics/core-concepts/console",
    element: <Console />,
  },
  {
    path: "/c-family/c-sharp/basics/core-concepts/operators",
    element: <Operators />,
  },
  {
    path: "/c-family/c-sharp/basics/core-concepts/control-flow",
    element: <ControlFlow />,
  },
];

export default CoreConcepts;