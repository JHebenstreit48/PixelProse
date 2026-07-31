import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
