import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
