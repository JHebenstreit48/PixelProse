import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
