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
    path: "/languages/c-family/c-sharp/basics/core-concepts/oop",
    element: <OOP />,
  },
  {
    path: "/languages/c-family/c-sharp/basics/core-concepts/collections",
    element: <Collections />,
  },
  {
    path: "/languages/c-family/c-sharp/basics/core-concepts/console",
    element: <Console />,
  },
  {
    path: "/languages/c-family/c-sharp/basics/core-concepts/operators",
    element: <Operators />,
  },
  {
    path: "/languages/c-family/c-sharp/basics/core-concepts/control-flow",
    element: <ControlFlow />,
  },
];

export default CoreConcepts;