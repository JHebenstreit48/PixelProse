import path from 'node:path';
import { config } from '../config';
import {
  pascalize,
  sectionFolderName,
  isGenericLeafName,
  safeLazyVarName,
  topicFolderName,
} from './naming';

export type Derived = {
  sectionCrumb: string;
  topicCrumb: string;
  sectionFolder: string;
  topicFolder: string;

  topicPrefix: string[];     // ✅ new: folders between topic and groups
  groupFolders: string[];

  componentName: string;

  pageFsPath: string;
  pageImportPath: string;
  markdownFilePath: string;

  urlPath: string;
  pageTitle: string;
  lazyVarName: string;
};

function normalizeGroupFolder(raw: string): string {
  return config.groupFolderNameMap?.[raw] ?? pascalize(raw);
}

export function derive(leaf: { urlPath: string; crumbs: string[] }): Derived {
  const [sectionCrumb = 'Misc', topicCrumb = 'Topic', ...rest] = leaf.crumbs;

  const sectionFolder = sectionFolderName(sectionCrumb);
  const topicFolder = topicFolderName ? topicFolderName(topicCrumb) : pascalize(topicCrumb);

  // static prefix from config (rare, but supported)
  const staticPrefix = config.topicFsPrefixMap?.[topicCrumb] ?? [];

  const groupsRaw = rest.slice(0, -1);
  const leafRaw = rest.at(-1) ?? 'Page';

  // ----------------------------
  // Dynamic prefix rules
  // ----------------------------
  let dynamicPrefix: string[] = [];
  let groupsStartIndex = 0;

  // PixelProse: "Languages > C Family > C/C++/C# > ..."
  // Treat the first group crumb (C, C++, C#) as a prefix folder.
  // Your nav for these likely uses "C", "C++", "C#" as names, and your Pages folder uses
  // C / CPlusPlus / CSharp — pascalize + PixelProse override will handle that.
  if (topicCrumb === 'C Family' && groupsRaw.length > 0) {
    dynamicPrefix = [pascalize(groupsRaw[0])];
    groupsStartIndex = 1;
  }

  const topicPrefix = [...staticPrefix, ...dynamicPrefix];

  const groupFolders = groupsRaw.slice(groupsStartIndex).map(normalizeGroupFolder);

  const componentName = pascalize(leafRaw);

  const pageFsPath = path.join(
    process.cwd(),
    config.pagesRoot,
    sectionFolder,
    topicFolder,
    ...topicPrefix,
    ...groupFolders,
    `${componentName}.tsx`
  );

  const rel = [...topicPrefix, ...groupFolders, componentName].join('/');
  const pageImportPath = `@/Pages/MainTabs/${sectionFolder}/${topicFolder}/${rel}`;
  const markdownFilePath = `${sectionFolder}/${topicFolder}/${rel}`;

  const parentGroup = groupFolders.at(-1) ?? topicPrefix.at(-1);
  const pageTitle =
    isGenericLeafName(leafRaw) && parentGroup ? `${parentGroup}: ${leafRaw}` : leafRaw;

  const lazyVarName = safeLazyVarName([
    sectionFolder,
    topicFolder,
    ...topicPrefix,
    ...groupFolders,
    componentName,
  ]);

  return {
    sectionCrumb,
    topicCrumb,
    sectionFolder,
    topicFolder,
    topicPrefix,
    groupFolders,
    componentName,
    pageFsPath,
    pageImportPath,
    markdownFilePath,
    urlPath: leaf.urlPath,
    pageTitle,
    lazyVarName,
  };
}