import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: 'Advanced',
  subpages: [
    {
      name: 'Issue Tracking',
      subpages: [
        {
          name: 'JIRA Workflows',
          path: '/tools-and-testing/tools/project-management/advanced/issue-tracking/jira-workflows',
        },
        {
          name: 'Bug Triage',
          path: '/tools-and-testing/tools/project-management/advanced/issue-tracking/bug-triage',
        },
      ],
    },
    {
      name: 'Planning & Handoff',
      subpages: [
        {
          name: 'Milestones & Roadmaps',
          path: '/tools-and-testing/tools/project-management/advanced/planning-and-handoff/milestones-and-roadmaps',
        },
        {
          name: 'Spec Handoff (Figma/Notion)',
          path: '/tools-and-testing/tools/project-management/advanced/planning-and-handoff/spec-handoff-figma-notion',
        },
      ],
    },
  ],
};

export default Advanced;