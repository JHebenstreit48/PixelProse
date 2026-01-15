import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const FencesAndSemaphores = () => {
  const markdownFilePath = 'Graphics/Vulkan/Basics/MemoryAndSync/FencesAndSemaphores';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Fences & Semaphores" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FencesAndSemaphores;
