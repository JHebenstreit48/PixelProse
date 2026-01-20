export const config = {
  // Where to import the navigation root from (Subpage[])
  navEntryModule: '@/Navigation/Combined/Core/Pages',

  // Output roots
  pagesRoot: 'src/Pages/MainTabs',
  routesSectionsRoot: 'src/routes/Sections',

  sectionNameMap: {
    Languages: 'Languages',
    Engines: 'Engines',
    Design: 'Design',
    Graphics: 'Graphics',
    Pipeline: 'Pipeline',
    Mobile: 'Mobile',
  } as Record<string, string>,

  // Optional: override topic folder names (2nd crumb)
  topicNameMap: {
    // Example if you ever need one:
    // 'C Family': 'CFamily',
  } as Record<string, string>,

  // Optional: deeper nesting between topic and the rest of the crumbs.
  // For PixelProse we’ll use a *dynamic* prefix (see derive), but keeping
  // this allows static prefixes if you ever need them.
  topicFsPrefixMap: {
    // e.g. 'Some Topic': ['ExtraLayer']
  } as Record<string, string[]>,

  // Optional: normalize group folder names (crumbs after topic)
  groupFolderNameMap: {
    // Example:
    // 'Unit Testing': 'Testing',
  } as Record<string, string>,

  genericLeafNames: new Set([
    'Introduction',
    'Overview',
    'Basics',
    'Fundamentals',
    'Getting Started',
    'Setup',
  ]),

  defaultLimit: 10_000,
};