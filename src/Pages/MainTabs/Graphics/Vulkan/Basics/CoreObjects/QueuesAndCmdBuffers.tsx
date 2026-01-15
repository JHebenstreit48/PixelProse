import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const QueuesAndCmdBuffers = () => {
  const markdownFilePath = 'Graphics/Vulkan/Basics/CoreObjects/QueuesAndCmdBuffers';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Queues & Cmd Buffers" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default QueuesAndCmdBuffers;
