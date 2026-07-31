import type { Subpage } from '@/types/navigation';

import Unity from '@/navigation/individual/topics/Engines/Unity';
import Unreal from '@/navigation/individual/topics/Engines/Unreal';
import Godot from '@/navigation/individual/topics/Engines/Godot';
import Cry from '@/navigation/individual/topics/Engines/Cry';
import Specialized from '@/navigation/individual/topics/Engines/Specialized';

const engines: Subpage = {
  name: "Engines",
  subpages: [
    Unity,
    Unreal,
    Godot,
    Cry,
    Specialized
  ],
};

export default engines;