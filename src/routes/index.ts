import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/Error";
import Home from "../pages/Home";
import { createElement } from "react";
import CSharp from "@/pages/CSharp";
import Java from "@/pages/Java";
import CSharpCode from "@/pages/CSharpCode";
import JavaCode from "@/pages/JavaCode";

export const router = createBrowserRouter([
  {
    path: "/",
    element: createElement(App),
    errorElement: createElement(ErrorPage),
    children: [
      {
        index: true,
        element: createElement(Home),
      },
      {
        path: "/csharp",
        element: createElement(CSharp),
      },
      {
        path: "/csharp/csharpcode",
        element: createElement(CSharpCode), 
      },
      {
        path: "/java",
        element: createElement(Java),
      },
      {
        path: "/java/javacode",
        element: createElement(JavaCode),
      },
    ],
  },
]);
