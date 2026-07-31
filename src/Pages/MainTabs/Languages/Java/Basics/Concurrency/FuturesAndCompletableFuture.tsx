import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const FuturesAndCompletableFuture = () => {
  const markdownFilePath = 'Languages/Java/Basics/Concurrency/FuturesAndCompletableFuture';

  return (
    <>
      <PageLayout>
        <PageTitle title="Futures & CompletableFuture" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FuturesAndCompletableFuture;
