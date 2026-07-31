import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ThreadsAndExecutors = () => {
  const markdownFilePath = 'Languages/Java/Basics/Concurrency/ThreadsAndExecutors';

  return (
    <>
      <PageLayout>
        <PageTitle title="Threads & Executors" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ThreadsAndExecutors;
