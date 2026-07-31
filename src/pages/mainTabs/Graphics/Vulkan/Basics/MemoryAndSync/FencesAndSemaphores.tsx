import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const FencesAndSemaphores = () => {
  const markdownFilePath = 'Graphics/Vulkan/Basics/MemoryAndSync/FencesAndSemaphores';

  return (
    <>
      <PageLayout>
        <PageTitle title="Fences & Semaphores" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FencesAndSemaphores;
