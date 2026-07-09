import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
