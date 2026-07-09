import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const MemoryManagement = () => {
  const markdownFilePath = 'Graphics/Vulkan/Basics/MemoryAndSync/MemoryManagement';

  return (
    <>
      <PageLayout>
        <PageTitle title="Memory Management" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MemoryManagement;
