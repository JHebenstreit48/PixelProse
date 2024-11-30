import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/Error";
import Home from "../pages/Home";
import { createElement } from "react";

import CPlusPlus from "@/pages/CPlusPlus";
import CPlusPlusCode from "@/pages/CPlusPlusCode";
import CSharp from "@/pages/CSharp";
import CSharpCode from "@/pages/CSharpCode";
import DirectX from "@/pages/DirectX";
import Java from "@/pages/Java";
import JavaCode from "@/pages/JavaCode";
import Lua from "@/pages/Lua";
import LuaCode from "@/pages/LuaCode";
import OpenGL from "@/pages/OpenGL";
import Swift from "@/pages/Swift";
import SwiftCode from "@/pages/SwiftCode";
import Unity from "@/pages/Unity";
import UnrealEngine from "@/pages/UnrealEngine";
import Vulkan from "@/pages/Vulkan";

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
        path: "/lua/luacode",
        element: createElement(LuaCode),
      },
      {
        path: "/opengl",
        element: createElement(OpenGL),
      },
      {
        path: "/swift",
        element: createElement(Swift),
      },
      {
        path: "/swift/swiftcode",
        element: createElement(SwiftCode),
      },
      {
        path: "/unity",
        element: createElement(Unity),
      },
      {
        path: "/unrealengine",
        element: createElement(UnrealEngine),
      },
      {
        path: "/vulkan",
        element: createElement(Vulkan),
      },
    ],
  },
]);
