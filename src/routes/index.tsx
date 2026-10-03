import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import ErrorPage from "@/pages/special/Error";
import Home from "@/pages/special/Home";
import About from "@/pages/special/About";
import QRCodePage from "@/pages/special/qrCode";

import languages from "@/routes/sections/languages";
import engines from "@/routes/sections/engines";
import design from "@/routes/sections/design";
import graphics from "@/routes/sections/graphics";
// import mobile from "@/routes/sections/mobile";
// import toolsAndTesting from "@/routes/sections/toolsAndTesting";

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
      { path: 'qrcode', element: <QRCodePage /> },
      ...languages,
      ...engines,
      ...design,
      ...graphics,
      // ...mobile,
      // ...toolsAndTesting,
    ],
  },
]);