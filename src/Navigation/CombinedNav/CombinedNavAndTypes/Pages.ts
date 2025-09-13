import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

import languagesNav from "@/Navigation/CombinedNav/CombinedNavTopics/languages";
import enginesNav from "@/Navigation/CombinedNav/CombinedNavTopics/engines";

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
import HLSLNavigation from "@/Navigation/IndividualNav/Granularized/Graphics/ShadersNavigation/HLSL";
import GLSLNavigation from "@/Navigation/IndividualNav/Granularized/Graphics/ShadersNavigation/GLSL";
import PythonShadersNavigation from "@/Navigation/IndividualNav/Granularized/Graphics/ShadersNavigation/PythonShaders";
import DebuggingToolsNavigation from "@/Navigation/IndividualNav/Granularized/Graphics/ShadersNavigation/DebuggingTools";
// Shaders Navigation End

// Rendering APIs Navigation Start
import DirectXNavigation from "@/Navigation/IndividualNav/Granularized/Graphics/RenderingAPIsNavigation/DirectX";
import OpenGLNavigation from "@/Navigation/IndividualNav/Granularized/Graphics/RenderingAPIsNavigation/OpenGL";
import VulkanNavigation from "@/Navigation/IndividualNav/Granularized/Graphics/RenderingAPIsNavigation/Vulkan";
import PBRNavigation from "@/Navigation/IndividualNav/Granularized/Graphics/AdvancedTopicsNavigation/PBR";
import RayTracingNavigation from "@/Navigation/IndividualNav/Granularized/Graphics/AdvancedTopicsNavigation/RayTracing";
import GlobalIlluminationNavigation from "@/Navigation/IndividualNav/Granularized/Graphics/AdvancedTopicsNavigation/GlobalIllumination";
import PostProcessingEffectsNavigation from "@/Navigation/IndividualNav/Granularized/Graphics/AdvancedTopicsNavigation/PostProcessingEffects";
import ProductionNavigation from "@/Navigation/IndividualNav/Granularized/Pipeline/Production";
import WorkflowNavigation from "@/Navigation/IndividualNav/Granularized/Pipeline/Workflow";
import GameDesignBasicsNavigation from "@/Navigation/IndividualNav/Granularized/Design/DesignBasics";
import LevelDesignNavigation from "@/Navigation/IndividualNav/Granularized/Design/LevelDesign";
import GameMechanicsNavigation from "@/Navigation/IndividualNav/Granularized/Design/GameMechanics";
import NarrativeDesignNavigation from "@/Navigation/IndividualNav/Granularized/Design/NarrativeDesign";
import PrototypingToolsNavigation from "@/Navigation/IndividualNav/Granularized/Design/PrototypingAndTools";

// Rendering APIs Navigation End

// Graphics Programming Navigation End

const pages: Subpage[] = [
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
