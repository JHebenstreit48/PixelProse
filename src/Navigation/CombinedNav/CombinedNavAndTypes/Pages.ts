import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

import languages from "@/Navigation/CombinedNav/CombinedNavTopics/languages";
import engines from "@/Navigation/CombinedNav/CombinedNavTopics/engines";
import graphics from "@/Navigation/CombinedNav/CombinedNavTopics/graphics";

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
  graphics,
  // {
  //   name: "Graphics",
  //   subpages: [
  //     {
  //       name: "Shaders",
  //       subpages: [
  //         HLSLNavigation,
  //         GLSLNavigation,
  //         PythonShadersNavigation,
  //         DebuggingToolsNavigation
  //       ],
  //     },
  //     {
  //       name: "Rendering APIs",
  //       subpages: [
  //         DirectXNavigation,
  //         OpenGLNavigation,
  //         VulkanNavigation
  //       ],
  //     },
  //     {
  //       name: "Advanced Topics",
  //       subpages: [
  //         PBRNavigation,
  //         RayTracingNavigation,
  //         GlobalIlluminationNavigation,
  //         PostProcessingEffectsNavigation
  //       ],
  //     },
  //   ],
  // },
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