import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const QueuesAndCmdBuffers = () => {
  const markdownFilePath = 'Graphics/Vulkan/Basics/CoreObjects/QueuesAndCmdBuffers';

  return (
    <>
      <PageLayout>
        <PageTitle title="Queues & Cmd Buffers" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default QueuesAndCmdBuffers;
