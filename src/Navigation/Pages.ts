import { Page } from "@/Navigation/NavigationTypes";

// Programming Languages Navigation Start
import CFamilyNavigation from "@/Navigation/GameLanguagesNavigation/CFamily";
import LuaNavigation from "@/Navigation/GameLanguagesNavigation/Lua";
import PythonNavigation from "@/Navigation/GameLanguagesNavigation/Python";

// Programming Languages Navigation End

// Game Engines Navigation Start
import UnityNavigation from "@/Navigation/GameEnginesNavigation/Unity";
import UnrealEngineNavigation from "@/Navigation/GameEnginesNavigation/UnrealEngine";
import GodotNavigation from "@/Navigation/GameEnginesNavigation/Godot";
import CryEngineNavigation from "@/Navigation/GameEnginesNavigation/CryEngine";

// Specialized Engines Navigation Start
import GameMakerNavigation from "@/Navigation/GameEnginesNavigation/SpecializedEnginesNavigation/GameMaker";
import RPGMakerNavigation from "@/Navigation/GameEnginesNavigation/SpecializedEnginesNavigation/RPGMaker";
import ConstructNavigation from "@/Navigation/GameEnginesNavigation/SpecializedEnginesNavigation/Construct";
import RenPyNavigation from "@/Navigation/GameEnginesNavigation/SpecializedEnginesNavigation/RenPy";
// Specialized Engines Navigation End
// Game Engines Navigation End

// Graphics Programming Navigation Start

// Shaders Navigation Start
import HLSLNavigation from "./GraphicsNavigation/ShadersNavigation/HLSL";
import GLSLNavigation from "./GraphicsNavigation/ShadersNavigation/GLSL";
import PythonShadersNavigation from "./GraphicsNavigation/ShadersNavigation/PythonShaders";
import DebuggingToolsNavigation from "./GraphicsNavigation/ShadersNavigation/DebuggingTools";
// Shaders Navigation End

// Rendering APIs Navigation Start
import DirectXNavigation from "./GraphicsNavigation/RenderingAPIsNavigation/DirectX";
import OpenGLNavigation from "./GraphicsNavigation/RenderingAPIsNavigation/OpenGL";
import VulkanNavigation from "./GraphicsNavigation/RenderingAPIsNavigation/Vulkan";
import PBRNavigation from "./GraphicsNavigation/AdvancedTopicsNavigation/PBR";
import RayTracingNavigation from "./GraphicsNavigation/AdvancedTopicsNavigation/RayTracing";
import GlobalIlluminationNavigation from "./GraphicsNavigation/AdvancedTopicsNavigation/GlobalIllumination";
import PostProcessingEffectsNavigation from "./GraphicsNavigation/AdvancedTopicsNavigation/PostProcessingEffects";
import ProductionNavigation from "./PipelineNavigation/Production";
import WorkflowNavigation from "./PipelineNavigation/Workflow";
import GameDesignBasicsNavigation from "./GameDesignNavigation/DesignBasics";
import LevelDesignNavigation from "./GameDesignNavigation/LevelDesign";
import GameMechanicsNavigation from "./GameDesignNavigation/GameMechanics";
import NarrativeDesignNavigation from "./GameDesignNavigation/NarrativeDesign";
import PrototypingToolsNavigation from "./GameDesignNavigation/PrototypingAndTools";

// Rendering APIs Navigation End

// Graphics Programming Navigation End

const pages: Page[] = [
  {
    name: "Home",
    subpages: [],
  },
  {
    name: "Game Languages",
    subpages: [CFamilyNavigation, LuaNavigation, PythonNavigation],
  },
  {
    name: "Game Engines",
    subpages: [
      UnityNavigation,
      UnrealEngineNavigation,
      GodotNavigation,
      CryEngineNavigation,
      {
        name: "Specialized Engines",
        subpages: [
          GameMakerNavigation,
          RPGMakerNavigation,
          ConstructNavigation,
          RenPyNavigation
        ],
      },
    ],
  },
  {
    name: "Graphics",
    subpages: [
      {
        name: "Shaders",
        subpages: [
          HLSLNavigation,
          GLSLNavigation,
          PythonShadersNavigation,
          DebuggingToolsNavigation,
        ],
      },
      {
        name: "Rendering APIs",
        subpages: [DirectXNavigation, OpenGLNavigation, VulkanNavigation],
      },
      {
        name: "Advanced Topics",
        subpages: [
          PBRNavigation,
          RayTracingNavigation,
          GlobalIlluminationNavigation,
          PostProcessingEffectsNavigation,
        ],
      },
    ],
  },
  {
    name: "Game Design",
    subpages: [
      GameDesignBasicsNavigation,
      LevelDesignNavigation,
      GameMechanicsNavigation,
      NarrativeDesignNavigation,
      PrototypingToolsNavigation,
    ],
  },
  {
    name: "Pipleline",
    subpages: [ProductionNavigation, WorkflowNavigation],
  },
];

export default pages;
