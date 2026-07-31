import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const DescriptorSets = () => {
  const markdownFilePath = 'Graphics/Vulkan/Basics/Techniques/DescriptorSets';

  return (
    <>
      <PageLayout>
        <PageTitle title="Descriptor Sets" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DescriptorSets;
