import type { Subpage } from '@/types/navigation';

import languages from '@/navigation/combined/topics/languages';
import engines from '@/navigation/combined/topics/engines';
import design from '@/navigation/combined/topics/design';
import graphics from '@/navigation/combined/topics/graphics';
// import pipeline from '@/navigation/combined/topics/pipeline';
import mobile from '@/navigation/combined/topics/mobile';

const pages: Subpage[] = [
  languages,
  engines,
  design,
  graphics,
  // pipeline,
  mobile,
];

export default pages;