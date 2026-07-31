import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const ParallelStreamsAndForkJoin = () => {
  const markdownFilePath = 'Languages/Java/Advanced/Concurrency/ParallelStreamsAndForkJoin';

  return (
    <>
      <PageLayout>
        <PageTitle title="Parallel Streams & ForkJoin" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ParallelStreamsAndForkJoin;
