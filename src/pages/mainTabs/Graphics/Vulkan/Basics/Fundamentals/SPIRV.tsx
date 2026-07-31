import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const SPIRV = () => {
  const markdownFilePath = 'Graphics/Vulkan/Basics/Fundamentals/SPIRV';

  return (
    <>
      <PageLayout>
        <PageTitle title="SPIR-V" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SPIRV;
