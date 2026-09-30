import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Modern Features",
      subpages: [
        {
          name: "LINQ",
          path: "/languages/c-family/c-sharp/advanced/linq"
        },
        {
          name: "Asynchronous Programming",
          path: "/languages/c-family/c-sharp/advanced/async"
        }
      ]
    },
    {
      name: "Game-Oriented Concepts",
      subpages: [
        {
          name: "Game Development Best Practices",
          path: "/languages/c-family/c-sharp/advanced/gamedev-practices"
        },
        {
          name: "Garbage Collection in Games",
          path: "/languages/c-family/c-sharp/advanced/garbage-collection"
        }
      ]
    }
  ]
};

export default Advanced;
