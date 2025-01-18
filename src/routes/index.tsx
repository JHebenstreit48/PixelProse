import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import ErrorPage from "@/Pages/Error";
import Home from "@/Pages/Home";
import CPlusPlus from "@/pages/CPlusPlus";
import CPlusPlusCode from "Pages/CFamily/CPlusPlus/CPlusPlusCode";
import CSharp from "@/pages/CSharp";
import CSharpCode from "Pages/CFamily/CSharp/CSharpCode";
import DirectX from "@/pages/DirectX";
import Java from "@/pages/Java";
import JavaCode from "@/Pages/JavaPages/JavaCode";
import Lua from "@/pages/Lua";
import LuaCode from "@/pages/LuaCode";
import OpenGL from "@/pages/OpenGL";
import Swift from "@/pages/Swift";
import SwiftCode from "@/Pages/SwiftPages/SwiftCode";
import Unity from "@/pages/Unity";
import UnrealEngine from "@/pages/UnrealEngine";
import Vulkan from "@/pages/Vulkan";
import C from "@/Pages/CFamilyPages/C/C";
import CCode from "@/Pages/CFamilyPages/C/CCode";

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
      {
        path: "/c",
        element: <C />,
      },
      {
        path: "/c/ccode",
        element: <CCode />,
      },
      {
        path: "/c/cplusplus",
        element: <CPlusPlus />,
      },
      {
        path: "/c/cplusplus/cpluspluscode",
        element: <CPlusPlusCode />,
      },
      {
        path: "/c/csharp",
        element: <CSharp />,
      },
      {
        path: "/c/csharp/csharpcode",
        element: <CSharpCode />, 
      },
      {
        path: "/directx",
        element: <DirectX />,
      },
      {
        path: "/java",
        element: <Java />,
      },
      {
        path: "/java/javacode",
        element: <JavaCode />,
      },
      {
        path: "/lua",
        element: <Lua />,
      },
      {
        path: "/lua/luacode",
        element: <LuaCode />
      },
      {
        path: "/opengl",
        element: <OpenGL />
      },
      {
        path: "/swift",
        element: <Swift />
      },
      {
        path: "/swift/swiftcode",
        element: <SwiftCode />
      },
      {
        path: "/unity",
        element: <Unity />
      },
      {
        path: "/unrealengine",
        element: <UnrealEngine />
      },
      {
        path: "/vulkan",
        element: <Vulkan />
      },
    ],
  },
]);
