import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ParallelStreamsAndForkJoin = () => {
  const markdownFilePath = 'Languages/Java/Advanced/Concurrency/ParallelStreamsAndForkJoin';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Parallel Streams & ForkJoin" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ParallelStreamsAndForkJoin;
