import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import ErrorPage from "@/Pages/Special/Error";
import Home from "@/Pages/Special/Home";

import languagesRoutesCombined from "@/routes/RouteDirectories/languagesRoutesCombined";
// import enginesRoutesCombined from "@/routes/RouteDirectories/enginesRoutesCombined";
// import graphicsRoutesCombined from "@/routes/RouteDirectories/graphicsRoutesCombined";
// import designRoutesCombined from "@/routes/RouteDirectories/designRoutesCombined";
// import toolsRoutesCombined from "@/routes/RouteDirectories/toolsRoutesCombined";
// import pipelineRoutesCombined from "@/routes/RouteDirectories/pipelineRoutesCombined";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      ...languagesRoutesCombined,
      // ...enginesRoutesCombined,
      // ...graphicsRoutesCombined,
      // ...designRoutesCombined,
      // ...toolsRoutesCombined,
      // ...pipelineRoutesCombined,
    ],
  },
]);
