import { Page, Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';
import allPages from '@/Navigation/CombinedNav/CombinedNavAndTypes/Pages';

export function findTrail(nodes: Subpage[] | Page[], currentPath: string): string[] | null {
  for (const node of nodes) {
    if ('path' in node && node.path === currentPath) {
      return [node.name];
    }

    if (node.subpages) {
      const result = findTrail(node.subpages, currentPath);
      if (result) {
        return [node.name, ...result];
      }
    }
  }

  return null;
}

/** Wrapper for entire project-wide breadcrumb resolution */
export function resolveBreadcrumbTrail(currentPath: string): string[] {
  for (const top of allPages) {
    const result = findTrail(top.subpages, currentPath);
    if (result) {
      return [top.name, ...result]; // include the section name
    }
  }

  return ['Unknown Page'];
}
