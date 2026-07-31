import type { Subpage } from '@/types/navigation';

import Unity from '@/Navigation/Individual/FullTopics/Engines/Unity';
import Unreal from '@/Navigation/Individual/FullTopics/Engines/Unreal';
import Godot from '@/Navigation/Individual/FullTopics/Engines/Godot';
import Cry from '@/Navigation/Individual/FullTopics/Engines/Cry';
import Specialized from '@/Navigation/Individual/FullTopics/Engines/Specialized';

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