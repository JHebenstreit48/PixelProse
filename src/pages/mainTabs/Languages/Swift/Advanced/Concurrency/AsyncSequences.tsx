import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const AsyncSequences = () => {
  const markdownFilePath = 'Languages/Swift/Advanced/Concurrency/AsyncSequences';

  return (
    <>
      <PageLayout>
        <PageTitle title="Async Sequences" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AsyncSequences;
