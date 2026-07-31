import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const AsyncAwait = () => {
  const markdownFilePath = 'Languages/Swift/Basics/Concurrency/AsyncAwait';

  return (
    <>
      <PageLayout>
        <PageTitle title="Async/Await" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AsyncAwait;
