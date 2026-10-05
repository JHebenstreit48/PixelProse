import type { Subpage } from '@/types/navigation';

import languages from '@/navigation/combined/topics/languages';
import engines from '@/navigation/combined/topics/engines';
import design from '@/navigation/combined/topics/design';
import graphics from '@/navigation/combined/topics/graphics';
import mobile from '@/navigation/combined/topics/mobile';
import toolsAndTesting from '@/navigation/combined/topics/toolsAndTesting';

const pages: Subpage[] = [
  languages,
  engines,
  design,
  graphics,
  mobile,
  toolsAndTesting,
];

export default pages;