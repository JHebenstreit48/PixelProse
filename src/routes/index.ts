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
import C from "@/pages/C";
import CCode from "@/pages/CCode";

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
        path: "/c",
        element: createElement(C),
      },
      {
        path: "/c/ccode",
        element: createElement(CCode),
      },
      {
        path: "/c/cplusplus",
        element: createElement(CPlusPlus),
      },
      {
        path: "/c/cplusplus/cpluspluscode",
        element: createElement(CPlusPlusCode),
      },
      {
        path: "/c/csharp",
        element: createElement(CSharp),
      },
      {
        path: "/c/csharp/csharpcode",
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
