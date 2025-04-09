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
import HLSLNavigation from "@/Navigation/GraphicsNavigation/ShadersNavigation/HLSL";
import GLSLNavigation from "@/Navigation/GraphicsNavigation/ShadersNavigation/GLSL";
import PythonShadersNavigation from "@/Navigation/GraphicsNavigation/ShadersNavigation/PythonShaders";
import DebuggingToolsNavigation from "@/Navigation/GraphicsNavigation/ShadersNavigation/DebuggingTools";
// Shaders Navigation End

// Rendering APIs Navigation Start
import DirectXNavigation from "@/Navigation/GraphicsNavigation/RenderingAPIsNavigation/DirectX";
import OpenGLNavigation from "@/Navigation/GraphicsNavigation/RenderingAPIsNavigation/OpenGL";
import VulkanNavigation from "@/Navigation/GraphicsNavigation/RenderingAPIsNavigation/Vulkan";
import PBRNavigation from "@/Navigation/GraphicsNavigation/AdvancedTopicsNavigation/PBR";
import RayTracingNavigation from "@/Navigation/GraphicsNavigation/AdvancedTopicsNavigation/RayTracing";
import GlobalIlluminationNavigation from "@/Navigation/GraphicsNavigation/AdvancedTopicsNavigation/GlobalIllumination";
import PostProcessingEffectsNavigation from "@/Navigation/GraphicsNavigation/AdvancedTopicsNavigation/PostProcessingEffects";
import ProductionNavigation from "@/Navigation/PipelineNavigation/Production";
import WorkflowNavigation from "@/Navigation/PipelineNavigation/Workflow";
import GameDesignBasicsNavigation from "@/Navigation/GameDesignNavigation/DesignBasics";
import LevelDesignNavigation from "@/Navigation/GameDesignNavigation/LevelDesign";
import GameMechanicsNavigation from "@/Navigation/GameDesignNavigation/GameMechanics";
import NarrativeDesignNavigation from "@/Navigation/GameDesignNavigation/NarrativeDesign";
import PrototypingToolsNavigation from "@/Navigation/GameDesignNavigation/PrototypingAndTools";

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
          RenPyNavigation,
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
