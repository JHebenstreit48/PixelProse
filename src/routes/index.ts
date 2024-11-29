import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/Error";
import Home from "../pages/Home";
import { createElement } from "react";
import CSharp from "@/pages/CSharp";
import Java from "@/pages/Java";
import CSharpCode from "@/pages/CSharpCode";
import JavaCode from "@/pages/JavaCode";
import DirectX from "@/pages/DirectX";
import CPlusPlus from "@/pages/CPlusPlus";
import CPlusPlusCode from "@/pages/CPlusPlusCode";
import Lua from "@/pages/Lua";
import OpenGL from "@/pages/OpenGL";

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
        path: "/cplusplus",
        element: createElement(CPlusPlus),
      },
      {
        path: "/cplusplus/cpluspluscode",
        element: createElement(CPlusPlusCode),
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
        path: "/directx",
        element: createElement(DirectX),
      },
      {
        path: "/java",
        element: createElement(Java),
      },
      {
        path: "/java/javacode",
        element: createElement(JavaCode),
      },
      {
        path: "/lua",
        element: createElement(Lua),
      },
      {
        path: "/opengl",
        element: createElement(OpenGL),
      },
      {

      },
    ],
  },
]);
