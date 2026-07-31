import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const InstanceAndDevice = () => {
  const markdownFilePath = 'Graphics/Vulkan/Basics/CoreObjects/InstanceAndDevice';

  return (
    <>
      <PageLayout>
        <PageTitle title="Instance & Device" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default InstanceAndDevice;
