import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
