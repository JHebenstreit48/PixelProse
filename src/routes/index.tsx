import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import ErrorPage from "@/Pages/ErrorHomeSplash/Error";
import Home from "@/Pages/ErrorHomeSplash/Home";
import CPlusPlus from "@/Pages/CFamilyPages/CPlusPlus/CPlusPlus";
import CPlusPlusCode from "@/Pages/CFamilyPages/CPlusPlus/CPlusPlusCode";
import CSharpIntro from "@/Pages/CFamilyPages/CSharp/Basics/Introduction";
import CSharpSyntax from "@/Pages/CFamilyPages/CSharp/Basics/Syntax";
import DirectX from "@/Pages/GraphicsPages/DirectXPages/DirectX";
import Java from "@/Pages/JavaPages/Java";
import JavaCode from "@/Pages/JavaPages/JavaCode";
import Lua from "@/Pages/LuaPages/Lua";
import LuaCode from "@/Pages/LuaPages/LuaCode";
import OpenGL from "@/Pages/GraphicsPages/OpenGLPages/OpenGL";
import Swift from "@/Pages/LanguagesPages/SwiftPages/Swift";
import SwiftCode from "@/Pages/LanguagesPages/SwiftPages/SwiftCode";
import Unity from "@/Pages/EnginesPages/UnityPages/Unity";
import UnrealEngine from "@/Pages/EnginesPages/UnrealEnginePages/UnrealEngine";
import Vulkan from "@/Pages/GraphicsPages/VulkanPages/Vulkan";
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
      
      // C Family Start

      // C Start
      {
        path: "/c",
        element: <C />,
      },
      {
        path: "/cfamily/c/c/basics/syntax",
        element: <CCode />,
      },
      // C End

      // C++ Start
      {
        path: "/c/cplusplus",
        element: <CPlusPlus />,
      },
      {
        path: "/c/cplusplus/cpluspluscode",
        element: <CPlusPlusCode />,
      },

      // C++ End

      // C#

      // C# Basics Start
      {
        path: "/cfamily/csharp/basics/introduction",
        element: <CSharpIntro />,
      },
      {
        path: "/cfamily/csharp/basics/syntax",
        element: <CSharpSyntax />,
      },

      // C#Basics End

      // C# End

      // C Family End
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
