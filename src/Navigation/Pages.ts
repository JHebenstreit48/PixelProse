import { Page } from "@/Navigation/NavigationTypes";

// Programming Languages Navigation Start
import CFamilyNavigation from "@/Navigation/ProgrammingLanguagesNavigation/CFamily";
import LuaNavigation from "@/Navigation/ProgrammingLanguagesNavigation/Lua";
import PythonNavigation from "@/Navigation/ProgrammingLanguagesNavigation/Python";

// Programming Languages Navigation End

// Game Engines Navigation Start
// import UnityNavigation from "@/Navigation/GameEnginesNavigation/Unity";
// import UnrealEngineNavigation from "@/Navigation/GameEnginesNavigation/UnrealEngine";
// import GodotNavigation from "@/Navigation/GameEnginesNavigation/Godot";
// import CryEngineNavigation from "@/Navigation/GameEnginesNavigation/CryEngine";
// import SpecializedEnginesNavigation from "@/Navigation/GameEnginesNavigation/SpecializedEngines"; // Includes GameMaker, RPG Maker
// Game Engines Navigation End

// Graphics Programming Navigation Start

// Shaders Navigation Start
import HLSLNavigation from "./GraphicsProgrammingNavigation/ShadersNavigation/HLSL";
import GLSLNavigation from "./GraphicsProgrammingNavigation/ShadersNavigation/GLSL";
// Shaders Navigation End

// Rendering APIs Navigation Start
import DirectXNavigation from "./GraphicsProgrammingNavigation/RenderingAPIsNavigation/DirectX";
import OpenGLNavigation from "./GraphicsProgrammingNavigation/RenderingAPIsNavigation/OpenGL";
import VulkanNavigation from "./GraphicsProgrammingNavigation/RenderingAPIsNavigation/Vulkan";
// Rendering APIs Navigation End

// Graphics Programming Navigation End

// Game Systems Navigation Start
// import AINavigation from "@/Navigation/GameSystemsNavigation/AI";
// import PhysicsNavigation from "@/Navigation/GameSystemsNavigation/Physics";
// import MultiplayerNetworkingNavigation from "@/Navigation/GameSystemsNavigation/MultiplayerNetworking";
// import ServerNetworkingNavigation from "@/Navigation/GameSystemsNavigation/ServerNetworking";
// import LagManagementNavigation from "@/Navigation/GameSystemsNavigation/LagManagement";
// Game Systems Navigation End

// Game Design & Testing Navigation Start
// import GameDesignNavigation from "@/Navigation/GameDesignAndTestingNavigation/GameDesign";
// import GameTestingNavigation from "@/Navigation/GameDesignAndTestingNavigation/GameTesting";
// Game Design & Testing Navigation End

// Tools Navigation Start
// Development Tools Section
// import BlenderNavigation from "@/Navigation/ToolsNavigation/Blender";
// import MayaNavigation from "@/Navigation/ToolsNavigation/Maya";
// import FMODNavigation from "@/Navigation/ToolsNavigation/FMOD";
// import WwiseNavigation from "@/Navigation/ToolsNavigation/Wwise";
// Platforms Section
// import AndroidNavigation from "@/Navigation/PlatformsNavigation/Android";
// import IOSNavigation from "@/Navigation/PlatformsNavigation/IOS";
// import ConsoleNavigation from "@/Navigation/PlatformsNavigation/Console";
// import CrossPlatformNavigation from "@/Navigation/PlatformsNavigation/CrossPlatform";
// Version Control Section
// import PerforceNavigation from "@/Navigation/ToolsNavigation/Perforce";
// Tools Navigation End

const pages: Page[] = [
  {
    name: "Home",
    subpages: [],
  },
  {
    name: "Programming Languages",
    subpages: [CFamilyNavigation, LuaNavigation, PythonNavigation],
  },
  {
    name: "Game Engines",
    subpages: [
      // UnityNavigation,
      // UnrealEngineNavigation,
      // GodotNavigation,
      // CryEngineNavigation,
      // SpecializedEnginesNavigation,
    ],
  },
  {
    name: "Graphics Programming",
    subpages: [
      {
        name: "Shaders",
        subpages: [HLSLNavigation, GLSLNavigation],
      },
      {
        name: "Rendering APIs",
        subpages: [DirectXNavigation, OpenGLNavigation, VulkanNavigation],
      },
      {
        name: "Ray Tracing",
        subpages: [
          // RayTracingNavigation,
        ],
      },
    ],
  },
  {
    name: "Game Systems",
    subpages: [
      {
        name: "AI",
        subpages: [
          // AINavigation,
        ],
      },
      {
        name: "Physics",
        subpages: [
          // PhysicsNavigation,
        ],
      },
      {
        name: "Networking",
        subpages: [
          {
            name: "Multiplayer Networking",
            subpages: [
              // MultiplayerNetworkingNavigation,
            ],
          },
          {
            name: "Server Networking",
            subpages: [
              // ServerNetworkingNavigation,
            ],
          },
          {
            name: "Lag and Latency Management",
            subpages: [
              // LagManagementNavigation,
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Game Design & Testing",
    subpages: [
      {
        name: "Design",
        subpages: [
          // GameDesignNavigation,
        ],
      },
      {
        name: "Testing",
        subpages: [
          // GameTestingNavigation,
        ],
      },
    ],
  },
  {
    name: "Tools",
    subpages: [
      {
        name: "Development Tools",
        subpages: [
          // BlenderNavigation,
          // MayaNavigation,
          // FMODNavigation,
          // WwiseNavigation,
        ],
      },
      {
        name: "Platforms",
        subpages: [
          // AndroidNavigation,
          // IOSNavigation,
          // ConsoleNavigation,
          // CrossPlatformNavigation,
        ],
      },
      {
        name: "Version Control",
        subpages: [
          // PerforceNavigation,
        ],
      },
    ],
  },
];

export default pages;
