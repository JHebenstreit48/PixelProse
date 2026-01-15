import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DescriptorSets = () => {
  const markdownFilePath = 'Graphics/Vulkan/Basics/Techniques/DescriptorSets';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Descriptor Sets" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DescriptorSets;
