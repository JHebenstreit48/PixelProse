import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const AsyncSequences = () => {
  const markdownFilePath = 'Languages/Swift/Advanced/Concurrency/AsyncSequences';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Async Sequences" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AsyncSequences;
