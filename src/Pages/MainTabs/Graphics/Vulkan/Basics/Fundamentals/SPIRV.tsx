import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SPIRV = () => {
  const markdownFilePath = 'Graphics/Vulkan/Basics/Fundamentals/SPIRV';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="SPIR-V" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SPIRV;
