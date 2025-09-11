import { Page } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

import languagesNav from "@/Navigation/CombinedNav/CombinedNavTopics/languagesNavCombined";
import enginesNav from "@/Navigation/CombinedNav/CombinedNavTopics/enginesNavCombined";

// Game Engines Navigation Start

// import UnrealEngineNavigation from "@/Navigation/IndividualNav/EnginesNavigation/UnrealEngine";
// import GodotNavigation from "@/Navigation/IndividualNav/EnginesNavigation/Godot";
// import CryEngineNavigation from "@/Navigation/IndividualNav/EnginesNavigation/CryEngine";

// Specialized Engines Navigation Start
// import GameMakerNavigation from "@/Navigation/IndividualNav/EnginesNavigation/SpecializedEnginesNavigation/GameMaker";
// import RPGMakerNavigation from "@/Navigation/IndividualNav/EnginesNavigation/SpecializedEnginesNavigation/RPGMaker";
// import ConstructNavigation from "@/Navigation/IndividualNav/EnginesNavigation/SpecializedEnginesNavigation/Construct";
// import RenPyNavigation from "@/Navigation/IndividualNav/EnginesNavigation/SpecializedEnginesNavigation/RenPy";
// Specialized Engines Navigation End

// Game Engines Navigation End

// Graphics Programming Navigation Start

// Shaders Navigation Start
import HLSLNavigation from "@/Navigation/IndividualNav/GraphicsNavigation/ShadersNavigation/HLSL";
import GLSLNavigation from "@/Navigation/IndividualNav/GraphicsNavigation/ShadersNavigation/GLSL";
import PythonShadersNavigation from "@/Navigation/IndividualNav/GraphicsNavigation/ShadersNavigation/PythonShaders";
import DebuggingToolsNavigation from "@/Navigation/IndividualNav/GraphicsNavigation/ShadersNavigation/DebuggingTools";
// Shaders Navigation End

// Rendering APIs Navigation Start
import DirectXNavigation from "@/Navigation/IndividualNav/GraphicsNavigation/RenderingAPIsNavigation/DirectX";
import OpenGLNavigation from "@/Navigation/IndividualNav/GraphicsNavigation/RenderingAPIsNavigation/OpenGL";
import VulkanNavigation from "@/Navigation/IndividualNav/GraphicsNavigation/RenderingAPIsNavigation/Vulkan";
import PBRNavigation from "@/Navigation/IndividualNav/GraphicsNavigation/AdvancedTopicsNavigation/PBR";
import RayTracingNavigation from "@/Navigation/IndividualNav/GraphicsNavigation/AdvancedTopicsNavigation/RayTracing";
import GlobalIlluminationNavigation from "@/Navigation/IndividualNav/GraphicsNavigation/AdvancedTopicsNavigation/GlobalIllumination";
import PostProcessingEffectsNavigation from "@/Navigation/IndividualNav/GraphicsNavigation/AdvancedTopicsNavigation/PostProcessingEffects";
import ProductionNavigation from "@/Navigation/IndividualNav/PipelineNavigation/Production";
import WorkflowNavigation from "@/Navigation/IndividualNav/PipelineNavigation/Workflow";
import GameDesignBasicsNavigation from "@/Navigation/IndividualNav/DesignNavigation/DesignBasics";
import LevelDesignNavigation from "@/Navigation/IndividualNav/DesignNavigation/LevelDesign";
import GameMechanicsNavigation from "@/Navigation/IndividualNav/DesignNavigation/GameMechanics";
import NarrativeDesignNavigation from "@/Navigation/IndividualNav/DesignNavigation/NarrativeDesign";
import PrototypingToolsNavigation from "@/Navigation/IndividualNav/DesignNavigation/PrototypingAndTools";

// Rendering APIs Navigation End

// Graphics Programming Navigation End

const pages: Page[] = [
  languagesNav,
  enginesNav,
  // {
  //   name: "Game Engines",
  //   subpages: [
  //     UnrealEngineNavigation,
  //     GodotNavigation,
  //     CryEngineNavigation,
  //     {
  //       name: "Specialized Engines",
  //       subpages: [
  //         GameMakerNavigation,
  //         RPGMakerNavigation,
  //         ConstructNavigation,
  //         RenPyNavigation
  //       ],
  //     },
  //   ],
  // },
  {
    name: "Graphics",
    subpages: [
      {
        name: "Shaders",
        subpages: [
          HLSLNavigation,
          GLSLNavigation,
          PythonShadersNavigation,
          DebuggingToolsNavigation
        ],
      },
      {
        name: "Rendering APIs",
        subpages: [
          DirectXNavigation,
          OpenGLNavigation,
          VulkanNavigation
        ],
      },
      {
        name: "Advanced Topics",
        subpages: [
          PBRNavigation,
          RayTracingNavigation,
          GlobalIlluminationNavigation,
          PostProcessingEffectsNavigation
        ],
      },
    ],
  },
  {
    name: "Design",
    subpages: [
      GameDesignBasicsNavigation,
      LevelDesignNavigation,
      GameMechanicsNavigation,
      NarrativeDesignNavigation,
      PrototypingToolsNavigation
    ],
  },
  {
    name: "Pipeline",
    subpages: [ProductionNavigation, WorkflowNavigation],
  },
];

export default pages;
