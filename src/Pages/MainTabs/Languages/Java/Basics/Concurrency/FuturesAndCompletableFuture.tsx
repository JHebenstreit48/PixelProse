import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const FuturesAndCompletableFuture = () => {
  const markdownFilePath = 'Languages/Java/Basics/Concurrency/FuturesAndCompletableFuture';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Futures & CompletableFuture" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FuturesAndCompletableFuture;
