import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const WorkerMessageTypes = () => {
  const markdownFilePath = 'Languages/TypeScript/Basics/Interop/DOMAndWorkers/WorkerMessageTypes';

  return (
    <>
      <PageLayout>
        <PageTitle title="Worker Message Types" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WorkerMessageTypes;
