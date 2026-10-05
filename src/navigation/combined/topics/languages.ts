import type { Subpage } from '@/types/navigation';

import CFamily from '@/navigation/individual/topics/Languages/CFamily';
import Java from '@/navigation/individual/topics/Languages/Java';
import Kotlin from '@/navigation/individual/topics/Languages/Kotlin';
import Rust from '@/navigation/individual/topics/Languages/Rust';
import Lua from '@/navigation/individual/topics/Languages/Lua';
import Python from '@/navigation/individual/topics/Languages/Python';
import JavaScript from '@/navigation/individual/topics/Languages/JavaScript';
import TypeScript from '@/navigation/individual/topics/Languages/TypeScript';
import Swift from '@/navigation/individual/topics/Languages/Swift';


const languages: Subpage = {
  name: 'Languages',
  subpages: [
    CFamily,
    Java,
    Kotlin,
    Rust,
    Lua,
    Python,
    JavaScript,
    TypeScript,
    Swift,
    
  ],
};

export default languages;