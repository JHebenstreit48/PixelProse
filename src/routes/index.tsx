import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import ErrorPage from "@/Pages/Special/Error";
import Home from "@/Pages/Special/Home";
import About from "@/Pages/Special/About";

import languages from "@/routes/Sections/languages";
import engines from "@/routes/Sections/engines";
import graphics from "@/routes/Sections/graphics";
import design from "@/routes/Sections/design";
// import toolsRoutesCombined from "@/routes/RouteDirectories/toolsRoutesCombined";
// import pipeline from "@/routes/RouteDirectories/pipelineRoutesCombined";

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
      { path: 'about', element: <About /> },
      ...languages,
      ...engines,
      ...graphics,
      ...design,
      // ...toolsRoutesCombined,
      // ...pipeline,
    ],
  },
]);
