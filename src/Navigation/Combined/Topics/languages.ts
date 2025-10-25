import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

import CFamily from '@/Navigation/Individual/FullTopics/Languages/CFamily';
import Kotlin from '@/Navigation/Individual/FullTopics/Languages/Kotlin';
import Lua from '@/Navigation/Individual/FullTopics/Languages/Lua';
// import Python from '@/Navigation/Individual/FullTopics/Languages/Python';
import Java from '@/Navigation/Individual/FullTopics/Languages/Java';
import JavaScript from '@/Navigation/Individual/FullTopics/Languages/JavaScript';
import TypeScript from '@/Navigation/Individual/FullTopics/Languages/TypeScript';
import Swift from '@/Navigation/Individual/FullTopics/Languages/Swift';
import Rust from '@/Navigation/Individual/FullTopics/Languages/Rust';

const languages: Subpage = {
  name: "Languages",
  subpages: [
    CFamily,
    Kotlin,
    Lua,
      // Python,
      Java,
      JavaScript,
      TypeScript,
      Swift,
      Rust,
  ],
};

export default languages;