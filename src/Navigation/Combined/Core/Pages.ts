import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

import languages from "@/Navigation/Combined/Topics/languages";
import engines from "@/Navigation/Combined/Topics/engines";
import graphics from "@/Navigation/Combined/Topics/graphics";
import design from "@/Navigation/Combined/Topics/design";
import mobile from "@/Navigation/Combined/Topics/mobile";

import ProductionNavigation from "@/Navigation/Individual/Granularized/Pipeline/Production";
import WorkflowNavigation from "@/Navigation/Individual/Granularized/Pipeline/Workflow";

const pages: Subpage[] = [
  languages,
  engines,
  graphics,
  design,
  mobile,
  {
    name: "Pipeline",
    subpages: [ProductionNavigation, WorkflowNavigation],
  },
];

export default pages;