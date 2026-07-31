import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
