import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

import languages from "@/Navigation/CombinedNav/CombinedNavTopics/languages";
import engines from "@/Navigation/CombinedNav/CombinedNavTopics/engines";
import graphics from "@/Navigation/CombinedNav/CombinedNavTopics/graphics";
import design from "@/Navigation/CombinedNav/CombinedNavTopics/design";

import ProductionNavigation from "@/Navigation/IndividualNav/Granularized/Pipeline/Production";
import WorkflowNavigation from "@/Navigation/IndividualNav/Granularized/Pipeline/Workflow";

const pages: Subpage[] = [
  languages,
  engines,
  graphics,
  design,
  {
    name: "Pipeline",
    subpages: [ProductionNavigation, WorkflowNavigation],
  },
];

export default pages;