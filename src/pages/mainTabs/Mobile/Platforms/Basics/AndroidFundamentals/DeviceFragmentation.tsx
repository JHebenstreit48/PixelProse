import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const DeviceFragmentation = () => {
  const markdownFilePath = 'Mobile/Platforms/Basics/AndroidFundamentals/DeviceFragmentation';

  return (
    <>
      <PageLayout>
        <PageTitle title="Device Fragmentation" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DeviceFragmentation;
