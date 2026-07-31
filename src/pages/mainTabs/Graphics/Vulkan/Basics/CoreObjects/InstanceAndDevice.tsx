import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
