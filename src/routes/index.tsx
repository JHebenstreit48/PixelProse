import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import ErrorPage from "@/Pages/ErrorHomeSplash/Error";
import Home from "@/Pages/ErrorHomeSplash/Home";

import languagesRoutesCombined from "@/routes/RouteDirectories/languagesRoutesCombined";

import DirectX from "@/Pages/GraphicsPages/DirectXPages/DirectX";
import Java from "@/Pages/LanguagesPages/JavaPages/Java";
import JavaCode from "@/Pages/LanguagesPages/JavaPages/JavaCode";
import Lua from "@/Pages/LanguagesPages/LuaPages/Lua";
import LuaCode from "@/Pages/LanguagesPages/LuaPages/LuaCode";
import OpenGL from "@/Pages/GraphicsPages/OpenGLPages/OpenGL";
import Swift from "@/Pages/LanguagesPages/SwiftPages/Swift";
import SwiftCode from "@/Pages/LanguagesPages/SwiftPages/SwiftCode";
import Unity from "@/Pages/EnginesPages/UnityPages/Unity";
import UnrealEngine from "@/Pages/EnginesPages/UnrealEnginePages/UnrealEngine";
import Vulkan from "@/Pages/GraphicsPages/VulkanPages/Vulkan";

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
