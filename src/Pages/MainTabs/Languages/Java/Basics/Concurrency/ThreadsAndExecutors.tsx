import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
