import type { Subpage } from '@/types/navigation';

const Concurrency: Subpage = {
  name: 'Concurrency',
  subpages: [
    {
      name: 'Threads & Executors',
      path: '/languages/java/basics/concurrency/threads-and-executors',
    },
    {
      name: 'Futures & CompletableFuture',
      path: '/languages/java/basics/concurrency/futures-and-completablefuture',
    },
  ],
};

export default Concurrency;