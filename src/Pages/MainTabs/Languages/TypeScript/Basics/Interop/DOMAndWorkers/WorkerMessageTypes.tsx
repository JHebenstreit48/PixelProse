import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const WorkerMessageTypes = () => {
  const markdownFilePath = 'Languages/TypeScript/Basics/Interop/DOMAndWorkers/WorkerMessageTypes';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Worker Message Types" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WorkerMessageTypes;
