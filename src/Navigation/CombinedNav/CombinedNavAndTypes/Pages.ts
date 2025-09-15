import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

import languages from "@/Navigation/CombinedNav/CombinedNavTopics/languages";
import engines from "@/Navigation/CombinedNav/CombinedNavTopics/engines";

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
  languages,
  engines,
  //     {
  //       name: "Specialized Engines",
  //       subpages: [
  //         GameMaker,
  //         RPGMaker,
  //         Construct,
  //         RenPy
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
