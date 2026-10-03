import type { Subpage } from '@/types/navigation';

import VisualStudio from '@/navigation/individual/topics/ToolsAndTesting/Tools/VisualStudio';

const tools: Subpage = {
    name: "Tools",
    subpages: [
        VisualStudio,
    ]
}

export default tools;