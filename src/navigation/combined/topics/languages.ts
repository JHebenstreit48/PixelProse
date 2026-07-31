import type { Subpage } from '@/types/navigation';

import CFamily from '@/navigation/individual/topics/Languages/CFamily';
import Kotlin from '@/navigation/individual/topics/Languages/Kotlin';
import Lua from '@/navigation/individual/topics/Languages/Lua';
// import Python from '@/navigation/individual/topics/Languages/Python';
import Java from '@/navigation/individual/topics/Languages/Java';
import JavaScript from '@/navigation/individual/topics/Languages/JavaScript';
import TypeScript from '@/navigation/individual/topics/Languages/TypeScript';
import Swift from '@/navigation/individual/topics/Languages/Swift';
import Rust from '@/navigation/individual/topics/Languages/Rust';

const languages: Subpage = {
  name: 'Languages',
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