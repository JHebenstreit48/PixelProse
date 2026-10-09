import type { Subpage } from '@/types/navigation';

const Basics: Subpage = {
  name: 'Basics',
  subpages: [
    {
      name: 'Production Tracking',
      subpages: [
        {
          name: 'Agile & Scrum for Games',
          path: '/tools-and-testing/tools/project-management/basics/production-tracking/agile-and-scrum-for-games',
        },
        {
          name: 'Kanban Boards',
          path: '/tools-and-testing/tools/project-management/basics/production-tracking/kanban-boards',
        },
      ],
    },
    {
      name: 'Sprints & Meetings',
      subpages: [
        {
          name: 'Sprint Planning',
          path: '/tools-and-testing/tools/project-management/basics/sprints-and-meetings/sprint-planning',
        },
        {
          name: 'Stand-ups & Retrospectives',
          path: '/tools-and-testing/tools/project-management/basics/sprints-and-meetings/stand-ups-and-retrospectives',
        },
      ],
    },
  ],
};

export default Basics;