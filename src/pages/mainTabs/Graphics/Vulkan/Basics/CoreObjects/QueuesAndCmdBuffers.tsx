import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
