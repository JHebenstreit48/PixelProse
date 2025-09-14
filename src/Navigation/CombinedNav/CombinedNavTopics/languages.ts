import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

import CFamily from '@/Navigation/IndividualNav/FullTopics/Languages/CFamily';
import Kotlin from '@/Navigation/IndividualNav/FullTopics/Languages/Kotlin';
import Lua from '@/Navigation/IndividualNav/FullTopics/Languages/Lua';
// import Python from '@/Navigation/IndividualNav/FullTopics/Languages/Python';
// import Java from '@/Navigation/IndividualNav/FullTopics/Languages/Java';
// import JavaScript from '@/Navigation/IndividualNav/FullTopics/Languages/JavaScript';
// import TypeScript from '@/Navigation/IndividualNav/FullTopics/Languages/TypeScript';
// import Swift from '@/Navigation/IndividualNav/FullTopics/Languages/Swift';
// import Rust from '@/Navigation/IndividualNav/FullTopics/Languages/Rust';

const languages: Subpage = {
  name: "Languages",
  subpages: [
    CFamily,
    Kotlin,
    Lua,
      // Python,
      // Java,
      // JavaScript,
      // TypeScript,
      // Swift,
      // Rust,
  ],
};

export default languages;