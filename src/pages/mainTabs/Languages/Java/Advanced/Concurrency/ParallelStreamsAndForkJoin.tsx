import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
