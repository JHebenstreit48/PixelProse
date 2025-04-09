import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import ErrorPage from "@/Pages/Error";
import Home from "@/Pages/Home";
import CPlusPlus from "@/Pages/CFamilyPages/CPlusPlus/CPlusPlus";
import CPlusPlusCode from "@/Pages/CFamilyPages/CPlusPlus/CPlusPlusCode";
import CSharpIntro from "@/Pages/CFamilyPages/CSharp/CSharpIntro";
import CSharpCode from "@/Pages/CFamilyPages/CSharp/CSharpCode";
import DirectX from "@/Pages/DirectXPages/DirectX";
import Java from "@/Pages/JavaPages/Java";
import JavaCode from "@/Pages/JavaPages/JavaCode";
import Lua from "@/Pages/LuaPages/Lua";
import LuaCode from "@/Pages/LuaPages/LuaCode";
import OpenGL from "@/Pages/OpenGLPages/OpenGL";
import Swift from "@/Pages/SwiftPages/Swift";
import SwiftCode from "@/Pages/SwiftPages/SwiftCode";
import Unity from "@/Pages/UnityPages/Unity";
import UnrealEngine from "@/Pages/UnrealEnginePages/UnrealEngine";
import Vulkan from "@/Pages/VulkanPages/Vulkan";
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
        path: "/cfamily/csharp/basics/introduction",
        element: <CSharpIntro />,
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
