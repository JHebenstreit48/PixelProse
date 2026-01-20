import { config } from '../config';

function cFamilyPascalOverride(raw: string): string | null {
  const s = raw.trim();
  if (s === 'C++') return 'CPlusPlus';
  if (s === 'C#') return 'CSharp';
  return null;
}

export function pascalize(raw: string): string {
  const override = cFamilyPascalOverride(raw);
  if (override) return override;

  return raw
    .replace(/['"]/g, '')
    .replace(/\(.*?\)/g, '')
    .replace(/&/g, ' and ')
    .replace(/[^a-zA-Z0-9]+/g, ' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join('');
}

export function sectionFolderName(sectionCrumb: string): string {
  return config.sectionNameMap[sectionCrumb] ?? pascalize(sectionCrumb);
}

export function topicFolderName(topicCrumb: string): string {
  return config.topicNameMap?.[topicCrumb] ?? pascalize(topicCrumb);
}

export function safeLazyVarName(parts: string[]): string {
  const name = parts.map(pascalize).join('');
  return `P_${name || 'Page'}`;
}

export function isGenericLeafName(name: string): boolean {
  return config.genericLeafNames.has(name);
}