import type { Subpage } from '@/types/navigation';

import tools from '@/navigation/combined/topics/toolsAndTesting/tools';

const toolsAndTesting: Subpage = {
  name: "Tools & Testing",
  subpages: [
    tools,
  ],
};

export default toolsAndTesting;